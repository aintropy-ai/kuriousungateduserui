import React, { useState, useRef, useEffect } from 'react'
import SourcesPanel from './SourcesPanel'
import FeedbackBar from './FeedbackBar'

const ModalityIcons = ({ modalities }) => {
  const items = []
  if (modalities.video)     items.push(`🎥 ×${modalities.video}`)
  if (modalities.documents) items.push(`📄 ×${modalities.documents}`)
  if (modalities.data)      items.push(`📊 ×${modalities.data}`)
  if (modalities.images)    items.push(`🖼️ ×${modalities.images}`)
  return (
    <span className="text-sm text-k-muted">
      {items.join('   ')}
    </span>
  )
}

// ─── LLM options ──────────────────────────────────────────────────────────────
const LLM_OPTIONS = [
  { id: 'chatgpt', label: 'ChatGPT', variants: ['GPT-4o', 'GPT-4 Turbo'] },
  { id: 'claude',  label: 'Claude',  variants: ['Claude 3.5 Sonnet', 'Claude 3 Opus'] },
  { id: 'gemini',  label: 'Gemini',  variants: ['Gemini 1.5 Pro', 'Gemini 1.5 Flash'] },
]

// ─── Ask Another AI ───────────────────────────────────────────────────────────
function AskAnotherAI({ comparisonAnswers, answer, isFirst }) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [selectedLLM, setSelectedLLM]   = useState(null)
  const [selectedVariant, setSelectedVariant] = useState(null)
  const [comparisonOpen, setComparisonOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setDropdownOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleSelect = (llm, variant) => {
    setSelectedLLM(llm)
    setSelectedVariant(variant)
    setComparisonOpen(true)
    setDropdownOpen(false)
  }

  const comparisonAnswer = selectedLLM ? comparisonAnswers?.[selectedLLM.id] : null

  if (comparisonOpen && selectedLLM) {
    return (
      <div className="animate-fade-in">
        <div className="border border-k-border rounded-xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-k-bg border-b border-k-border">
            <p className="text-xs text-k-muted">
              Comparing with <span className="text-k-text font-medium">{selectedLLM.label} · {selectedVariant}</span>
            </p>
            <div className="flex items-center gap-3">
              {/* Switch LLM */}
              <div className="relative" ref={ref}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="text-xs text-k-muted hover:text-k-cyan transition-colors flex items-center gap-1"
                >
                  Switch ▾
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 top-6 w-48 bg-k-card border border-k-border rounded-xl shadow-xl z-50 overflow-hidden animate-fade-in">
                    {LLM_OPTIONS.map(llm => (
                      <div key={llm.id} className="border-b border-k-border last:border-b-0">
                        <p className="px-3 pt-2 pb-1 text-[10px] font-medium text-k-muted uppercase tracking-wider">{llm.label}</p>
                        {llm.variants.map(variant => (
                          <button
                            key={variant}
                            onClick={() => { setSelectedLLM(llm); setSelectedVariant(variant); setDropdownOpen(false) }}
                            className={`w-full text-left px-4 pb-2 text-sm transition-colors ${
                              selectedLLM?.id === llm.id && selectedVariant === variant
                                ? 'text-k-cyan'
                                : 'text-k-muted hover:text-k-text'
                            }`}
                          >
                            {variant}
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={() => { setComparisonOpen(false); setSelectedLLM(null) }}
                className="text-k-muted hover:text-k-text transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 2l8 8M10 2L2 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </button>
            </div>
          </div>

          {/* Side-by-side */}
          <div className="grid grid-cols-2 divide-x divide-k-border">
            <div className="p-4">
              <p className="text-xs font-medium text-k-cyan mb-2.5 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded bg-k-cyan/20 border border-k-cyan/30 flex items-center justify-center text-[9px] font-bold">K</span>
                Kurious
              </p>
              <p className="text-sm text-k-text leading-relaxed">{answer}</p>
            </div>
            <div className="p-4">
              <p className="text-xs font-medium text-k-muted mb-2.5">{selectedLLM.label} · {selectedVariant}</p>
              <p className="text-sm text-k-muted/80 leading-relaxed">{comparisonAnswer}</p>
              <p className="text-xs text-k-muted/40 mt-3 flex items-center gap-1.5">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1"/><path d="M5 3v2" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/><circle cx="5" cy="7" r="0.5" fill="currentColor"/></svg>
                No access to NJ Open Data files
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className={`flex items-center gap-1.5 transition-colors ${
          isFirst
            ? 'w-full justify-center text-sm text-k-muted hover:text-k-cyan border border-k-border hover:border-k-cyan/50 rounded-lg px-3 py-2'
            : 'text-xs text-k-muted hover:text-k-cyan'
        }`}
      >
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
          <circle cx="3.5" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
          <circle cx="10.5" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
          <path d="M6 7h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
        {isFirst ? 'Ask another AI' : '▸ Ask another AI'}
      </button>

      {dropdownOpen && (
        <div className={`${isFirst ? 'mt-2' : 'absolute left-0 top-6'} w-52 bg-k-card border border-k-border rounded-xl shadow-xl z-50 overflow-hidden animate-fade-in`}>
          {LLM_OPTIONS.map(llm => (
            <div key={llm.id} className="border-b border-k-border last:border-b-0">
              <p className="px-3 pt-2.5 pb-1 text-[10px] font-medium text-k-muted uppercase tracking-wider">{llm.label}</p>
              {llm.variants.map(variant => (
                <button
                  key={variant}
                  onClick={() => handleSelect(llm, variant)}
                  className="w-full text-left px-4 pb-2.5 text-sm text-k-muted hover:text-k-text hover:bg-k-bg transition-colors"
                >
                  {variant}
                </button>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Format Switcher ──────────────────────────────────────────────────────────
function FormatSwitcher({ format, setFormat, hasTable, hasBullets }) {
  const formats = [
    { id: 'text',    label: '📝 Text' },
    ...(hasTable   ? [{ id: 'table',   label: '📊 Table' }]   : []),
    ...(hasBullets ? [{ id: 'bullets', label: '• Bullets' }] : []),
    { id: 'summary', label: '📋 Summary' },
  ]

  return (
    <div className="flex items-center gap-1.5 flex-wrap">
      <span className="text-xs text-k-muted/60">Format:</span>
      {formats.map(f => (
        <button
          key={f.id}
          onClick={() => setFormat(f.id)}
          className={`text-xs px-2 py-0.5 rounded-md transition-colors border ${
            format === f.id
              ? 'border-k-cyan/50 text-k-cyan bg-k-cyan/5'
              : 'border-k-border text-k-muted hover:text-k-text hover:border-k-muted/50'
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}

// ─── Answer Content ───────────────────────────────────────────────────────────
function AnswerContent({ answer, format, tableData, bulletData }) {
  if (format === 'table' && tableData) {
    return (
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-k-border">
              {tableData.headers.map((h, i) => (
                <th key={i} className="text-left py-2 pr-6 text-xs font-medium text-k-muted uppercase tracking-wider whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.rows.map((row, ri) => (
              <tr key={ri} className="border-b border-k-border/40 last:border-b-0">
                {row.map((cell, ci) => (
                  <td key={ci} className="py-2.5 pr-6 text-k-text">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  if (format === 'bullets' && bulletData) {
    return (
      <ul className="space-y-2">
        {bulletData.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-[15px] text-k-text leading-relaxed">
            <span className="text-k-cyan mt-1.5 flex-shrink-0 text-xs">•</span>
            {item}
          </li>
        ))}
      </ul>
    )
  }

  if (format === 'summary') {
    const summary = answer.split('.')[0] + '.'
    return <p className="text-k-muted leading-relaxed text-[15px] italic">{summary}</p>
  }

  return <p className="text-k-text leading-relaxed text-[15px]">{answer}</p>
}

// ─── Answer Block ─────────────────────────────────────────────────────────────
export default function AnswerBlock({ conversation, isLatest, isFirst = false, showComparison = true }) {
  const [sourcesOpen, setSourcesOpen] = useState(false)
  const { question, answer, mode, time, modalities, modalityText, sources, format: defaultFormat, tableData, bulletData, comparisonAnswers } = conversation
  const [format, setFormat] = useState(defaultFormat || 'text')

  return (
    <div className="animate-slide-up mb-2">
      {/* Question label */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-semibold text-k-muted uppercase tracking-wider">Q</span>
        <p className="text-sm text-k-muted">{question}</p>
        <span className={`ml-auto flex-shrink-0 text-xs font-medium px-2 py-0.5 rounded-full border ${
          mode === 'quick'
            ? 'border-k-cyan/40 text-k-cyan'
            : 'border-purple-400/40 text-purple-400'
        }`}>
          {mode === 'quick' ? '⚡ Quick' : '🔍 Deep Dive'}
        </span>
      </div>

      {/* Answer card */}
      <div className="border border-k-border rounded-xl overflow-hidden">

        {/* Format switcher */}
        <div className="px-5 pt-4 pb-3 border-b border-k-border/40">
          <FormatSwitcher
            format={format}
            setFormat={setFormat}
            hasTable={!!tableData}
            hasBullets={!!bulletData}
          />
        </div>

        {/* Answer content */}
        <div className="px-5 py-5">
          <AnswerContent answer={answer} format={format} tableData={tableData} bulletData={bulletData} />
        </div>

        {/* Provenance strip */}
        <div className="border-t border-k-border px-5 py-3 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-3 flex-wrap">
            <ModalityIcons modalities={modalities} />
            <span className="text-k-border">·</span>
            <span className="text-sm text-k-cyan font-medium">{time}</span>
          </div>
          <button
            onClick={() => setSourcesOpen(!sourcesOpen)}
            className="text-xs text-k-muted hover:text-k-cyan transition-colors flex items-center gap-1"
          >
            {sourcesOpen ? '▾ Hide Sources' : '▸ View Sources'}
          </button>
        </div>

        {/* Provenance description */}
        <div className="px-5 pb-3">
          <p className="text-xs text-k-muted">I reviewed {modalityText}</p>
        </div>

        {/* Sources panel */}
        {sourcesOpen && (
          <div className="border-t border-k-border px-5">
            <SourcesPanel sources={sources} isOpen={sourcesOpen} />
          </div>
        )}

        {/* Feedback */}
        <div className="border-t border-k-border px-5 py-3">
          <FeedbackBar />
        </div>

        {/* Ask another AI */}
        {showComparison && comparisonAnswers && (
          <div className="border-t border-k-border px-5 py-3">
            <AskAnotherAI
              comparisonAnswers={comparisonAnswers}
              answer={answer}
              isFirst={isFirst}
            />
          </div>
        )}
      </div>
    </div>
  )
}
