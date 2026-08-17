/**
 * Safe localStorage utilities for CertifyCode MVP
 */

const STORAGE_KEYS = {
  USER_NAME: 'certifycode_user_name',
  ACTIVE_EXAM: 'certifycode_active_exam',
  SAVED_CERTS: 'certifycode_certificates',
  HISTORY: 'certifycode_exam_history'
};

export function getStoredUserName() {
  try {
    return localStorage.getItem(STORAGE_KEYS.USER_NAME) || '';
  } catch (e) {
    console.error('Storage error:', e);
    return '';
  }
}

export function saveStoredUserName(name) {
  try {
    const trimmed = (name || '').trim();
    localStorage.setItem(STORAGE_KEYS.USER_NAME, trimmed);
    return trimmed;
  } catch (e) {
    console.error('Storage error:', e);
    return name;
  }
}

export function getActiveExamSession() {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.ACTIVE_EXAM);
    return data ? JSON.parse(data) : null;
  } catch (e) {
    console.error('Failed to parse active exam session:', e);
    return null;
  }
}

export function saveActiveExamSession(session) {
  try {
    localStorage.setItem(STORAGE_KEYS.ACTIVE_EXAM, JSON.stringify(session));
  } catch (e) {
    console.error('Failed to save exam session:', e);
  }
}

export function clearActiveExamSession() {
  try {
    localStorage.removeItem(STORAGE_KEYS.ACTIVE_EXAM);
  } catch (e) {
    console.error('Failed to clear exam session:', e);
  }
}

export function saveCertificateRecord(certRecord) {
  try {
    const existing = getStoredCertificates();
    const filtered = existing.filter(c => c.certificateId !== certRecord.certificateId);
    filtered.unshift(certRecord);
    localStorage.setItem(STORAGE_KEYS.SAVED_CERTS, JSON.stringify(filtered));
  } catch (e) {
    console.error('Failed to save certificate record:', e);
  }
}

export function getStoredCertificates() {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.SAVED_CERTS);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function getCertificateRecordById(certId) {
  const targetId = (certId || '').trim().toLowerCase();
  if (!targetId) return null;

  const all = getStoredCertificates();
  const found = all.find(c => c.certificateId.toLowerCase() === targetId);
  if (found) return found;

  // Fallback demo record for sample ID shown on homepage
  if (targetId === 'cpp-9182-4029') {
    return {
      certificateId: 'CPP-9182-4029',
      studentName: getStoredUserName() || 'Alexander Vance, M.S.',
      certificationTitle: 'C++ Systems Programming & Memory Architecture',
      codePrefix: 'CPP',
      score: 46,
      totalQuestions: 50,
      percentage: 92,
      isPassed: true,
      issueDate: '2026-01-15T10:00:00.000Z'
    };
  }

  return null;
}
