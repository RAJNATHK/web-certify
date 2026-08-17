import { jsPDF } from 'jspdf';
import { saveCertificateRecord } from './storage';

/**
 * Generates a unique, standardized certificate ID
 * Format: [PREFIX]-[RANDOM_4_HEX]-[RANDOM_4_HEX]
 */
export function generateCertificateId(prefix = 'CPP') {
  const part1 = Math.floor(1000 + Math.random() * 9000);
  const part2 = Math.floor(1000 + Math.random() * 9000);
  return `${prefix.toUpperCase()}-${part1}-${part2}`;
}

/**
 * Format date nicely for certificate
 */
export function formatCertificateDate(date = new Date()) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date(date));
}

/**
 * Generates a high-resolution, vector-drawn A4 Landscape PDF Certificate
 */
export function generateCertificatePDF({
  studentName,
  certificationTitle,
  score,
  totalQuestions = 50,
  percentage,
  issueDate = new Date(),
  certificateId,
  codePrefix = 'CPP'
}) {
  // A4 Landscape: 297mm width x 210mm height
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4'
  });

  const width = 297;
  const height = 210;
  const margin = 10;

  // Background subtle tone
  doc.setFillColor(252, 253, 255);
  doc.rect(0, 0, width, height, 'F');

  // Outer border - Dark Navy (#0F172A)
  doc.setDrawColor(15, 23, 42);
  doc.setLineWidth(2);
  doc.rect(margin, margin, width - margin * 2, height - margin * 2);

  // Inner border - Elegant Accent Royal Blue (#2563EB)
  doc.setDrawColor(37, 99, 235);
  doc.setLineWidth(0.7);
  doc.rect(margin + 3.5, margin + 3.5, width - (margin + 3.5) * 2, height - (margin + 3.5) * 2);

  // Corner decorative marks
  const corners = [
    [margin + 6, margin + 6],
    [width - margin - 6, margin + 6],
    [margin + 6, height - margin - 6],
    [width - margin - 6, height - margin - 6]
  ];
  doc.setFillColor(37, 99, 235);
  corners.forEach(([cx, cy]) => {
    doc.circle(cx, cy, 1.2, 'F');
  });

  // Top Platform Branding
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(15);
  doc.setTextColor(15, 23, 42);
  doc.text('CERTIFYCODE', width / 2, 28, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(100, 116, 139);
  doc.text('ONLINE PROGRAMMING ASSESSMENT & CERTIFICATION', width / 2, 33, { align: 'center' });

  // Divider line with diamond center
  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(0.4);
  doc.line(width / 2 - 40, 37, width / 2 + 40, 37);

  // Main Header: CERTIFICATE OF ACHIEVEMENT
  doc.setFont('times', 'bold');
  doc.setFontSize(24);
  doc.setTextColor(15, 23, 42);
  doc.text('CERTIFICATE OF ACHIEVEMENT', width / 2, 48, { align: 'center' });

  // Subtitle
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(10.5);
  doc.setTextColor(100, 116, 139);
  doc.text('This certificate is proudly awarded to', width / 2, 58, { align: 'center' });

  // Recipient Student Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(30, 58, 138); // Deep royal
  doc.text(studentName.trim(), width / 2, 72, { align: 'center' });

  // Underline beneath name
  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(0.5);
  const nameWidth = Math.max(80, doc.getTextWidth(studentName.trim()) + 20);
  doc.line(width / 2 - nameWidth / 2, 76, width / 2 + nameWidth / 2, 76);

  // Body text
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10.5);
  doc.setTextColor(51, 65, 85);
  doc.text(
    'for successfully demonstrating foundational programming knowledge by passing the',
    width / 2,
    86,
    { align: 'center' }
  );

  // Certification Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(15, 23, 42);
  doc.text(certificationTitle, width / 2, 96, { align: 'center' });

  // Assessment Performance Box
  const boxY = 106;
  const boxW = 160;
  const boxH = 22;
  const boxX = (width - boxW) / 2;

  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.4);
  doc.roundedRect(boxX, boxY, boxW, boxH, 2, 2, 'FD');

  // Performance Columns
  // Col 1: Score
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text(`${score} / ${totalQuestions}`, boxX + 27, boxY + 9, { align: 'center' });
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(100, 116, 139);
  doc.text('ASSESSMENT SCORE', boxX + 27, boxY + 16, { align: 'center' });

  // Separator 1
  doc.line(boxX + 53, boxY + 4, boxX + 53, boxY + 18);

  // Col 2: Percentage
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(16, 185, 129); // Success green
  doc.text(`${percentage}%`, boxX + 80, boxY + 9, { align: 'center' });
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(100, 116, 139);
  doc.text('GRADE PERCENTAGE', boxX + 80, boxY + 16, { align: 'center' });

  // Separator 2
  doc.line(boxX + 107, boxY + 4, boxX + 107, boxY + 18);

  // Col 3: Passing Threshold
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text('70% (35/50)', boxX + 133, boxY + 9, { align: 'center' });
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(100, 116, 139);
  doc.text('PASSING THRESHOLD', boxX + 133, boxY + 16, { align: 'center' });

  // Bottom Section: Signatures / Metadata
  const footY = 148;

  // Left column: Issue Date & Credential ID
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('ISSUANCE DETAILS', margin + 25, footY);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(71, 85, 105);
  doc.text(`Issue Date: ${formatCertificateDate(issueDate)}`, margin + 25, footY + 6);
  doc.text(`Certificate ID: ${certificateId}`, margin + 25, footY + 11);
  doc.text(`Assessment Format: 50-Question Timed Exam`, margin + 25, footY + 16);

  // Right column: Authorized Platform Authority
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('ISSUING PLATFORM', width - margin - 65, footY);

  // Digital verification stamp simulation
  doc.setDrawColor(37, 99, 235);
  doc.setLineWidth(0.4);
  doc.line(width - margin - 65, footY + 13, width - margin - 20, footY + 13);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(71, 85, 105);
  doc.text('CertifyCode Academic Board', width - margin - 65, footY + 17);
  doc.setFontSize(7);
  doc.setTextColor(148, 163, 184);
  doc.text('Authenticated Online Examination', width - margin - 65, footY + 21);

  // Center Emblem / Seal
  const sealX = width / 2;
  const sealY = footY + 5;
  doc.setDrawColor(217, 119, 6); // Amber gold outer ring
  doc.setLineWidth(0.8);
  doc.circle(sealX, sealY, 12, 'S');
  doc.setDrawColor(37, 99, 235);
  doc.setLineWidth(0.3);
  doc.circle(sealX, sealY, 10.5, 'S');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(6);
  doc.setTextColor(180, 83, 9);
  doc.text('VERIFIED', sealX, sealY - 2.5, { align: 'center' });
  doc.text('ACHIEVEMENT', sealX, sealY + 1, { align: 'center' });
  doc.setFontSize(5);
  doc.setTextColor(100, 116, 139);
  doc.text('CERTIFYCODE', sealX, sealY + 4.5, { align: 'center' });

  // Bottom Disclaimer Footer
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(148, 163, 184);
  const disclaimer = 'Issued upon successful completion of the CertifyCode online assessment. Represents individual demonstration of foundational programming concepts.';
  doc.text(disclaimer, width / 2, height - margin - 4, { align: 'center' });

  // Auto-save certificate to localStorage records
  saveCertificateRecord({
    certificateId,
    studentName,
    certificationTitle,
    codePrefix,
    score,
    totalQuestions,
    percentage,
    issueDate: new Date(issueDate).toISOString()
  });

  return doc;
}

/**
 * Downloads the generated PDF file directly
 */
export function downloadCertificatePDF(params) {
  const doc = generateCertificatePDF(params);
  const safeName = params.studentName.replace(/[^a-zA-Z0-9]/g, '_');
  const filename = `CertifyCode_${params.codePrefix || 'CPP'}_Certificate_${safeName}.pdf`;
  doc.save(filename);
}
