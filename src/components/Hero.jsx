function Hero() {
  const scrollToWhatIDo = () => {
    const el = document.getElementById('what-i-do')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center bg-white pt-20">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-stretch gap-12 lg:gap-16">
          {/* Text Left */}
          <div className="flex-1 text-center lg:text-left flex flex-col justify-center">
            <h2 className="font-heading font-bold text-xl sm:text-2xl tracking-tight text-gold mb-5 animate-fade-in-up">
              Neel Parekh
            </h2>

            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-navy leading-tight mb-6 animate-fade-in-up animate-delay-1">
              Closing audit findings, sustaining compliance controls, and building governance that scales
              <span className="text-gold"> - and stays.</span>
            </h1>

            <p className="font-body text-base sm:text-lg text-charcoal/70 leading-relaxed mb-8 max-w-2xl animate-fade-in-up animate-delay-2">
              Risk & Compliance Execution in Global Financial Services | AML, access governance & regulatory change across multiple jurisdictions | IIM Indore MBA | Six Sigma Green Belt | PMP
            </p>

            <div className="animate-fade-in-up animate-delay-3">
              <button
                onClick={scrollToWhatIDo}
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-heading font-semibold px-8 py-3.5 rounded transition-all duration-300 hover:shadow-lg"
              >
                Explore My Work
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Photo Right - matches text height */}
          <div className="flex-shrink-0 animate-fade-in-up animate-delay-2 flex items-center">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-navy/10 to-gold/10 rounded-2xl blur-sm"></div>
              <img
                src="/My_LinkedIn_Photo.png"
                alt="Neel Parekh"
                className="relative w-72 h-80 sm:w-80 sm:h-[400px] lg:w-[340px] lg:h-[440px] object-cover object-top rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
