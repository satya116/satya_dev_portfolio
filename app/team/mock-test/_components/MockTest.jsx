import Button from '@/app/_components/Button'
import Input from '@/app/_components/Input'
import TextArea from '@/app/_components/TextArea'
import React from 'react'

const MockTest = () => {
    return (
        <div>
            <Input twMarginTop={"pt-8"} inputTitle="Test Name" />
            <TextArea twMarginTop={"pt-2"} />
            <Input twMarginTop={"pt-2"} inputTitle="Test Duration" />
            <Input twMarginTop={"pt-2"} inputTitle="Total Marks" />
            <Input twMarginTop={"pt-2"} inputTitle="No. of Question" />
            <Input twMarginTop={"pt-2"} inputTitle="Tags" />
            <div className='flex justify-end p-4'>
                <Button twBackgroundColor="bg-gray-200" twTextColor="text-gray-700" buttonTitle="Cancel" />
                <Button twBackgroundColor="bg-green-600" twTextColor="text-white" buttonTitle="Save & Next" />
            </div>
        </div>
    )
}

export default MockTest