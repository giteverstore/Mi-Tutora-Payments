import Navbar from "../components/Navbar";
import PaymentCard from "../components/PaymentCard";

import { useEffect, useState } from "react";

import LoadingScreen from "../components/LoadingScreen";

import { useSearchParams } from "react-router-dom";

import {
    doc,
    getDoc
} from "firebase/firestore";

import {
    db
} from "../firebase";

export default function PaymentPage() {

    const [loading, setLoading] =
        useState(true);

    const [searchParams] =
        useSearchParams();

    const [
        isAuthenticated,
        setIsAuthenticated
    ] = useState(false);

    const [
        paymentData,
        setPaymentData
    ] = useState(null);

    useEffect(() => {

        const token =
            searchParams.get("token");

        const appId =
            searchParams.get("appId");

        const paymentType =
            searchParams.get("type");

        if (!token) {

            console.error(
                "Missing token"
            );

            setLoading(false);

            return;
        }

        if (!appId) {

            console.error(
                "Missing appId"
            );

            setLoading(false);

            return;
        }

        console.log(
            "TOKEN:",
            token
        );

        console.log(
            "APP ID:",
            appId
        );

        const fetchPayment =
            async () => {

                try {

                    const docRef =
                        doc(
                            db,
                            "applications",
                            appId
                        );

                    const snapshot =
                        await getDoc(docRef);

                    if (
                        !snapshot.exists()
                    ) {

                        console.error(
                            "Application not found"
                        );

                        setLoading(false);

                        return;
                    }

                    const app =
                        snapshot.data();

                    let tuitionFee = 0;

                    let platformFee = 0;

                    let total = 0;

                    if (paymentType === "demo") {

                        tuitionFee = 0;

                        platformFee = 100;

                        total = 100;

                    } else {

                        tuitionFee =
                            app.finalPrice || 0;

                        platformFee = 100;

                        total =
                            tuitionFee +
                            platformFee;
                    }

                    setPaymentData({

                        appId,

                        paymentTitle:

                            paymentType === "demo"

                                ? "Demo Session Fee"

                                : "Tuition Payment",

                        invoiceId:
                            `MT-${appId
                                .slice(0, 6)
                                .toUpperCase()}`,

                        studentName:
                            app.studentName ||
                            "Student",

                        tutorName:
                            app.tutorName ||
                            "Tutor",

                        classLevel:
                            app.classLevel ||
                            "N/A",

                        dueDate:
                            "10 June 2026",

                        tuitionFee,

                        platformFee,

                        total
                    });

                    setIsAuthenticated(
                        true
                    );

                    setLoading(false);

                } catch (e) {

                    console.error(e);

                    setLoading(false);
                }
            };

        fetchPayment();

    }, [searchParams]);

    if (loading) {

        return <LoadingScreen />;
    }

    if (!isAuthenticated) {

        return (

            <div
                className="
                    min-h-screen
                    flex
                    items-center
                    justify-center
                    text-white
                "
            >

                Authentication Failed

            </div>
        );
    }

    if (!paymentData) {

        return null;
    }

    return (

        <div
            className="
                min-h-screen
                relative
                overflow-hidden
                gradient-bg
            "
        >

            {/* Glow Effects */}

            <div
                className="
                    absolute
                    top-[-200px]
                    left-[-100px]
                    w-[400px]
                    h-[400px]
                    bg-teal-500/20
                    rounded-full
                    blur-3xl
                "
            ></div>

            <div
                className="
                    absolute
                    bottom-[-200px]
                    right-[-100px]
                    w-[350px]
                    h-[350px]
                    bg-green-500/10
                    rounded-full
                    blur-3xl
                "
            ></div>

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

                <div
                    className="
                        w-full
                        max-w-6xl
                        grid
                        lg:grid-cols-2
                        gap-16
                        items-center
                    "
                >

                    {/* Left Content */}

                    <div
                        className="
                            hidden
                            lg:block
                            fade-in
                        "
                    >

                        <p
                            className="
                                text-teal-300
                                mb-4
                                font-medium
                            "
                        >

                            Mi Tutora Payments

                        </p>

                        <h1
                            className="
                                text-4xl
                                lg:text-5xl
                                font-bold
                                leading-tight
                                mb-6
                            "
                        >

                            Fast & Secure
                            <br />
                            {paymentData.paymentTitle}

                        </h1>

                        <p
                            className="
                                text-gray-400
                                text-base
                                lg:text-lg
                                leading-relaxed
                                max-w-lg
                            "
                        >

                            Pay your tuition fees securely
                            through our encrypted payment
                            portal powered by Razorpay.

                        </p>
                    </div>

                    {/* Payment Card */}

                    <div
                        className="
                            flex
                            justify-center
                            lg:justify-end
                            fade-in
                        "
                    >

                        <PaymentCard
                            paymentData={paymentData}
                        />

                    </div>
                </div>
            </div>
        </div>
    );
}