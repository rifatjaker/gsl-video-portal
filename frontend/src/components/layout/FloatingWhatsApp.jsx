const WHATSAPP_NUMBER = '8801913300025'
const MESSAGE = 'Hello! I want to know more about studying abroad.'

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-0 rounded-full bg-gradient-to-br from-[#25d366] to-[#128c7e] p-3.5 text-white shadow-xl shadow-[#128c7e]/40 transition-all duration-300 hover:-translate-y-1 hover:gap-2.5 hover:pl-5 hover:shadow-2xl hover:shadow-[#128c7e]/50 sm:bottom-7 sm:right-7"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25d366] opacity-30" />

      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold opacity-0 transition-all duration-300 group-hover:max-w-40 group-hover:opacity-100">
        Chat with us
      </span>

      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2a9.9 9.9 0 0 0-8.5 15.1L2 22l5-1.4A10 10 0 1 0 12 2Zm0 1.7a8.3 8.3 0 1 1-4.2 15.4l-.3-.2-3 .8.8-2.9-.2-.3A8.3 8.3 0 0 1 12 3.7Zm-3.1 4c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.9 2.2.9 2.6.7 3.1.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3l-1.7-.8c-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.8 6.8 0 0 1-2-1.2 7.5 7.5 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5L9.6 8c-.2-.4-.4-.4-.6-.4h-.1Z" />
      </svg>
    </a>
  )
}
