import Button from '@/app/_components/Button'
import { handleClick } from '@/app/utils/utils'
import React from 'react'

const ReviewAndSubmit = ({ mockTest, setMockTest, step, setStep }) => {
  return (
    <div className='mt-8'>

      <div className="flow-root">
        <dl className="-my-3 divide-y divide-gray-100 text-sm">
          <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Test Name</dt>
            <dd className="text-gray-700 sm:col-span-2">{mockTest.test_name}</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Test Description</dt>
            <dd className="text-gray-700 sm:col-span-2">{mockTest.details}</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Test Duration</dt>
            <dd className="text-gray-700 sm:col-span-2">{mockTest.duration}</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">No. of Question</dt>
            <dd className="text-gray-700 sm:col-span-2">{mockTest.number_of_question}</dd>
          </div>


          <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Tags</dt>
            <dd className="text-gray-700 sm:col-span-2"> {mockTest.tags.length > 0 && mockTest.tags.map((tag, index) => <p key={index}>Tags</p>)} </dd>
          </div>


          <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Questions</dt>
            <dd className="text-gray-700 sm:col-span-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis debitis explicabo
              doloremque impedit nesciunt dolorem facere, dolor quasi veritatis quia fugit aperiam
              aspernatur neque molestiae labore aliquam soluta architecto?
            </dd>
          </div>
        </dl>
      </div>

      <div className='flex justify-end p-4'>
        <Button twBackgroundColor="bg-gray-200" twTextColor="text-gray-700" buttonTitle="Cancel" />
        <Button onClick={(e) => handleClick(e, { step, setStep, mockTest, setMockTest, buttonType: "save_n_next" })} twBackgroundColor="bg-green-600" twTextColor="text-white" buttonTitle="Save & Next" />
      </div>
    </div>
  )
}

export default ReviewAndSubmit