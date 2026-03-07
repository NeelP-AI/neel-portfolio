import { useState } from 'react'
import Modal from './Modal'

const tickers = [
  {
    id: 1,
    headline: "Audit findings that won't close?",
    approach: "Most remediation stalls because ownership is unclear, evidence is weak, and follow-through dies after the first month. The fix: structured attestation governance, clear RACI, and a sustainable oversight model that holds up when auditors return.",
    delivered: "Closed an access governance finding covering 800+ folders across a global financial institution. VP/MD attestation built from scratch, SOPs delivered to business units, then the entire annual coordination cycle streamlined: automated status collection from BUs, escalation tracking, and monthly leadership reporting. Manual coordination effort reduced 80-90%. The control runs annually with consistent execution and audit-ready evidence."
  },
  {
    id: 2,
    headline: "Compliance controls running on spreadsheets and hope?",
    approach: "Manual controls don't scale. They break during peaks, depend on one person's memory, and create repeat findings. The fix: redesigned intake, standardized evidence capture, and workflows that run reliably without adding headcount.",
    delivered: "An enterprise AML screening control covering 1,700+ applications went from a 21-month manual cycle to 13-14 months under active audit scrutiny. Repeat findings eliminated. Compliance issued closure documentation on time every year without increasing the review team."
  },
  {
    id: 3,
    headline: "Regulatory scope just exploded?",
    approach: "New directive. Expanded coverage. Deadline unchanged. The fix: rebaselined delivery plans, RAID governance for every risk and dependency, jurisdiction-specific milestone tracking, and statutory deadlines met no matter how many times the scope shifts mid-flight.",
    delivered: "A 7x regulatory scope expansion under AML trust registration requirements, from approximately 75 to 500 entities across 9 jurisdictions. 10+ legal entities coordinated. 100+ risks tracked. 100% registered on time. £2.5M+ in annual penalty exposure avoided. Zero missed deadlines."
  },
  {
    id: 4,
    headline: "Governance that falls apart within six months?",
    approach: "Most remediation efforts close the immediate gap and move on. Six months later, the same finding reopens because no one built the BAU model. The real work is building automated workflows, monthly reporting, and ownership structures that keep the control alive without constant oversight.",
    delivered: "After closing a firmwide access governance gap, a fully automated annual attestation cycle was built. Automated collection, audit log, monthly dashboards for leadership. Hours of manual coordination reduced to under 2 minutes of monthly effort. Still running. Still passing audits."
  }
]

function WhatIDo() {
  const [selectedTicker, setSelectedTicker] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (ticker) => {
    setSelectedTicker(ticker)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedTicker(null)
  }

  const duplicatedTickers = [...tickers, ...tickers]

  return (
    <section id="what-i-do" className="py-20 sm:py-28 bg-navy">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <p className="font-body text-sm font-semibold tracking-widest uppercase text-gold mb-3">
          What I Do
        </p>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white">
          Problems I've solved
        </h2>
      </div>

      {/* Ticker Strip */}
      <div className="overflow-hidden">
        <div className="ticker-track flex gap-6 px-6" style={{ width: 'max-content' }}>
          {duplicatedTickers.map((ticker, index) => (
            <div
              key={`${ticker.id}-${index}`}
              onClick={() => openModal(ticker)}
              className="flex-shrink-0 w-80 sm:w-96 bg-white/10 border border-white/10 rounded-xl p-8 cursor-pointer group hover:bg-white/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-4 group-hover:text-gold transition-colors duration-300">
                {ticker.headline}
              </h3>
              <div className="flex items-center gap-2 text-gold/70 group-hover:text-gold transition-colors duration-300">
                <span className="font-body text-sm font-medium">Read more</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        ticker={selectedTicker}
      />
    </section>
  )
}

export default WhatIDo
