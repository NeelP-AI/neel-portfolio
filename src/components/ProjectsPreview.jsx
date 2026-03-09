import { Link } from 'react-router-dom'

const projects = [
  {
    title: "IFSCA Regulatory Change Execution & Control Impact Plan",
    description: "A regulatory circular lands. 12 requirements need action. 3-person team, 90 days, no room for missed deadlines. This is the complete execution program. Built for a GIFT City IBU.",
    ready: true,
    link: "/projects/ifsca-regulatory-change-execution",
    downloads: [
      { label: ".xlsx", color: "bg-green-600" },
      { label: ".pdf", color: "bg-red-600" }
    ]
  },
  {
    title: "STR Operations Playbook - Alert to FIU-IND Filing",
    description: "STR lifecycle, Principal Officer governance, FIU-IND filing, and sanctions-STR handoff.",
    ready: false,
    link: null,
    downloads: []
  },
  {
    title: "AML Control Register & Findings Lifecycle with Program Health Dashboard",
    description: "Root cause taxonomy and Three Lines of Defence mapping.",
    ready: false,
    link: null,
    downloads: []
  }
]

function ProjectsPreview() {
  return (
    <section className="py-20 sm:py-28" style={{ backgroundColor: '#F5F3F0' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header with View All link */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-body text-sm font-semibold tracking-widest uppercase text-gold mb-3">
              Projects
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy">
              What I'm building
            </h2>
          </div>
          <Link
            to="/projects"
            className="hidden sm:inline-flex items-center gap-2 font-heading font-semibold text-sm text-navy hover:text-gold transition-colors duration-300"
          >
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {projects.map((project, index) => {
            const card = (
              <div
                className={`bg-white rounded-xl p-8 border border-gray-200 hover:border-gold/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col ${project.ready ? 'cursor-pointer' : ''}`}
              >
                <h3 className="font-heading font-bold text-lg text-navy mb-3 group-hover:text-navy-light transition-colors duration-300 flex-grow">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-charcoal/60 leading-relaxed mb-5">
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
            return <div key={index}>{card}</div>
          })}
        </div>

        {/* Mobile View All link */}
        <div className="sm:hidden text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-heading font-semibold text-sm text-navy hover:text-gold transition-colors duration-300"
          >
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectsPreview
