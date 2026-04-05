import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function ProjectA3() {
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
          AML Control Register & Program Health Dashboard
        </h1>

        <p className="font-body text-lg text-charcoal/60 mb-10">
          IFSCA AML/CFT & KYC Guidelines 2022 (updated Feb 2026) | PMLA | UAPA. Built for a 3-6 person IBU compliance team.
        </p>

        {/* Stats Bar - from Executive Summary */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {[
            { number: '19', label: 'Active AML Controls' },
            { number: '6', label: 'Control Categories' },
            { number: '5', label: 'Lifecycle Stages' },
            { number: '1', label: 'Live Programme Dashboard' }
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
            A compliance programme is only as strong as the evidence that its controls are working. The IFSCA Regulatory Change Execution Plan identified which controls needed implementing. The STR Operations Playbook built the operational STR process and its controls. This project answers the question that comes next: how does the Principal Officer know whether those controls are actually operating effectively - and how does that assurance reach the Governing Body?
          </p>
          <p className="font-body text-base text-charcoal/80 leading-relaxed mb-4">
            This project builds the monitoring and governance layer that sits above the operational compliance work. It converts a set of implemented controls into a managed, visible, board-reportable programme. Every control is registered with its regulatory source, owner, evidence standard, and testing frequency. Every control is tested on a risk-based schedule. Every test result is recorded. Every exception is either actioned and noted or escalated to formal findings management.
          </p>
          <p className="font-body text-base text-charcoal/80 leading-relaxed">
            The central question this project answers: if IFSCA walked in tomorrow and asked the Principal Officer to demonstrate that the AML control programme is working - what would the evidence look like? This project is the answer to that question.
          </p>
        </div>

        {/* What Was Built */}
        <div className="mb-14">
          <h2 className="font-heading font-bold text-2xl text-navy mb-5">
            What Was Built
          </h2>

          <div className="space-y-4">
            {[
              {
                tab: 'Master Control Register',
                desc: '19 controls across 6 categories. Each control mapped to its IFSCA clause, control type, owner, evidence standard, testing frequency, current status, and lifecycle stage.',
                why: 'Single source of truth for the AML control inventory. Every control visible in one place with its regulatory anchor and ownership defined.'
              },
              {
                tab: 'Control Lifecycle Framework',
                desc: 'Five lifecycle stages - Design, Implementation, Operation, Review, Decommissioning - with governance requirements at each stage.',
                why: 'Controls are not static. This framework governs how a control moves from being identified to being operational to being updated when regulation changes.'
              },
              {
                tab: 'Testing Schedule and Log',
                desc: '12-month forward testing schedule for all 19 controls. Completed test log with outcomes - Effective, Partially Effective, or Ineffective - and exception notes.',
                why: 'Demonstrates that the monitoring programme is being executed, not just designed. Q1 2026: 18 tests completed, 2 Ineffective outcomes escalated to findings management.'
              },
              {
                tab: 'Power BI Data Model',
                desc: 'Clean flat table structured for direct Power BI import. Pre-calculated RAG status, days since last review, days until next review, and last test outcome for all 19 controls.',
                why: 'Enables the live dashboard to be built and maintained without manual calculation. Connect Power BI Desktop directly to this tab.'
              },
              {
                tab: 'Programme Health Dashboard',
                desc: 'Interactive HTML dashboard with six visual components: RAG summary cards, control status by category, testing completion trend, open exceptions, upcoming tests, and regulatory coverage map.',
                why: "The Principal Officer's quarterly governance tool. Replaces a manual status update with a structured, evidence-based programme health view."
              },
              {
                tab: 'Board Report Template',
                desc: 'Quarterly board report in four sections: programme status, testing completion, regulatory change update, forward look. PO sign-off line included.',
                why: 'Gives the PO a structured governance artifact for Governing Body meetings that requires minimal manual effort to produce.'
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-7 h-7 rounded bg-navy text-white font-heading font-bold text-xs flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <p className="font-heading font-semibold text-sm text-navy">{item.tab}</p>
                  <p className="font-body text-sm text-charcoal/70 leading-relaxed">{item.desc}</p>
                  <p className="font-body text-sm text-charcoal/50 leading-relaxed mt-1 italic">{item.why}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Three Decisions */}
        <div className="mb-14">
          <h2 className="font-heading font-bold text-2xl text-navy mb-5">
            Three Decisions That Reflect the Approach
          </h2>
          <div className="space-y-6">
            {[
              {
                decision: "The control lifecycle has five stages - and decommissioning is one of them.",
                reasoning: "Most control registers show current status. This one shows lifecycle stage. The difference matters because a control in Implementation is not the same governance risk as a control in Operation, and a decommissioned control needs an audit trail under PMLA record-keeping requirements. Three controls are currently in Implementation - CTL-KYC-06, CTL-VCIP-01, CTL-EDD-01 - all following the January 2026 IFSCA amendments. Their Implementation status is visible in the register, in the dashboard, and in the quarterly board report."
              },
              {
                decision: "Partially Effective does not automatically trigger Red. Ineffective always does.",
                reasoning: "A programme that treats every partial exception as a crisis desensitises the Principal Officer and the Governing Body to genuine risk. Partially Effective means the control exists and is operating but has a documented weakness. Red means the control is not working. Two controls are currently Red - CTL-KYC-03 (periodic KYC refresh, 3 High Risk customers overdue) and CTL-STR-02 (alert triage SLA, 4 of 38 alerts breached the 48-hour window). Both are escalated to formal findings management as HIGH findings with April 2026 remediation targets."
              },
              {
                decision: "The exception boundary between this project and findings management is explicit and enforced.",
                reasoning: "This project notes exceptions. The Findings Lifecycle Management project manages the full remediation process. If this project tried to manage both, it would duplicate the findings project and both would lose their distinct value. If it had no exception mechanism, test results would disappear without consequence. The two-tier architecture solves this: Ineffective outcomes automatically escalate. Partially Effective outcomes stay here if the immediate action resolved the weakness, escalate if it did not."
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
              If you run a compliance function at a GIFT City IBU, this is what a managed, board-reportable AML control programme looks like. Open the dashboard. Check the regulatory coverage map. Review the RAG threshold logic. If this is the standard you expect from your team, the deliverables are below.
            </p>
          </div>
        </div>

        {/* Downloads */}
        <div className="mb-14">
          <h2 className="font-heading font-bold text-2xl text-navy mb-6">
            Explore the Deliverables
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

            {/* Excel Workbook */}
            <a
              href="/AML_Control_Register_and_Program_Health.xlsx"
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
                5 tabs. Control register, lifecycle framework, testing log, Power BI data model, board report template.
              </p>
              <span className="inline-flex items-center gap-1 font-body text-sm font-medium text-gold">
                Download
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </span>
            </a>

            {/* Methodology Notes PDF */}
            <a
              href="/AML_Control_Register_Methodology_Notes.pdf"
              download
              className="block bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-gold/40 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-red-700 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-heading font-bold text-xs">.pdf</span>
                </div>
                <span className="font-heading font-bold text-navy group-hover:text-gold transition-colors duration-300">Methodology Notes</span>
              </div>
              <p className="font-body text-sm text-charcoal/60 leading-relaxed mb-3">
                Six design decisions. RAG calibration logic, lifecycle framework, testing frequency rationale, exception escalation boundary.
              </p>
              <span className="inline-flex items-center gap-1 font-body text-sm font-medium text-gold">
                Download
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </span>
            </a>

            {/* Live Dashboard */}
            <a
              href="/program_health_dashboard.html"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-gold/40 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-700 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-heading font-bold text-xs">.html</span>
                </div>
                <span className="font-heading font-bold text-navy group-hover:text-gold transition-colors duration-300">Live Dashboard</span>
              </div>
              <p className="font-body text-sm text-charcoal/60 leading-relaxed mb-3">
                Interactive programme health dashboard. RAG status, control categories, testing completion, regulatory coverage map.
              </p>
              <span className="inline-flex items-center gap-1 font-body text-sm font-medium text-gold">
                Open Dashboard
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </a>

          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-200 pt-8">
          <p className="font-body text-xs text-charcoal/40 leading-relaxed">
            This project demonstrates AML control monitoring methodology using publicly available IFSCA guidance. All control owners, test outcomes, exception references, and client names are fictional and created for illustrative purposes. It is not a legal interpretation of the regulation. Entities should obtain appropriate legal and compliance advice before implementing any compliance monitoring programme. Regulatory basis: IFSCA AML/CFT and KYC Guidelines 2022 (updated February 26, 2026). PMLA 2002. UAPA 1967. Clause references: 1.5(a), 1.3.3, 5.3, 5.4.3, 5.5, 5.6, 5.6(9), 5.9, 5.11, 7.3-7.5, 7.7.3, 10.1-10.4, 11.1(a), Annexure II. Publicly available at ifsca.gov.in.
          </p>
        </div>

      </div>
    </main>
  )
}

export default ProjectA3
