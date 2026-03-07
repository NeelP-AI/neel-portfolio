import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function ProjectA1() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back to Projects */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 font-heading font-semibold text-sm text-navy hover:text-gold transition-colors duration-300 mb-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>

        {/* Title Block */}
        <p className="font-body text-sm font-semibold tracking-widest uppercase text-gold mb-3">
          GIFT City / IFSCA
        </p>

        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-4 leading-tight">
          IFSCA Regulatory Change Execution & Control Impact Plan
        </h1>

        <p className="font-body text-lg text-charcoal/60 mb-10">
          January 2026 amendments to IFSCA AML/CFT and KYC Guidelines, 2022. Built for a 3-person IBU compliance team.
        </p>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {[
            { number: '12', label: 'Real IFSCA Requirements' },
            { number: '6 Tabs', label: 'Working Excel Workbook' },
            { number: '3 People', label: 'Compliance Team Assumed' },
            { number: '90 Days', label: 'Phased Delivery Plan' }
          ].map((stat, i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-5 text-center">
              <p className="font-heading font-bold text-2xl text-navy mb-1">{stat.number}</p>
              <p className="font-body text-xs text-charcoal/50">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* The Problem */}
        <div className="mb-14">
          <h2 className="font-heading font-bold text-2xl text-navy mb-5">
            The Problem
          </h2>
          <p className="font-body text-base text-charcoal/80 leading-relaxed mb-4">
            An IFSCA circular drops 12 amendments in one day. One changes the STR filing timeline with immediate effect. One requires a full client book review whose workload is unknown until the data is pulled. One needs Board approval before three other items can close. One cannot move without treasury, and treasury reports to a different function entirely.
          </p>
          <p className="font-body text-base text-charcoal/80 leading-relaxed">
            Twelve requirements. Different complexity. Different owners. Different dependencies. All effective from the same date. No transition period. The question is not whether the compliance team understands the regulation. The question is whether there is a structured way to turn it into a closed-out implementation with evidence that holds up at inspection.
          </p>
        </div>

        {/* What Was Built */}
        <div className="mb-14">
          <h2 className="font-heading font-bold text-2xl text-navy mb-5">
            What Was Built
          </h2>
          <p className="font-body text-base text-charcoal/80 leading-relaxed mb-6">
            A complete, working implementation program built around the actual January 2, 2026 IFSCA circular. Every requirement is referenced by its exact clause number, sourced directly from ifsca.gov.in. Not a framework. Not a summary. A set of documents a compliance team could open on Monday morning and use.
          </p>

          <div className="space-y-4 mb-8">
            <h3 className="font-heading font-bold text-lg text-navy mb-3">The Six-Tab Excel Workbook</h3>
            {[
              { tab: 'Master Requirement Register', desc: 'All 12 requirements in plain language. Impact type, effort, priority, milestone, and owner for each.' },
              { tab: 'Control Impact Assessment', desc: 'Every requirement mapped to a control. New, Modified, or Retired. Specific evidence requirements defined.' },
              { tab: 'Implementation Tracker', desc: 'Sequenced by dependency, not by deadline. Key actions as numbered steps. Sign-off requirements and milestone colour coding.' },
              { tab: 'RACI Matrix', desc: 'Seven roles mapped across all 12 requirements. Treasury and Technology included because two requirements need them.' },
              { tab: 'SOP Impact Register', desc: 'Seven SOPs identified: two new and five updated. Each linked to source requirement IDs.' },
              { tab: 'Capacity Impact Note', desc: 'Effort per item, workload by milestone window, explicit capacity risk flags.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-7 h-7 rounded bg-navy text-white font-heading font-bold text-xs flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <p className="font-heading font-semibold text-sm text-navy">{item.tab}</p>
                  <p className="font-body text-sm text-charcoal/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg text-navy mb-3">The Compliance Team's Field Guide</h3>
            <p className="font-body text-base text-charcoal/80 leading-relaxed">
              All 12 requirements annotated with what changed, what it means operationally, and which controls are affected. Includes a formal escalation protocol with six defined triggers, methodology notes explaining every sequencing and priority decision, and adaptation guidance for fund management entities.
            </p>
          </div>
        </div>

        {/* What's in It for You */}
        <div className="mb-14">
          <h2 className="font-heading font-bold text-2xl text-navy mb-5">
            What's in It for You
          </h2>
          <div className="border-l-4 border-gold pl-5">
            <p className="font-body text-base text-charcoal/80 leading-relaxed">
              If you run a compliance function at a GIFT City IBU, this is what structured regulatory change execution looks like before you need it urgently. Open the workbook. Check the sequencing logic. Review the escalation triggers. If this is the standard you expect from your team, the deliverables are below.
            </p>
          </div>
        </div>

        {/* Downloads */}
        <div className="mb-14">
          <h2 className="font-heading font-bold text-2xl text-navy mb-6">
            Explore the Deliverables
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Excel Workbook */}
            <a
              href="/IFSCA_Regulatory_Change_Execution_Workbook.xlsx"
              download
              className="block bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-gold/40 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-green-700 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-heading font-bold text-xs">.xlsx</span>
                </div>
                <span className="font-heading font-bold text-navy group-hover:text-gold transition-colors duration-300">Excel Workbook</span>
              </div>
              <p className="font-body text-sm text-charcoal/60 leading-relaxed mb-3">
                6 tabs. Requirement register, control impact, tracker, RACI, SOP register, capacity note.
              </p>
              <span className="inline-flex items-center gap-1 font-body text-sm font-medium text-gold">
                Download
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </span>
            </a>

            {/* Field Guide */}
            <a
              href="/IFSCA_Regulatory_Change_Field_Guide.pdf"
              download
              className="block bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-gold/40 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-red-700 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-heading font-bold text-xs">.pdf</span>
                </div>
                <span className="font-heading font-bold text-navy group-hover:text-gold transition-colors duration-300">Compliance Field Guide</span>
              </div>
              <p className="font-body text-sm text-charcoal/60 leading-relaxed mb-3">
                All 12 requirements annotated. Escalation protocol. Sequencing logic. Methodology notes.
              </p>
              <span className="inline-flex items-center gap-1 font-body text-sm font-medium text-gold">
                Download
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-200 pt-8">
          <p className="font-body text-xs text-charcoal/40 leading-relaxed">
            This project demonstrates regulatory change execution methodology using publicly available IFSCA guidance. It is not a legal interpretation of the regulation. Entities should obtain appropriate legal and compliance advice before implementing any regulatory change. Regulatory basis: IFSCA AML/CFT and KYC Guidelines, 2022 (updated February 26, 2026). Publicly available at ifsca.gov.in. All clause references are accurate and verifiable.
          </p>
        </div>
      </div>
    </main>
  )
}

export default ProjectA1
