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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&")
  }

  const handleSubmit = async (e) => {

    e.preventDefault()
    setError(false)

    try {

      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: encode({
          "form-name": "contact",
          ...formData
        })
      })

      if (response.ok) {

        setSubmitted(true)

        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        })

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })

        setTimeout(() => {
          setSubmitted(false)
        }, 4000)

      } else {
        setError(true)
      }

    } catch {
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


        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">

          <a
            href="https://www.linkedin.com/in/neelmparekh/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-heading font-semibold px-8 py-3.5 rounded border border-white/20 transition-all duration-300 hover:shadow-lg"
          >
            LinkedIn
          </a>

          <a
            href="/NeelParekh_Resume.pdf"
            download="NeelParekh_Resume.pdf"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-heading font-semibold px-8 py-3.5 rounded border border-white/20 transition-all duration-300 hover:shadow-lg"
          >
            Download Resume
          </a>

        </div>


        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 border-t border-white/10"></div>
          <span className="font-body text-sm text-white/40">or send a message</span>
          <div className="flex-1 border-t border-white/10"></div>
        </div>


        {submitted ? (

          <div className="bg-white/10 border border-white/20 rounded-xl p-10 text-center">

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

            {/* Required hidden input for Netlify */}
            <input type="hidden" name="form-name" value="contact" />

            <p className="hidden">
              <label>
                Don’t fill this out:
                <input name="bot-field" />
              </label>
            </p>


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">

              <div>
                <label className="block font-body text-sm font-medium text-white/70 mb-2">
                  Name *
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white"
                />
              </div>


              <div>
                <label className="block font-body text-sm font-medium text-white/70 mb-2">
                  Email *
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white"
                />
              </div>

            </div>


            <div className="mb-6">

              <label className="block font-body text-sm font-medium text-white/70 mb-2">
                Phone (optional)
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white"
              />

            </div>


            <div className="mb-8">

              <label className="block font-body text-sm font-medium text-white/70 mb-2">
                Message *
              </label>

              <textarea
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white"
              ></textarea>

            </div>


            {error && (
              <p className="font-body text-sm text-red-400 mb-4">
                Something went wrong. Please try again or reach out via LinkedIn.
              </p>
            )}


            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-white font-heading font-semibold px-10 py-3.5 rounded"
            >
              Send Message
            </button>

            <p className="text-white/40 text-sm mt-4">
              I respond within 24 hours.
            </p>

          </form>

        )}


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