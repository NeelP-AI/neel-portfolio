import { useEffect } from 'react'

function Modal({ isOpen, onClose, ticker }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleEsc)
    }
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isOpen, onClose])

  if (!isOpen || !ticker) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 modal-overlay bg-charcoal/60"
      onClick={onClose}
    >
      <div
        className="modal-content bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 sm:p-10 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gold hover:text-white text-charcoal transition-all duration-300"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Headline */}
        <h3 className="font-heading font-bold text-2xl sm:text-3xl text-navy mb-6 pr-8">
          {ticker.headline}
        </h3>

        {/* Approach */}
        <p className="font-body text-base text-charcoal/80 leading-relaxed mb-6">
          {ticker.approach}
        </p>

        {/* Delivered Section */}
        <div className="border-l-4 border-gold pl-5">
          <p className="font-heading font-bold text-sm uppercase tracking-widest text-gold mb-3">
            Delivered
          </p>
          <p className="font-body text-base text-charcoal/80 leading-relaxed">
            {ticker.delivered}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Modal
