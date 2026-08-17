import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AdBanner } from '../components/AdPlaceholder';

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Are the certifications completely free?',
      a: 'Yes, 100%. There are no fees to take an assessment, view answer explanations, or download your PDF certificate of achievement.'
    },
    {
      q: 'How many questions are in each assessment?',
      a: 'Each assessment contains exactly 50 technically curated multiple-choice questions with 4 options per question and one correct answer.'
    },
    {
      q: 'What is the passing score requirement?',
      a: 'You must score at least 35 out of 50 questions (70%) to pass and unlock certificate generation.'
    },
    {
      q: 'Can I retake an assessment if I do not pass?',
      a: 'Yes. You can retake any assessment as many times as you like without restriction. We encourage reviewing the topic explanations before retaking.'
    },
    {
      q: 'How do I receive my certificate?',
      a: 'Your certificate is generated immediately in your web browser upon achieving a score of 35/50 or higher. You can download it directly as a high-resolution Landscape A4 PDF or print it.'
    },
    {
      q: 'Is there any hidden fee to download or print the PDF?',
      a: 'No. Both the digital preview and the downloadable PDF file are free.'
    },
    {
      q: 'Can I add the certificate to my resume and LinkedIn profile?',
      a: 'Yes. Many students, graduates, and self-taught developers add their CertifyCode certificate under the "Certifications" section of their resume or LinkedIn profile.'
    },
    {
      q: 'Are these certifications accredited by a university or government body?',
      a: 'No. Certificates issued by CertifyCode represent successful completion of our online technical assessments. They are not accredited by universities, government departments, or third-party vendors.'
    },
    {
      q: 'How long does the assessment take?',
      a: 'Each assessment has a timer limit of 45 minutes (~54 seconds per question). Most candidates complete the exam within 25 to 35 minutes.'
    },
    {
      q: 'How are questions distributed in terms of difficulty?',
      a: 'Every 50-question assessment is balanced with 20 Easy questions, 20 Medium questions, and 10 Moderate questions to provide a comprehensive evaluation.'
    },
    {
      q: 'Do I need to create an account or register?',
      a: 'No account registration is required for this version. You simply enter your full name prior to beginning the test so it can be rendered onto your certificate.'
    }
  ];

  const filteredFaqs = faqs.filter(f => 
    f.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
    f.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Frequently Asked Questions</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
          Everything You Need to Know
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
          Clear, transparent answers about our assessments, scoring, retakes, and certificates.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search questions (e.g. score, retake, accredited, PDF)..."
          className="w-full pl-10 pr-4 py-3 text-sm bg-white border border-slate-200 rounded-xl shadow-subtle focus:outline-none focus:ring-2 focus:ring-brand-500 text-navy-900"
        />
      </div>

      {/* Accordion FAQ List */}
      <div className="space-y-3">
        {filteredFaqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-200 shadow-subtle overflow-hidden transition-all"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-navy-900 text-sm sm:text-base hover:bg-slate-50 transition-colors"
              >
                <span>{faq.q}</span>
                {isOpen ? (
                  <ChevronUp className="w-4 h-4 text-brand-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                )}
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50 animate-fadeIn">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          );
        })}

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
            <p className="text-sm text-slate-500">No questions found matching "{searchTerm}".</p>
          </div>
        )}
      </div>

      {/* Clean Ad Placement */}
      <AdBanner slotId="faq-banner" />

      {/* Bottom CTA */}
      <div className="bg-navy-900 text-white rounded-2xl p-8 text-center space-y-3">
        <h3 className="text-xl font-bold">Have another question?</h3>
        <p className="text-xs sm:text-sm text-slate-300">
          Ready to put your coding knowledge to the test? Start the C++ assessment in seconds.
        </p>
        <div className="pt-2">
          <Link
            to="/certifications/cpp-fundamentals"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold shadow-sm transition-colors"
          >
            <span>Take C++ Assessment</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

    </div>
  );
}
