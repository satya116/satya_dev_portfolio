import Input from '@/app/_components/Input'
import React from 'react'
import Option from './Option'
import Button from '@/app/_components/Button'

const AddQuestion = () => {
    return (
        <div className='mt-12'>
            <Input twMarginTop={"pt-4"} inputTitle="Question" />
            <Option /><Option /><Option /><Option />
            <Button twBackgroundColor="bg-green-600" twTextColor="text-white" buttonTitle="Save & Next" />
        </div>
    )
}

export default AddQuestion