"use client";
import React, { useState } from 'react'
import Progress from './_components/Progress'
import MockTest from './_components/MockTest'
import AddQuestion from './_components/AddQuestion';
import ReviewAndSubmit from './_components/ReviewAndSubmit';

const page = () => {

    const [step, setStep] = useState(2);

    return (
        <div className='px-16 py-8'>
            <Progress activeStep={step} />

            {
                step == 0 && <MockTest />
            }

            {
                step == 1 && <AddQuestion />
            }
            {
                step == 2 && <ReviewAndSubmit />
            }

        </div>
    )
}

export default page