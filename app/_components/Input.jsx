import React from 'react'

const Input = ({ twMarginTop, inputTitle, inputFieldValue,inputType, onChange,name }) => {
    return (
        <div className={`${twMarginTop}`}>
            <label htmlFor={name} className={`block text-xs font-medium text-gray-700`}> {inputTitle} </label>

            <input
                onChange={onChange}
                name={name}
                id={name}
                type={inputType}
                value={inputFieldValue}
                placeholder=""
                className="px-4 py-2 mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
            />
        </div>
    )
}

export default Input