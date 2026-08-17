import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getCertificationById } from '../data/certifications';
import { getQuestionsByCertificationId } from '../data/questions';
import { getStoredUserName } from '../utils/storage';
import { calculateAssessmentResult } from '../utils/scoring';
import QuestionCard from '../components/QuestionCard';
import QuestionNavPanel from '../components/QuestionNavPanel';
import Timer from '../components/Timer';
import ProgressBar from '../components/ProgressBar';
import SubmitModal from '../components/SubmitModal';
import { 
  ArrowLeft, 
  ArrowRight, 
  Send, 
  Layers
} from 'lucide-react';

const EXAM_DURATION_SECONDS = 45 * 60; // 45 minutes = 2700 seconds

export default function Assessment() {
  const { id } = useParams();
  const navigate = useNavigate();

  const cert = getCertificationById(id);
  const rawQuestions = getQuestionsByCertificationId(id);

  const [userName, setUserName] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [flaggedQuestions, setFlaggedQuestions] = useState({});
  const [remainingSeconds, setRemainingSeconds] = useState(EXAM_DURATION_SECONDS);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [mobilePaletteOpen, setMobilePaletteOpen] = useState(false);

  // Final Submit callback
  const handleFinalSubmit = useCallback(() => {
    if (!rawQuestions || !cert) return;

    const result = calculateAssessmentResult(
      rawQuestions,
      userAnswers,
      EXAM_DURATION_SECONDS,
      remainingSeconds
    );

    // Navigate to Results page with full evaluation context
    navigate('/results', {
      state: {
        certId: cert.id,
        certTitle: cert.title,
        codePrefix: cert.codePrefix,
        userName,
        result,
        questions: rawQuestions,
        userAnswers,
        completedAt: new Date().toISOString()
      },
      replace: true
    });
  }, [rawQuestions, cert, userAnswers, remainingSeconds, userName, navigate]);

  // Initialize and check prerequisites
  useEffect(() => {
    const name = getStoredUserName();
    if (!name) {
      navigate(`/certifications/${id}`);
      return;
    }
    setUserName(name);
  }, [id, navigate]);

  // Timer countdown
  useEffect(() => {
    if (remainingSeconds <= 0) {
      handleFinalSubmit();
      return;
    }

    const timer = setInterval(() => {
      setRemainingSeconds(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [remainingSeconds, handleFinalSubmit]);
  const handleSelectOption = (optionIndex) => {
    if (!rawQuestions) return;
    const currentQuestion = rawQuestions[currentIndex];
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: optionIndex
    }));
  };

  // Toggle mark for review
  const handleToggleFlag = () => {
    if (!rawQuestions) return;
    const currentQuestion = rawQuestions[currentIndex];
    setFlaggedQuestions(prev => ({
      ...prev,
      [currentQuestion.id]: !prev[currentQuestion.id]
    }));
  };

  // Jump to next question
  const handleNext = () => {
    if (rawQuestions && currentIndex < rawQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setIsSubmitModalOpen(true);
    }
  };

  // Jump to previous question
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  // Jump to specific index
  const handleJumpToQuestion = (index) => {
    setCurrentIndex(index);
    setMobilePaletteOpen(false);
  };

  if (!cert || !rawQuestions || rawQuestions.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-navy-900">Assessment Unavailable</h2>
        <p className="text-slate-600 text-sm">The assessment data for this track could not be loaded.</p>
        <Link to="/certifications" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:underline">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Certifications</span>
        </Link>
      </div>
    );
  }

  const currentQuestion = rawQuestions[currentIndex];
  const answeredCount = Object.keys(userAnswers).length;
  const isCurrentFlagged = !!flaggedQuestions[currentQuestion.id];
  const selectedOption = userAnswers[currentQuestion.id];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      
      {/* Sticky Assessment Top Bar */}
      <div className="sticky top-0 z-30 bg-white border-b border-slate-200 shadow-subtle px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          
          {/* Exam Name & Progress summary */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-navy-900 text-white flex items-center justify-center font-bold text-xs">
              {cert.badge}
            </div>
            <div>
              <h1 className="text-sm font-bold text-navy-900 leading-tight">
                {cert.title}
              </h1>
              <span className="text-xs text-slate-500 font-medium">
                Candidate: <strong className="text-navy-900">{userName}</strong>
              </span>
            </div>
          </div>

          {/* Center Progress Bar */}
          <div className="hidden md:block w-64 lg:w-80">
            <ProgressBar current={answeredCount} total={rawQuestions.length} />
          </div>

          {/* Right Timer & Submit CTA */}
          <div className="flex items-center gap-3">
            <Timer remainingSeconds={remainingSeconds} />

            <button
              type="button"
              onClick={() => setIsSubmitModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-navy-900 hover:bg-navy-800 text-white text-xs font-semibold shadow-sm transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit</span>
            </button>

            {/* Mobile Palette Toggle Button */}
            <button
              type="button"
              onClick={() => setMobilePaletteOpen(!mobilePaletteOpen)}
              className="md:hidden p-2 rounded-lg border border-slate-200 text-slate-600 text-xs font-semibold"
            >
              <Layers className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

      {/* Main Workspace Layout */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Active Question Workspace */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Mobile Progress Bar (Visible on small screens) */}
            <div className="md:hidden">
              <ProgressBar current={answeredCount} total={rawQuestions.length} />
            </div>

            {/* Active Question Card */}
            <QuestionCard
              question={currentQuestion}
              questionIndex={currentIndex}
              totalQuestions={rawQuestions.length}
              selectedOption={selectedOption}
              onSelectOption={handleSelectOption}
              isFlagged={isCurrentFlagged}
              onToggleFlag={handleToggleFlag}
            />

            {/* Bottom Controls / Action Bar */}
            <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-subtle flex items-center justify-between gap-3">
              
              {/* Previous Button */}
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold border transition-all ${
                  currentIndex === 0
                    ? 'border-slate-200 text-slate-400 bg-slate-50 cursor-not-allowed'
                    : 'border-slate-300 text-slate-700 hover:bg-slate-50 active:bg-slate-100'
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              {/* Quick Status Text */}
              <span className="text-xs font-medium text-slate-500 hidden sm:inline">
                {answeredCount} of {rawQuestions.length} questions answered
              </span>

              {/* Next or Finish Button */}
              {currentIndex < rawQuestions.length - 1 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold transition-all shadow-sm"
                >
                  <span>Next Question</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsSubmitModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition-all shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Review & Submit</span>
                </button>
              )}

            </div>

          </div>

          {/* Right Column: Question Navigator Palette (Desktop) */}
          <div className="hidden lg:block lg:col-span-4 sticky top-24">
            <QuestionNavPanel
              questions={rawQuestions}
              currentIndex={currentIndex}
              userAnswers={userAnswers}
              flaggedQuestions={flaggedQuestions}
              onSelectQuestion={handleJumpToQuestion}
              onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
            />
          </div>

        </div>
      </main>

      {/* Mobile Drawer Question Palette */}
      {mobilePaletteOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="bg-white w-full sm:max-w-lg rounded-t-2xl sm:rounded-2xl p-5 max-h-[85vh] overflow-y-auto animate-slideUp">
            <div className="flex justify-between items-center pb-3 mb-3 border-b border-slate-100">
              <h3 className="font-bold text-navy-900 text-sm">Question Navigation</h3>
              <button
                onClick={() => setMobilePaletteOpen(false)}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800"
              >
                Close ✕
              </button>
            </div>
            <QuestionNavPanel
              questions={rawQuestions}
              currentIndex={currentIndex}
              userAnswers={userAnswers}
              flaggedQuestions={flaggedQuestions}
              onSelectQuestion={handleJumpToQuestion}
              onOpenSubmitModal={() => {
                setMobilePaletteOpen(false);
                setIsSubmitModalOpen(true);
              }}
            />
          </div>
        </div>
      )}

      {/* Submit Confirmation Modal */}
      <SubmitModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        onSubmit={handleFinalSubmit}
        totalQuestions={rawQuestions.length}
        answeredCount={answeredCount}
        flaggedCount={Object.keys(flaggedQuestions).filter(k => flaggedQuestions[k]).length}
      />

    </div>
  );
}
