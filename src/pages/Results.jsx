import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Eye, 
  ArrowRight, 
  BarChart3, 
  Check,
  X
} from 'lucide-react';
import { generateCertificateId } from '../utils/certificate';
import { formatSecondsToTime } from '../utils/scoring';

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;

  const [showReview, setShowReview] = useState(false);
  const [filterReview, setFilterReview] = useState('all'); // 'all', 'incorrect', 'correct'

  useEffect(() => {
    if (state?.result?.isPassed) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Safe fallback if confetti isn't supported
      }
    }
  }, [state]);

  if (!state || !state.result) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-navy-900">No Assessment Results Found</h2>
        <p className="text-slate-600 text-sm">Please complete an assessment to view score evaluation.</p>
        <Link to="/certifications" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:underline">
          <span>Browse Certifications</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  const {
    certId,
    certTitle,
    codePrefix,
    userName,
    result,
    questions,
    userAnswers,
    completedAt
  } = state;

  const {
    score,
    totalQuestions,
    percentage,
    correctCount,
    incorrectCount,
    unansweredCount,
    passingScore,
    isPassed,
    timeSpentSeconds,
    topicBreakdown
  } = result;

  const handleGenerateCertificate = () => {
    const certificateId = generateCertificateId(codePrefix || 'CPP');
    navigate('/certificate', {
      state: {
        studentName: userName,
        certificationTitle: certTitle,
        score,
        totalQuestions,
        percentage,
        issueDate: completedAt || new Date().toISOString(),
        certificateId,
        codePrefix: codePrefix || 'CPP',
        certId
      }
    });
  };

  const handleRetake = () => {
    navigate(`/assessment/${certId}`);
  };

  // Filter review questions
  const filteredQuestions = (questions || []).filter(q => {
    const userChoice = userAnswers[q.id];
    const isCorrect = userChoice !== undefined && Number(userChoice) === Number(q.correctAnswer);
    if (filterReview === 'correct') return isCorrect;
    if (filterReview === 'incorrect') return !isCorrect;
    return true;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header Evaluation Banner */}
      <div className={`p-8 sm:p-10 rounded-2xl border text-center relative overflow-hidden ${
        isPassed
          ? 'bg-gradient-to-b from-emerald-50/70 via-white to-emerald-50/30 border-emerald-200'
          : 'bg-gradient-to-b from-rose-50/60 via-white to-slate-50 border-rose-200'
      }`}>
        
        <div className="max-w-2xl mx-auto space-y-4">
          
          {/* Status Icon */}
          <div className="inline-flex items-center justify-center">
            {isPassed ? (
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>
            ) : (
              <div className="w-16 h-16 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shadow-sm">
                <XCircle className="w-10 h-10" />
              </div>
            )}
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            {isPassed ? 'Congratulations! You Passed' : 'Assessment Not Passed'}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {isPassed ? (
              <>
                You demonstrated strong foundational knowledge in <strong>{certTitle}</strong> by exceeding the required passing score of 70%. Your certificate is ready for generation.
              </>
            ) : (
              <>
                You scored <strong>{score}/50 ({percentage}%)</strong>. A minimum score of <strong>35/50 (70%)</strong> is required to earn the certificate. Review your answers below and try again.
              </>
            )}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            {isPassed ? (
              <>
                <button
                  type="button"
                  onClick={handleGenerateCertificate}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm shadow-md transition-all"
                >
                  <Award className="w-4 h-4" />
                  <span>Generate Certificate</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowReview(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-all"
                >
                  <Eye className="w-4 h-4 text-slate-500" />
                  <span>Review Answers</span>
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={handleRetake}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-semibold text-sm shadow-md transition-all"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Retake Assessment</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowReview(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-all"
                >
                  <Eye className="w-4 h-4 text-slate-500" />
                  <span>Review Answers</span>
                </button>
              </>
            )}
          </div>

        </div>
      </div>

      {/* Metrics Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        
        <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-subtle text-center">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Final Score</span>
          <span className="text-2xl font-extrabold text-navy-900 mt-1 block">
            {score} <span className="text-sm font-normal text-slate-400">/ {totalQuestions}</span>
          </span>
          <span className="text-xs text-slate-500 mt-1 block">Passing: {passingScore}/50</span>
        </div>

        <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-subtle text-center">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Percentage</span>
          <span className={`text-2xl font-extrabold mt-1 block ${isPassed ? 'text-emerald-600' : 'text-rose-600'}`}>
            {percentage}%
          </span>
          <span className="text-xs text-slate-500 mt-1 block">Required: 70%</span>
        </div>

        <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-subtle text-center">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Correct / Incorrect</span>
          <div className="flex items-center justify-center gap-3 mt-1">
            <span className="text-lg font-bold text-emerald-600">✓ {correctCount}</span>
            <span className="text-slate-300">|</span>
            <span className="text-lg font-bold text-rose-600">✗ {incorrectCount}</span>
          </div>
          <span className="text-xs text-slate-500 mt-1 block">Unanswered: {unansweredCount}</span>
        </div>

        <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-subtle text-center">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Time Elapsed</span>
          <span className="text-2xl font-extrabold text-navy-900 mt-1 block">
            {formatSecondsToTime(timeSpentSeconds)}
          </span>
          <span className="text-xs text-slate-500 mt-1 block">Limit: 45:00</span>
        </div>

      </div>

      {/* Topic-Wise Performance Breakdown */}
      {topicBreakdown && topicBreakdown.length > 0 && (
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-subtle space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="font-bold text-base text-navy-900 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-brand-600" />
              <span>Topic-Wise Mastery Breakdown</span>
            </h3>
            <span className="text-xs text-slate-500">Performance across exam sections</span>
          </div>

          <div className="space-y-3 pt-2">
            {topicBreakdown.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-slate-700">{item.topic}</span>
                  <span className="text-slate-500">
                    <strong className="text-navy-900">{item.correct}</strong> of {item.total} correct ({item.percentage}%)
                  </span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      item.percentage >= 70
                        ? 'bg-emerald-500'
                        : item.percentage >= 50
                        ? 'bg-amber-500'
                        : 'bg-rose-500'
                    }`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Detailed Question Review Mode */}
      {showReview && (
        <section className="space-y-6 pt-6 border-t border-slate-200">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-navy-900">
                Detailed Answer Review
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Inspect every question with correct answers and detailed explanations.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setFilterReview('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  filterReview === 'all' ? 'bg-navy-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                All (50)
              </button>
              <button
                onClick={() => setFilterReview('correct')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  filterReview === 'correct' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Correct ({correctCount})
              </button>
              <button
                onClick={() => setFilterReview('incorrect')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  filterReview === 'incorrect' ? 'bg-rose-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Incorrect / Skipped ({incorrectCount + unansweredCount})
              </button>
            </div>
          </div>

          {/* Question List */}
          <div className="space-y-6">
            {filteredQuestions.map((q) => {
              const userChoice = userAnswers[q.id];
              const isUnanswered = userChoice === undefined || userChoice === null;
              const isCorrect = !isUnanswered && Number(userChoice) === Number(q.correctAnswer);

              return (
                <div 
                  key={q.id}
                  className={`bg-white rounded-xl border p-6 shadow-subtle space-y-4 ${
                    isCorrect ? 'border-emerald-200' : 'border-rose-200'
                  }`}
                >
                  
                  {/* Top line: Q Number, Topic, Status */}
                  <div className="flex items-center justify-between text-xs border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-navy-900 bg-slate-100 px-2 py-0.5 rounded">
                        Q{q.id}
                      </span>
                      <span className="text-slate-600 font-medium">{q.topic}</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-500">{q.difficulty}</span>
                    </div>

                    <div>
                      {isCorrect ? (
                        <span className="inline-flex items-center gap-1 font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          <Check className="w-3.5 h-3.5" />
                          Correct
                        </span>
                      ) : isUnanswered ? (
                        <span className="inline-flex items-center gap-1 font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                          Unanswered
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                          <X className="w-3.5 h-3.5" />
                          Incorrect
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Question */}
                  <p className="text-sm sm:text-base font-semibold text-navy-900 whitespace-pre-line leading-relaxed">
                    {q.question}
                  </p>

                  {/* Options */}
                  <div className="space-y-2">
                    {q.options.map((opt, oIdx) => {
                      const isSelectedByUser = Number(userChoice) === oIdx;
                      const isTheCorrectOption = Number(q.correctAnswer) === oIdx;

                      let style = 'bg-slate-50 border-slate-200 text-slate-700';

                      if (isTheCorrectOption) {
                        style = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold ring-1 ring-emerald-500';
                      } else if (isSelectedByUser && !isCorrect) {
                        style = 'bg-rose-50 border-rose-400 text-rose-900 font-semibold line-through';
                      }

                      return (
                        <div key={oIdx} className={`p-3 rounded-lg border text-xs sm:text-sm flex items-center justify-between ${style}`}>
                          <span>{opt}</span>
                          {isTheCorrectOption && (
                            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded ml-2 flex-shrink-0">
                              Correct Answer
                            </span>
                          )}
                          {isSelectedByUser && !isCorrect && (
                            <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 bg-rose-100 px-2 py-0.5 rounded ml-2 flex-shrink-0">
                              Your Selection
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation Box */}
                  <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                    <span className="font-bold text-navy-900 block">Explanation:</span>
                    <p className="leading-relaxed">{q.explanation}</p>
                  </div>

                </div>
              );
            })}
          </div>

        </section>
      )}

    </div>
  );
}
