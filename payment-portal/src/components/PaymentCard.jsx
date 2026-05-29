import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function PaymentCard({

    paymentData

}) {

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    return (

        <div
            className="
                relative
                w-full
                max-w-md
                rounded-[32px]
                border
                border-teal-500/20
                bg-white/5
                backdrop-blur-2xl
                p-8
                shadow-2xl
                overflow-hidden
            "
        >

            {/* Glow */}

            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-teal-500/5
                    to-transparent
                    pointer-events-none
                "
            ></div>

            {/* Header */}

            <div
                className="
                    relative
                    z-10
                    flex
                    items-start
                    justify-between
                    mb-8
                "
            >

                <div>

                    <p
                        className="
                            text-sm
                            text-teal-300
                            mb-2
                        "
                    >

                        Tuition Payment

                    </p>

                    <h2
                        className="
                            text-4xl
                            font-bold
                            tracking-tight
                        "
                    >

                        ₹{paymentData.total}

                    </h2>

                    <p
                        className="
                            text-gray-400
                            mt-2
                            text-sm
                        "
                    >

                        Monthly tuition fee

                    </p>
                </div>

                <div
                    className="
                        px-3
                        py-1
                        rounded-full
                        bg-teal-500/10
                        border
                        border-teal-500/20
                        text-xs
                        text-teal-300
                    "
                >

                    Pending

                </div>
            </div>

            {/* Details */}

            <div
                className="
                    relative
                    z-10
                    space-y-5
                    mb-8
                "
            >

                <InfoRow
                    label="Invoice ID"
                    value={paymentData.invoiceId}
                />

                <InfoRow
                    label="Student"
                    value={paymentData.studentName}
                />

                <InfoRow
                    label="Class"
                    value={paymentData.classLevel}
                />

                <InfoRow
                    label="Tutor"
                    value={paymentData.tutorName}
                />

                <InfoRow
                    label="Due Date"
                    value={paymentData.dueDate}
                />

            </div>

            {/* Divider */}

            <div
                className="
                    border-t
                    border-white/10
                    my-6
                "
            ></div>

            {/* Breakdown */}

            <div
                className="
                    space-y-3
                    mb-8
                "
            >

                <PriceRow
                    label="Tuition Fee"
                    value={`₹${paymentData.tuitionFee}`}
                />

                <PriceRow
                    label="Platform Fee"
                    value={`₹${paymentData.platformFee}`}
                />

                <div
                    className="
                        border-t
                        border-white/10
                        pt-3
                        flex
                        items-center
                        justify-between
                    "
                >

                    <span
                        className="
                            font-semibold
                        "
                    >

                        Total

                    </span>

                    <span
                        className="
                            text-xl
                            font-bold
                            text-teal-300
                        "
                    >

                        ₹{paymentData.total}

                    </span>
                </div>
            </div>

            {/* Button */}

            <button

                onClick={async () => {

                    try {

                        setLoading(true);

                        const docRef =
                            doc(
                                db,
                                "applications",
                                paymentData.appId
                            );

                        await updateDoc(docRef, {

                            status: "demo_booked",

                            demoPaymentPaid: true,

                            demoBookedAt:
                                new Date()
                        });

                        setTimeout(() => {

                            navigate("/success");

                        }, 1200);

                    } catch (e) {

                        console.error(
                            "PAYMENT ERROR:",
                            e
                        );

                        alert(e.message);

                        navigate("/failed");
                    }
                }}

                disabled={loading}

                className="
                    w-full
                    bg-teal-500
                    hover:bg-teal-400
                    disabled:opacity-70
                    transition-all
                    duration-300
                    text-black
                    font-semibold
                    py-4
                    rounded-2xl
                    shadow-lg
                    shadow-teal-500/20
                    hover:scale-[1.02]
                    active:scale-[0.98]
                    flex
                    items-center
                    justify-center
                    gap-3
                "
            >

                {loading ? (

                    <>

                        <div
                            className="
                                w-5
                                h-5
                                border-2
                                border-black/30
                                border-t-black
                                rounded-full
                                animate-spin
                            "
                        ></div>

                        Processing...

                    </>

                ) : (

                    "Proceed to Payment"
                )}

            </button>

            {/* Footer */}

            <div
                className="
                    mt-6
                    text-center
                "
            >

                <p
                    className="
                        text-xs
                        text-gray-500
                    "
                >

                    256-bit SSL encrypted
                    secure checkout

                </p>

                <div
                    className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        mt-3
                        text-xs
                        text-teal-300
                    "
                >

                    <span>🔒</span>

                    <span>
                        Secure Payment Gateway
                    </span>
                </div>
            </div>
        </div>
    );
}

function InfoRow({

    label,
    value

}) {

    return (

        <div
            className="
                flex
                items-center
                justify-between
                gap-4
            "
        >

            <span
                className="
                    text-gray-400
                    text-sm
                "
            >

                {label}

            </span>

            <span
                className="
                    font-medium
                    text-sm
                    text-right
                "
            >

                {value}

            </span>
        </div>
    );
}

function PriceRow({

    label,
    value

}) {

    return (

        <div
            className="
                flex
                items-center
                justify-between
                text-sm
            "
        >

            <span
                className="
                    text-gray-400
                "
            >

                {label}

            </span>

            <span>

                {value}

            </span>
        </div>
    );
}