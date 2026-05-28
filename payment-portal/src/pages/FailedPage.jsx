import { Link } from "react-router-dom";

export default function FailedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#071412] px-6">
      <div className="max-w-md w-full bg-white/5 border border-red-500/20 rounded-3xl p-10 text-center">

        <div className="text-6xl mb-4">
          ❌
        </div>

        <h1 className="text-3xl font-bold mb-3">
          Payment Failed
        </h1>

        <p className="text-gray-400 mb-8">
          Something went wrong while processing your payment.
        </p>

        <Link
          to="/"
          className="
            inline-block
            bg-red-500
            hover:bg-red-400
            text-white
            font-semibold
            px-6
            py-3
            rounded-2xl
          "
        >
          Try Again
        </Link>
      </div>
    </div>
  );
}