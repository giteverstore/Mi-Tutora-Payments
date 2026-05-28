export default function LoadingScreen() {
  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-[#071412]
      "
    >
      <div className="text-center">
        
        <div
          className="
            w-16
            h-16
            border-4
            border-teal-500/20
            border-t-teal-400
            rounded-full
            animate-spin
            mx-auto
            mb-6
          "
        ></div>

        <h2 className="text-xl font-semibold mb-2">
          Mi Tutora
        </h2>

        <p className="text-gray-400 text-sm">
          Preparing secure checkout...
        </p>
      </div>
    </div>
  );
}