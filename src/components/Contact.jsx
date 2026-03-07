import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(false)

    const form = e.target
    const data = new FormData(form)

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString()
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        setError(true)
      }
    } catch (err) {
      setError(true)
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-navy geo-texture">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-body text-sm font-semibold tracking-widest uppercase text-gold mb-4">
            Get In Touch
          </p>

          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-6 leading-tight">
            Strong governance starts with the right execution. If you're working on audit remediation, control sustainability, or regulatory change delivery, let's connect.
          </h2>
        </div>

        {/* LinkedIn and Resume - quick actions first */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="https://www.linkedin.com/in/neelmparekh/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-heading font-semibold px-8 py-3.5 rounded border border-white/20 transition-all duration-300 hover:shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>

          <a
            href="/NeelParekh_Resume.pdf"
            download="NeelParekh_Resume.pdf"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-heading font-semibold px-8 py-3.5 rounded border border-white/20 transition-all duration-300 hover:shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
        </div>

        {/* Divider with text */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 border-t border-white/10"></div>
          <span className="font-body text-sm text-white/40">or send a message</span>
          <div className="flex-1 border-t border-white/10"></div>
        </div>

        {/* Contact Form */}
        {submitted ? (
          <div className="bg-white/10 border border-white/20 rounded-xl p-10 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gold mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <h3 className="font-heading font-bold text-xl text-white mb-2">
              Message sent successfully
            </h3>
            <p className="font-body text-white/70">
              Thank you for reaching out. I'll get back to you shortly.
            </p>
          </div>
        ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 rounded-xl p-8 sm:p-10"
          >
            {/* Hidden fields for Netlify */}
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don't fill this out: <input name="bot-field" />
              </label>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block font-body text-sm font-medium text-white/70 mb-2">
                  Name <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white font-body text-sm placeholder-white/30 focus:outline-none focus:border-gold transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-body text-sm font-medium text-white/70 mb-2">
                  Email <span className="text-gold">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white font-body text-sm placeholder-white/30 focus:outline-none focus:border-gold transition-colors duration-300"
                  placeholder="Your email"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="mb-6">
              <label htmlFor="phone" className="block font-body text-sm font-medium text-white/70 mb-2">
                Phone <span className="text-white/30">(optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white font-body text-sm placeholder-white/30 focus:outline-none focus:border-gold transition-colors duration-300"
                placeholder="Your phone number"
              />
            </div>

            {/* Message */}
            <div className="mb-8">
              <label htmlFor="message" className="block font-body text-sm font-medium text-white/70 mb-2">
                Message <span className="text-gold">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white font-body text-sm placeholder-white/30 focus:outline-none focus:border-gold transition-colors duration-300 resize-none"
                placeholder="Your message"
              ></textarea>
            </div>

            {/* Error message */}
            {error && (
              <p className="font-body text-sm text-red-400 mb-4">
                Something went wrong. Please try again or reach out via LinkedIn.
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-white font-heading font-semibold px-10 py-3.5 rounded transition-all duration-300 hover:shadow-lg"
            >
              Send Message
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
        )}

        {/* Footer line */}
        <div className="border-t border-white/10 pt-8 mt-12">
          <p className="font-body text-sm text-white/40 text-center">
            © {new Date().getFullYear()} Neel Parekh. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
