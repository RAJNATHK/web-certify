import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArticleBySlug } from '../data/articles';
import { getCertificationById } from '../data/certifications';
import { 
  Clock, 
  Calendar, 
  User, 
  ArrowLeft, 
  ArrowRight, 
  Award, 
  ListTree
} from 'lucide-react';

export default function ArticleDetails() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-navy-900">Article Not Found</h2>
        <p className="text-slate-600 text-sm">The article you were looking for does not exist or has been moved.</p>
        <Link to="/articles" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:underline">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Articles</span>
        </Link>
      </div>
    );
  }

  const relatedCert = getCertificationById(article.relatedCertId || 'cpp-fundamentals');

  // Simple custom parser for structured markdown content with code blocks & headings
  const renderFormattedContent = (rawText) => {
    const lines = rawText.trim().split('\n');
    const elements = [];
    let inCodeBlock = false;
    let codeContent = [];

    lines.forEach((line, index) => {
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          elements.push(
            <pre key={`code-${index}`} className="p-4 my-4 bg-navy-900 text-slate-100 rounded-xl overflow-x-auto text-xs sm:text-sm font-mono border border-navy-800 leading-relaxed">
              <code>{codeContent.join('\n')}</code>
            </pre>
          );
          codeContent = [];
          inCodeBlock = false;
        } else {
          inCodeBlock = true;
        }
        return;
      }

      if (inCodeBlock) {
        codeContent.push(line);
        return;
      }

      if (line.startsWith('## ')) {
        const titleText = line.replace('## ', '').replace(/\{#[a-zA-Z0-9_-]+\}/, '').trim();
        const anchorMatch = line.match(/\{#([a-zA-Z0-9_-]+)\}/);
        const anchorId = anchorMatch ? anchorMatch[1] : `section-${index}`;

        elements.push(
          <h2 id={anchorId} key={index} className="text-xl sm:text-2xl font-bold text-navy-900 mt-8 mb-4 pt-4 border-t border-slate-100 scroll-mt-24">
            {titleText}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={index} className="text-base sm:text-lg font-bold text-navy-900 mt-6 mb-2">
            {line.replace('### ', '').trim()}
          </h3>
        );
      } else if (line.startsWith('* ') || line.startsWith('- ')) {
        const text = line.replace(/^[*-]\s+/, '');
        elements.push(
          <li key={index} className="text-sm sm:text-base text-slate-700 ml-4 list-disc leading-relaxed my-1">
            {renderInlineFormatting(text)}
          </li>
        );
      } else if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ') || line.startsWith('4. ') || line.startsWith('5. ')) {
        elements.push(
          <li key={index} className="text-sm sm:text-base text-slate-700 ml-4 list-decimal leading-relaxed my-1">
            {renderInlineFormatting(line.replace(/^\d+\.\s+/, ''))}
          </li>
        );
      } else if (line.trim() === '---') {
        elements.push(<hr key={index} className="my-6 border-slate-200" />);
      } else if (line.trim().length > 0) {
        elements.push(
          <p key={index} className="text-sm sm:text-base text-slate-700 leading-relaxed my-3">
            {renderInlineFormatting(line)}
          </p>
        );
      }
    });

    return elements;
  };

  const renderInlineFormatting = (text) => {
    // Basic bold and code replacements
    const parts = text.split(/(\*\*.*?\*\*|`.*?`)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-semibold text-navy-900">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return <code key={i} className="px-1.5 py-0.5 rounded bg-slate-100 text-brand-700 text-xs font-mono">{part.slice(1, -1)}</code>;
      }
      return part;
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs text-slate-500">
        <Link to="/articles" className="hover:text-brand-600 transition-colors">
          Articles
        </Link>
        <span>/</span>
        <span className="text-navy-900 font-medium truncate max-w-sm">{article.title}</span>
      </div>

      {/* Article Header */}
      <div className="max-w-4xl space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-brand-700 bg-brand-50 border border-brand-200 px-3 py-1 rounded-full text-xs">
            {article.category}
          </span>
          <span className="text-xs text-slate-500 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            {article.readTime}
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
          {article.title}
        </h1>

        <div className="flex items-center gap-4 text-xs text-slate-500 pt-2 border-b border-slate-200 pb-4">
          <span className="flex items-center gap-1.5 font-medium text-navy-900">
            <User className="w-3.5 h-3.5 text-slate-400" />
            {article.author}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            {article.publishedDate}
          </span>
        </div>
      </div>

      {/* Article Main Layout with Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Article Body */}
        <article className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-subtle">
          
          <div className="prose prose-slate max-w-none">
            {renderFormattedContent(article.content)}
          </div>

          {/* End-of-Article Certification CTA Box */}
          {relatedCert && (
            <div className="mt-12 p-6 sm:p-8 bg-gradient-to-r from-navy-900 to-slate-900 text-white rounded-2xl shadow-card space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-semibold">
                <Award className="w-4 h-4 text-brand-400" />
                <span>Validate Your Knowledge</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Ready to Test Your C++ Skills?
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Take the official 50-question C++ Programming Fundamentals assessment and earn your free, downloadable Certificate of Achievement.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  to={`/certifications/${relatedCert.id}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm transition-colors shadow-sm"
                >
                  <span>Start C++ Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/certifications"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-200 font-semibold text-sm border border-navy-700 transition-colors"
                >
                  <span>Browse All Tracks</span>
                </Link>
              </div>
            </div>
          )}

        </article>

        {/* Right Sidebar: Table of Contents & Ad Unit */}
        <aside className="lg:col-span-4 space-y-6 sticky top-24">
          
          {/* Table of Contents Box */}
          {article.tableOfContents && article.tableOfContents.length > 0 && (
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-subtle space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-navy-900 uppercase tracking-wider pb-2 border-b border-slate-100">
                <ListTree className="w-4 h-4 text-brand-600" />
                <span>Table of Contents</span>
              </div>
              <nav className="space-y-1.5 text-xs">
                {article.tableOfContents.map((item, idx) => (
                  <a
                    key={idx}
                    href={`#${item.id}`}
                    className="block py-1 text-slate-600 hover:text-brand-600 transition-colors"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          )}

        </aside>

      </div>

    </div>
  );
}
