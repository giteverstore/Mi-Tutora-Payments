export default function Navbar() {
  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-white/10
        backdrop-blur-xl
        bg-black/10
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          py-4
          flex
          items-center
          justify-between
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-3">

          <img
            src="src\assets\logo.png"
            alt="Mi Tutora"
            className="
            w-15
            h-15
            object-contain
            rounded-xl
            "
          />

          <div>
            <h1 className="font-semibold text-base sm:text-lg tracking-tight">
              Mi Tutora
            </h1>

            <p className="text-xs text-gray-400">
              Secure Payments
            </p>
          </div>
        </div>

        {/* Secure Badge */}
        <div
          className="
            flex
            items-center
            gap-2
            text-xs
            sm:text-sm
            text-teal-300
            bg-teal-500/10
            border
            border-teal-500/20
            px-3
            py-2
            rounded-full
          "
        >
          <span className="w-2 h-2 rounded-full bg-teal-400"></span>

          <span className="hidden sm:inline">
            SSL Secured
          </span>

          <span className="sm:hidden">
            Secure
          </span>
        </div>
      </div>
    </header>
  );
}