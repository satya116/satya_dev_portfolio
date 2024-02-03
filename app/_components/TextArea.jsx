import React from 'react'

const TextArea = ({ twMarginTop, name, inputFieldValue, onChange }) => {
    return (


        <div className={`${twMarginTop}`}>
            <label htmlFor={name} className="">Test Description</label>

            <div
                className="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
                <textarea
                onChange={onChange}
                    name={name}
                    id={name}

                    value={inputFieldValue}
                    className="w-full p-2 resize-none border-none align-top focus:ring-0 sm:text-sm"
                    rows="3"
                    placeholder="Enter any additional order notes..."
                ></textarea>

            </div>
        </div>
    )
}

export default TextArea