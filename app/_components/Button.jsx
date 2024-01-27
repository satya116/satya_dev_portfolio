import React from 'react'

const Button = ({ twBackgroundColor, twTextColor, buttonTitle }) => {
    return (
        <>
            <button
                type="button"
                className={`rounded ${twBackgroundColor} block m-2  px-3 py-1.5 text-sm font-medium ${twTextColor} hover:bg-indigo-700`}
            >
                {/* Save & Next */}
                {buttonTitle}
            </button>
        </>

    )
}

export default Button