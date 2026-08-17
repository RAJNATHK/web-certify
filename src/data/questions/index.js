/**
 * CertifyCode Academy - Question Bank Registry
 * All 6 software engineering certification tracks fully mapped and active.
 */
import { cppQuestions } from './cppQuestions';
import { javaQuestions } from './javaQuestions';
import { pythonQuestions } from './pythonQuestions';
import { sqlQuestions } from './sqlQuestions';
import { javascriptQuestions } from './javascriptQuestions';
import { htmlCssQuestions } from './htmlCssQuestions';

export const questionBanks = {
  'cpp-fundamentals': cppQuestions,
  'java-fundamentals': javaQuestions,
  'python-fundamentals': pythonQuestions,
  'sql-fundamentals': sqlQuestions,
  'javascript-fundamentals': javascriptQuestions,
  'html-css-fundamentals': htmlCssQuestions,
};

export function getQuestionsByCertificationId(certId) {
  return questionBanks[certId] || null;
}
