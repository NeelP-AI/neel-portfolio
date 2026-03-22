import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function ProjectA2() {
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
          STR Lifecycle & Control Framework - Triage to Filing, Sanctions Governance & Post-Filing Monitoring
        </h1>

        <p className="font-body text-lg text-charcoal/60 mb-10">
          PMLA and IFSCA AML/CFT & KYC Guidelines 2022 (updated Feb 2026). Built for a 3-person IBU compliance team.
        </p>

        {/* Stats Bar - matches A1 exactly */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {[
            { number: '7 Stages', label: 'in the STR Lifecycle' },
            { number: '5 Tabs', label: 'Working Excel Workbook' },
            { number: '3 People', label: 'Compliance Team Assumed' },
            { number: '80-120', label: 'Alerts/Month Stress-Tested' }
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
            Most IBUs operating in GIFT City have a transaction monitoring system that generates alerts. What they often do not have is a structured, documented process that takes every alert from the moment it lands to a defensible filing decision - or a defensible documented closure - with a clear owner at every step.
          </p>
          <p className="font-body text-base text-charcoal/80 leading-relaxed mb-4">
            The gaps are predictable. The Principal Officer's filing decision bleeds into the Compliance Executive's investigation. The sanctions screening queue and the STR alert queue are never formally connected. Post-filing monitoring happens informally, if at all. And the filing standard - 'promptly on conclusion' - is left undefined internally, which means it becomes whatever is convenient under pressure.
          </p>
          <p className="font-body text-base text-charcoal/80 leading-relaxed">
            The question is not whether the compliance team understands the regulation. The question is whether there is a structured, documented process that produces a defensible outcome at every stage - one that holds up when IFSCA inspects.
          </p>
        </div>

        {/* What Was Built */}
        <div className="mb-14">
          <h2 className="font-heading font-bold text-2xl text-navy mb-5">
            What Was Built
          </h2>
          <p className="font-body text-base text-charcoal/80 leading-relaxed mb-6">
            This project builds the complete STR control framework from scratch. It covers all seven stages of the lifecycle - alert generation, triage, case investigation, Principal Officer review, FIU-IND filing, post-filing monitoring, and record keeping - with explicit SLAs, documented decision criteria, a sanctions governance protocol, and a capacity model calibrated to a realistic team size. Every stage references the exact IFSCA clause that governs it. Every SLA is grounded in the regulatory standard. This is not a generic STR framework. It is an IFSCA-specific, operationally executable playbook.
          </p>

          {/* Excel Workbook Tabs */}
          <h3 className="font-heading font-bold text-lg text-navy mb-3">The Five-Tab Excel Workbook</h3>
          <div className="space-y-4 mb-8">
            {[
              {
                tab: 'Alert & Case Log',
                desc: '25 rows of realistic alert data covering all lifecycle outcomes: closed at triage, escalated to case, STR filed, closed without filing, supplementary STR, sanctions-triggered case, and cases under investigation. SLA status color-coded. Every field is operational.'
              },
              {
                tab: 'Escalation Decision Matrix',
                desc: 'Nine decision gates in two sections. Section A: five triage gates covering profile consistency, sanctions match, economic rationale, PEP involvement, and CDD status. Section B: four investigation gates covering reasonable suspicion, aggravating factors, sanctions exposure, and supplementary STR. Each gate states close criteria, escalate criteria, documentation required, SLA, and owner.'
              },
              {
                tab: 'STR Filing Log with SLA Tracking',
                desc: '12 filed STRs with FIU-IND acknowledgement dates, days-to-file calculation, and record retention expiry dates. Supplementary STR cross-referenced to original. Formula calculates days from PO conclusion to filing automatically.'
              },
              {
                tab: 'Capacity Model',
                desc: 'Three sections: transparent assumptions, monthly capacity model for all 12 months at alert volumes from 82 to 118 per month with Green/Amber/Breach status, and an automation ROI table ranking eight process steps by automation potential.'
              },
              {
                tab: 'Sanctions-to-STR Decision Log',
                desc: 'Five entries covering a confirmed UNSC match with MHA notification, a sanctions-violating wire transfer, two documented false positives, and one pending case. Every entry has PO sign-off. This is the tab an IFSCA inspector would look for first.'
              }
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

          {/* SOP */}
          <h3 className="font-heading font-bold text-lg text-navy mb-3">The STR Operations SOP - 13 Sections</h3>
          <p className="font-body text-base text-charcoal/80 leading-relaxed">
            Complete step-by-step SOP covering all seven lifecycle stages. Includes Principal Officer obligations and deputy arrangement, investigation documentation standard, tipping-off prohibition as a standalone section, sanctions handoff protocol, SLA table with escalation triggers, training requirements, and methodology notes documenting the reasoning behind every structural decision.
          </p>
        </div>

        {/* Three Decisions */}
        <div className="mb-14">
          <h2 className="font-heading font-bold text-2xl text-navy mb-5">
            Three Decisions That Reflect the Approach
          </h2>
          <div className="space-y-6">
            {[
              {
                decision: "Compliance Executive investigates. Principal Officer decides. That distinction is hard-coded throughout.",
                reasoning: "The PO's filing decision is a personal statutory obligation under PMLA - it cannot be delegated. Blurring this line in documentation creates a governance gap that an inspector will find. Every stage in the SOP, every column in the workbook, and every gate in the decision matrix makes the boundary explicit."
              },
              {
                decision: "'Promptly on conclusion' is interpreted as same business day - not left open-ended.",
                reasoning: "The October 2023 IFSCA circular replaced the original 7-day STR filing window with 'promptly on conclusion.' Leaving this undefined in an SOP is a risk. This playbook sets the internal target as same business day as PO conclusion, with a one-business-day maximum for exceptional circumstances - defensible, operational, and calibrated to avoid the 'delay of each day constitutes a separate violation' penalty."
              },
              {
                decision: "Sanctions gets its own log tab - separate from the Alert & Case Log.",
                reasoning: "A sanction hit and a suspicious transaction are governed by different regulatory frameworks. Merging them creates two failure modes: automatic STR on every sanction hit (overreporting) or dismissing hits without STR assessment (underreporting). A dedicated Sanctions-to-STR Decision Log makes the boundary operational, ensures PO sign-off on every hit regardless of outcome, and produces an audit trail that survives inspection."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-7 h-7 rounded bg-navy text-white font-heading font-bold text-xs flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <p className="font-heading font-semibold text-sm text-navy mb-1">{item.decision}</p>
                  <p className="font-body text-sm text-charcoal/60 leading-relaxed">{item.reasoning}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What's in It for You */}
        <div className="mb-14">
          <h2 className="font-heading font-bold text-2xl text-navy mb-5">
            What's in It for You
          </h2>
          <div className="border-l-4 border-gold pl-5">
            <p className="font-body text-base text-charcoal/80 leading-relaxed">
              If you run a compliance function at a GIFT City IBU, this is what a structured STR control framework looks like before IFSCA asks for it. Open the workbook. Check the escalation decision matrix. Review how the sanctions handoff is documented. If this is the standard you expect from your team, the deliverables are below.
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
              href="/STR_Filing_and_Controls_Workbook.xlsx"
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
                5 tabs. Alert & case log, escalation decision matrix, STR filing log, capacity model, sanctions-to-STR decision log.
              </p>
              <span className="inline-flex items-center gap-1 font-body text-sm font-medium text-gold">
                Download
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </span>
            </a>

            {/* SOP PDF */}
            <a
              href="/STR_Operations_Playbook_SOP.pdf"
              download
              className="block bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-gold/40 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-red-700 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-heading font-bold text-xs">.pdf</span>
                </div>
                <span className="font-heading font-bold text-navy group-hover:text-gold transition-colors duration-300">STR Operations SOP</span>
              </div>
              <p className="font-body text-sm text-charcoal/60 leading-relaxed mb-3">
                13 sections. Full lifecycle SOP, PO obligations, sanctions handoff protocol, escalation triggers, methodology notes.
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
            This project demonstrates STR control execution methodology using publicly available IFSCA guidance and PMLA rules. All client names, transaction references, alert IDs, and STR numbers are fictional and created for illustrative purposes. It is not a legal interpretation of the regulation. Entities should obtain appropriate legal and compliance advice before implementing any operational process. Regulatory basis: IFSCA AML/CFT and KYC Guidelines 2022 (updated February 26, 2026). PMLA 2002, Rules 3 and 7. Publicly available at ifsca.gov.in and fiuindia.gov.in. All clause references are accurate and verifiable.
          </p>
        </div>

      </div>
    </main>
  )
}

export default ProjectA2
