import React from 'react'

const Option = () => {
    return (

        <div className='mt-4'>
            <input
                onChange={() => console.log()}

                type="radio"
                name="DeliveryOption"
                value="DeliveryStandard"
                id="DeliveryStandard"
                className="peer hidden [&:checked_+_label_svg]:block"
                checked
            />

            <label
                htmlFor="DeliveryStandard"
                className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
            >
                <div className="flex items-center gap-2">
                    <svg
                        className="hidden h-5 w-5 text-blue-600"
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

                    <p className="text-gray-700">Standard</p>
                </div>

            </label>
        </div>


    )
}

export default Option