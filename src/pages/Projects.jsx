import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const projects = [
  {
    title: "IFSCA Regulatory Change Execution & Control Impact Plan",
    description: "A regulatory circular lands. 12 requirements need action. 3-person team, 90 days, no room for missed deadlines. This is the complete execution program. Built for a GIFT City IBU.",
    portfolio: "a",
    ready: true,
    link: "/projects/ifsca-regulatory-change-execution",
    downloads: [
      { label: ".xlsx", color: "bg-green-600" },
      { label: ".pdf", color: "bg-red-600" }
    ]
  },
  {
    title: "Compliance Obligation Delivery & Governance Tracker",
    description: "Cross-functional compliance delivery governance and obligation tracking.",
    portfolio: "b",
    ready: false,
    link: null,
    downloads: []
  },
  {
    title: "STR Lifecycle & Control Framework - Triage to Filing, Sanctions Governance & Post-Filing Monitoring",
    description: "Complete STR control framework - triage, investigation, PO governance, sanctions handoff, FIU-IND filing, and post-filing monitoring. Built for a GIFT City IBU.",
    portfolio: "a",
    ready: true,
    link: "/projects/str-operations-playbook",
    downloads: [
      { label: ".xlsx", color: "bg-green-600" },
      { label: ".pdf", color: "bg-red-600" }
    ]
  },
  {
    title: "AML/CFT Compliance Monitoring & Testing Program",
    description: "Compliance monitoring methodology, KYC/CDD control testing, and sample sizing. Built for a GIFT City IBU.",
    portfolio: "b",
    ready: false,
    link: null,
    downloads: []
  },
  {
    title: "AML Control Register & Program Health Dashboard",
    description: "19 controls registered. Lifecycle framework, risk-based testing schedule, RAG status tracking, and a live interactive dashboard built for Governing Body reporting. Built for a GIFT City IBU.",
    portfolio: "a",
    ready: true,
    link: "/projects/aml-control-register",
    downloads: [
      { label: ".xlsx", color: "bg-green-600" },
      { label: ".pdf", color: "bg-red-600" },
      { label: ".html", color: "bg-blue-600" }
    ]
  }
]

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Back to Home at top */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-heading font-semibold text-sm text-navy hover:text-gold transition-colors duration-300 mb-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <p className="font-body text-sm font-semibold tracking-widest uppercase text-gold mb-3">
          Projects
        </p>

        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-4">
          Execution Frameworks and Applied Case Studies
        </h1>

        <p className="font-body text-lg text-charcoal/60 mb-16 max-w-2xl">
          in AML, Risk Management, Regulatory Change, and Compliance Governance.
        </p>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const card = (
              <div
                key={index}
                className={`bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col border-l-4 ${
                  project.portfolio === 'a' ? 'border-l-gold' : 'border-l-navy'
                } ${project.ready ? 'cursor-pointer' : ''}`}
              >
                <h3 className="font-heading font-bold text-lg text-navy mb-3 group-hover:text-navy-light transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-charcoal/60 leading-relaxed mb-5 flex-grow">
                  {project.description}
                </p>

                {/* Download badges */}
                {project.downloads && project.downloads.length > 0 && (
                  <div className="flex items-center gap-2 mb-5">
                    {project.downloads.map((d, i) => (
                      <span
                        key={i}
                        className={`${d.color} text-white text-xs font-body font-semibold px-2.5 py-1 rounded`}
                      >
                        {d.label}
                      </span>
                    ))}
                    <span className="font-body text-xs text-charcoal/50 font-medium">
                      Includes downloads
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-end mt-auto">
                  {project.ready ? (
                    <span className="inline-flex items-center gap-1 font-body text-sm font-medium text-gold group-hover:text-gold-dark transition-colors duration-300">
                      View Project
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  ) : (
                    <span className="font-body text-sm text-charcoal/30 italic">
                      In development
                    </span>
                  )}
                </div>
              </div>
            )

            if (project.ready && project.link) {
              return (
                <Link key={index} to={project.link} className="block">
                  {card}
                </Link>
              )
            }
            return card
          })}
        </div>
      </div>
    </main>
  )
}

export default Projects
