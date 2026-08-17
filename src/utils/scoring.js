/**
 * Scoring & Assessment Calculation Utilities
 */

export function calculateAssessmentResult(questions, userAnswers, totalTimeSeconds = 2700, remainingTimeSeconds = 0) {
  let correctCount = 0;
  let incorrectCount = 0;
  let unansweredCount = 0;

  const topicBreakdown = {};

  questions.forEach(q => {
    const topic = q.topic || 'General';
    if (!topicBreakdown[topic]) {
      topicBreakdown[topic] = {
        topic,
        total: 0,
        correct: 0,
        incorrect: 0,
        unanswered: 0
      };
    }

    topicBreakdown[topic].total += 1;

    const selectedOption = userAnswers[q.id];

    if (selectedOption === undefined || selectedOption === null) {
      unansweredCount += 1;
      topicBreakdown[topic].unanswered += 1;
    } else if (Number(selectedOption) === Number(q.correctAnswer)) {
      correctCount += 1;
      topicBreakdown[topic].correct += 1;
    } else {
      incorrectCount += 1;
      topicBreakdown[topic].incorrect += 1;
    }
  });

  const totalQuestions = questions.length;
  const score = correctCount;
  const percentage = Math.round((correctCount / totalQuestions) * 100);
  const isPassed = score >= 35 && percentage >= 70;
  const timeSpentSeconds = Math.max(0, totalTimeSeconds - remainingTimeSeconds);

  return {
    totalQuestions,
    score,
    percentage,
    correctCount,
    incorrectCount,
    unansweredCount,
    passingScore: 35,
    passingPercentage: 70,
    isPassed,
    timeSpentSeconds,
    topicBreakdown: Object.values(topicBreakdown).map(t => ({
      ...t,
      percentage: Math.round((t.correct / t.total) * 100)
    }))
  };
}

export function formatSecondsToTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}
