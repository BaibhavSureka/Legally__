"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export function LampDemo() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowButton(true);
        }, 1100);

        return () => {
            clearTimeout(timeoutId);
            setShowButton(false);
        };
    }, []);

    return (
        <LampContainer>
            <motion.div
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="flex flex-col items-center"
            >
                <h1 className="text-center text-lg md:text-2xl -mt-30 md:-mt-30 sm:-mt-20 font-small tracking-tight text-gray-200 md:text-5xl">
                    Legally: Your Legal Companion, <br></br>Always Ready.
                </h1>
                {showButton && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <Button className="bg-gray-700 text-white hover:bg-gray-600 mt-5">
                            Get in touch
                        </Button>
                    </motion.div>
                )}
            </motion.div>
        </LampContainer>
    );
}

export const LampContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <>
            <div
                className={cn(
                    "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#202122] w-full rounded-md z-0",
                    className
                )}
            >
                <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 "></div>
                <motion.div
                    initial={{ opacity: 0.5, width: "15rem" }}
                    whileInView={{ opacity: 1, width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-gray-600 via-transparent to-transparent text-gray-200 [--conic-position:from_70deg_at_center_top]"
                >
                    <div className="absolute  w-[100%] left-0 bg-[#202122] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                    <div className="absolute  w-40 h-[100%] left-0 bg-[#202122]  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0.5, width: "15rem" }}
                    whileInView={{ opacity: 1, width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-gray-600 text-gray-200 [--conic-position:from_290deg_at_center_top]"
                >
                    <div className="absolute  w-40 h-[100%] right-0 bg-[#202122]  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
                    <div className="absolute  w-[100%] right-0 bg-[#202122] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                </motion.div>
                <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-[#202122] blur-2xl"></div>
                <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
                <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-gray-600 opacity-50 blur-3xl"></div>
                <motion.div
                    initial={{ width: "8rem" }}
                    whileInView={{ width: "16rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-gray-700 blur-2xl"
                ></motion.div>
                <motion.div
                    initial={{ width: "15rem" }}
                    whileInView={{ width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-gray-700 "
                ></motion.div>

                <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-[#202122] "></div>
            </div>

            <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
                {children}
            </div>
        </>
    );
};

export const Button = ({
    children,
    className,
    ...props
}: {
    children: React.ReactNode;
    className?: string;
    [key: string]: any;
}) => {
    return (
        <a href="https://cal.com/legally" target="_blank" rel="noopener noreferrer">
            <button
                className={cn(
                    "inline-flex items-center p-4 justify-center rounded-md text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
                    className
                )}
                {...props}
            >
                {children}
            </button>
        </a>
    );
};
