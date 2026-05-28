import { Link } from "react-router-dom";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#071412] px-6">
      <div className="max-w-md w-full bg-white/5 border border-teal-500/20 rounded-3xl p-10 text-center">
        
        <div className="text-6xl mb-4">
          ✅
        </div>

        <h1 className="text-3xl font-bold mb-3">
          Payment Successful
        </h1>

        <p className="text-gray-400 mb-8">
          Your tuition payment has been completed successfully.
        </p>

        <Link
          to="/"
          className="
            inline-block
            bg-teal-500
            hover:bg-teal-400
            text-black
            font-semibold
            px-6
            py-3
            rounded-2xl
          "
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}