import React from 'react'

const Input = ({twMarginTop, inputTitle}) => {
    return (
        <div className={`${twMarginTop}`}>
            <label htmlFor="UserEmail" className={`block text-xs font-medium text-gray-700`}> {inputTitle} </label>

            <input
                type="text"
                id="testname"
                placeholder=""
                className="px-4 py-2 mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
            />
        </div>
    )
}

export default Input