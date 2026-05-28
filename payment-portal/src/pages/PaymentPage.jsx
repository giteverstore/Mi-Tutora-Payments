import Navbar from "../components/Navbar";
import PaymentCard from "../components/PaymentCard";
import { useEffect, useState } from "react";
import LoadingScreen from "../components/LoadingScreen";

export default function PaymentPage() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <div className="min-h-screen relative overflow-hidden gradient-bg">

            {/* Glow Effects */}
            <div className="absolute top-[-200px] left-[-100px] w-[400px] h-[400px] bg-teal-500/20 rounded-full blur-3xl"></div>

            <div className="absolute bottom-[-200px] right-[-100px] w-[350px] h-[350px] bg-green-500/10 rounded-full blur-3xl"></div>

            <Navbar />

            <div
                className="
          relative
          z-10
          min-h-[calc(100vh-80px)]
          flex
          items-center
          justify-center
          px-6
          py-12
        "
            >
                <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className="hidden lg:block fade-in">
                        <p className="text-teal-300 mb-4 font-medium">
                            Mi Tutora Payments
                        </p>

                        <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                            Fast & Secure
                            <br />
                            Tuition Payments
                        </h1>

                        <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-lg">
                            Pay your tuition fees securely through our
                            encrypted payment portal powered by Razorpay.
                        </p>
                    </div>

                    {/* Payment Card */}
                    <div className="flex justify-center lg:justify-end fade-in">
                        <PaymentCard />
                    </div>
                </div>
            </div>
        </div>
    );
}