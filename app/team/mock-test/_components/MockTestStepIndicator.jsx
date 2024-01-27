import React from 'react'

const MockTestStepIndicator = ({activeStep, title, step}) => {
    // bg-blue-600 text-white
    return (
        <li className={`relative flex justify-center ${activeStep == step ? "text-blue-600" : ""}`}>
            <span
                className={`absolute -bottom-[1.75rem] left-1/2 -translate-x-1/2 rounded-full ${activeStep == step ? "bg-blue-600 text-white" : ""}`}
            >
                <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                    />
                </svg>
            </span>

            <span className="hidden sm:block"> {title} </span>

            <svg
                className="mx-auto h-6 w-6 sm:hidden"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
            </svg>
        </li>
    )
}

export default MockTestStepIndicator