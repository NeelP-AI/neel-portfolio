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

        {/* Stats Bar - matches A1 and A2 exactly */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {[
            { number: '19', label: 'Controls Registered' },
            { number: '5 Tabs', label: 'Working Excel Workbook' },
            { number: '18', label: 'IFSCA Clauses Covered' },
            { number: 'Q1 2026', label: 'Program Health Baseline' }
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
            A regulatory change execution plan tells you which controls need to be created or modified. An STR operations playbook builds the process for one critical control. Neither answers the question that follows: how does the Principal Officer know whether the controls that have been implemented are actually working - and how does that assurance reach the Governing Body?
          </p>
          <p className="font-body text-base text-charcoal/80 leading-relaxed mb-4">
            Most IBUs in GIFT City have controls. What they often do not have is a single registered inventory of those controls, a structured testing schedule, a documented lifecycle framework, and a board-reportable view of program health - all in one place, with clear ownership at every stage.
          </p>
          <p className="font-body text-base text-charcoal/80 leading-relaxed">
            This is second-line compliance monitoring. The compliance function does not own the controls - it checks whether the people who own them are executing them correctly. That distinction matters, and it is hard-coded throughout this project.
          </p>
        </div>

        {/* What Was Built */}
        <div className="mb-14">
          <h2 className="font-heading font-bold text-2xl text-navy mb-5">
            What Was Built
          </h2>
          <p className="font-body text-base text-charcoal/80 leading-relaxed mb-6">
            This project builds the governance and monitoring layer that sits above the Regulatory Change Execution Plan and the STR Operations Playbook. It converts a set of implemented controls into a managed, visible, board-reportable compliance program. Three things this project produces that the preceding projects do not: a single control inventory, a lifecycle framework, and board-level reporting.
          </p>

          {/* Excel Workbook Tabs */}
          <h3 className="font-heading font-bold text-lg text-navy mb-3">The Five-Tab Excel Workbook</h3>
          <div className="space-y-4 mb-8">
            {[
              {
                tab: 'Master AML Control Register',
                desc: '19 controls registered across six categories: Governance, KYC/CDD, STR, EDD, Wire Transfer, and Sanctions. Each control has its regulatory source clause, owner, control type (Preventive, Detective, or Corrective), testing frequency, lifecycle stage, and current RAG status.'
              },
              {
                tab: 'Control Lifecycle Framework',
                desc: 'Five lifecycle stages: Design, Implementation, Operation, Review, and Decommissioning. Each stage closes a specific governance gap. Three January 2026 amendment controls are currently in Implementation. Sixteen controls are in Operation. No controls have been decommissioned.'
              },
              {
                tab: 'Testing Schedule and Log',
                desc: 'Full year testing schedule with planned versus actual completion tracking. Exception log with structured entries for every Partially Effective or Ineffective test outcome. Two current escalations to Findings Lifecycle Management: CTL-KYC-03 and CTL-STR-02.'
              },
              {
                tab: 'Power BI Data Model',
                desc: 'Structured data layer feeding the program health dashboard. RAG thresholds defined and applied consistently: Green requires last test Effective and next review not overdue. Amber covers Partially Effective outcomes and implementation-stage controls. Red triggers on Ineffective test or review overdue by more than 30 days.'
              },
              {
                tab: 'Board Report Template',
                desc: 'Quarterly board report structured for Principal Officer sign-off and Governing Body presentation. Program health summary, open findings, controls in implementation, and regulatory coverage status - in a format designed for a board audience, not a compliance team.'
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

          {/* Dashboard */}
          <h3 className="font-heading font-bold text-lg text-navy mb-3">The Program Health Dashboard</h3>
          <p className="font-body text-base text-charcoal/80 leading-relaxed mb-4">
            A standalone HTML dashboard built to answer six questions a Principal Officer needs answered at a quarterly Governing Body meeting. Four metric cards give program health in five seconds. A stacked bar shows control status by category. A line chart tracks testing completion against schedule. An open exceptions table shows what requires action right now. A controls-in-implementation table shows forward commitments on regulatory change. A regulatory coverage map confirms no IFSCA clause is left without an active control.
          </p>
          <p className="font-body text-base text-charcoal/80 leading-relaxed">
            The dashboard is live and interactive. Open it below.
          </p>
        </div>

        {/* Six Design Decisions */}
        <div className="mb-14">
          <h2 className="font-heading font-bold text-2xl text-navy mb-5">
            Six Design Decisions That Reflect the Approach
          </h2>
          <div className="space-y-6">
            {[
              {
                decision: "Every control is classified as Preventive, Detective, or Corrective - and the classification drives the testing approach.",
                reasoning: "An Ineffective test on a Preventive control is more serious than an Ineffective test on a Detective control. Preventive failures mean the problem is occurring unchecked. Detective failures mean it is occurring and not being caught within the control window. The RAG thresholds reflect this distinction."
              },
              {
                decision: "Testing frequency is risk-based - not an arbitrary schedule.",
                reasoning: "Monthly testing is assigned to controls where a single month of failure generates direct regulatory exposure: STR filing, alert triage, sanctions screening. Quarterly for controls where failure accumulates gradually. Annual for event-driven controls that only activate once a year. No control is tested less frequently than annually - the IFSCA inspection window is unpredictable."
              },
              {
                decision: "The control lifecycle has five stages, each closing a specific governance gap.",
                reasoning: "A control register that only shows current status is a snapshot. A control register that shows lifecycle stage is a governance document. Design closes the gap between a regulatory requirement being identified and a control being formally scoped. Implementation requires an initial effectiveness test before a control can move to Operation. Decommissioning requires documented approval and a six-year retention record."
              },
              {
                decision: "RAG thresholds are calibrated to be actionable - not reactive.",
                reasoning: "Partially Effective tests do not automatically trigger Red. A compliance program that treats every partial exception as a Red finding creates noise that desensitizes the PO and the Governing Body to genuine risk. Partially Effective means the control exists and is operating with a documented weakness. Red means the control is not working. Those are different situations requiring different responses."
              },
              {
                decision: "This project links explicitly to the preceding and subsequent projects in the portfolio.",
                reasoning: "When the Regulatory Change Execution Plan flags a control as New, Modified, or Retired, this project receives the classification and governs what happens next. The six STR process controls built in the STR Operations Playbook are formally registered here. Ineffective test outcomes escalate to the Findings Lifecycle Management project as formal findings. The two projects form a continuous loop."
              },
              {
                decision: "Exception escalation has a defined boundary - lightweight noting here, full lifecycle in Findings Management.",
                reasoning: "If this project tries to manage the full findings lifecycle, it duplicates the Findings Lifecycle Management project and both lose their distinct value. The solution is a two-tier architecture: Tier 1 is a structured exception note in the Testing Log. Tier 2 is a formal finding escalated to Findings Management when the outcome is Ineffective, or Partially Effective with an unresolved weakness on a HIGH or MEDIUM risk control."
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
              If you run a compliance function at a GIFT City IBU, this is what a managed, board-reportable AML control program looks like. Open the dashboard. Check the regulatory coverage map. Review the RAG threshold logic. If this is the standard you expect from your team, the deliverables are below.
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
                Interactive program health dashboard. RAG status, control categories, testing completion, regulatory coverage map.
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
            This project demonstrates AML control monitoring methodology using publicly available IFSCA guidance. All control owners, test outcomes, exception references, and client names are fictional and created for illustrative purposes. It is not a legal interpretation of the regulation. Entities should obtain appropriate legal and compliance advice before implementing any compliance monitoring program. Regulatory basis: IFSCA AML/CFT and KYC Guidelines 2022 (updated February 26, 2026). PMLA 2002. UAPA 1967. Publicly available at ifsca.gov.in. All clause references are accurate and verifiable.
          </p>
        </div>

      </div>
    </main>
  )
}

export default ProjectA3
