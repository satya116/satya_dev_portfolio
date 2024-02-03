import React from 'react'

const Button = ({twButtonMargin, twBackgroundColor, twTextColor, buttonTitle, onClick, buttonType }) => {
    return (
        <>
            <button
                onClick={onClick}
                type="button"
                className={`rounded ${twBackgroundColor} block ${twButtonMargin} px-3 py-1.5 text-sm font-medium ${twTextColor} hover:bg-indigo-700`}
            >
                {/* Save & Next */}
                {buttonTitle}
            </button>
        </>

    )
}

export default Button