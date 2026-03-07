import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const projects = [
  {
    title: "IFSCA Regulatory Change Execution & Control Impact Plan",
    description: "A regulatory circular lands. 12 requirements need action. 3-person team, 90 days, no room for missed deadlines. This is the complete execution program. Built for a GIFT City IBU.",
    portfolio: "a",
    ready: true,
    link: "/projects/ifsca-regulatory-change-execution"
  },
  {
    title: "AML Control Register & Findings Lifecycle with Program Health Dashboard",
    description: "Root cause taxonomy and Three Lines of Defence mapping.",
    portfolio: "b",
    ready: false,
    link: null
  },
  {
    title: "STR Operations Playbook - Alert to FIU-IND Filing",
    description: "STR lifecycle, Principal Officer governance, FIU-IND filing, and sanctions-STR handoff. Built for IFSCA-regulated entities.",
    portfolio: "a",
    ready: false,
    link: null
  },
  {
    title: "Compliance Obligation Delivery & Governance Tracker",
    description: "Cross-functional compliance delivery governance and obligation tracking.",
    portfolio: "b",
    ready: false,
    link: null
  },
  {
    title: "AML/CFT Compliance Monitoring & Testing Program",
    description: "Compliance monitoring methodology, KYC/CDD control testing, and sample sizing. Built for IFSCA-regulated entities.",
    portfolio: "a",
    ready: false,
    link: null
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
