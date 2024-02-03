"use client";
import React, { useReducer, useState } from 'react'
import Progress from './_components/Progress'
import MockTest from './_components/MockTest'
import AddQuestion from './_components/AddQuestion';
import ReviewAndSubmit from './_components/ReviewAndSubmit';

const page = () => {

    const [step, setStep] = useState(0);

    const initialMockTestObject = {
        "test_name": "",
        "details": "",
        "tags": [],
        "duration": "",
        "total_marks": "",
        "number_of_question": "",
        "isMultipleAnswer": false,
        "questions": [
            {
                "question": "lol",
                "options": [
                    {
                        "id": 1,
                        "text": "tgyhyhy"
                    },
                    {
                        "id": 2,
                        "text": ""
                    },
                    {
                        "id": 3,
                        "text": ""
                    },
                    {
                        "id": 4,
                        "text": ""
                    }
                ]
            },
        ]
    }

    const [mockTest, setMockTest] = useState(initialMockTestObject);

    return (
        <div className='px-16 py-8'>
            <Progress activeStep={step} />

            {
                step == 0 && <MockTest step={step} setStep={setStep} mockTest={mockTest} setMockTest={setMockTest} />
            }

            {
                step == 1 && <AddQuestion step={step} setStep={setStep} mockTest={mockTest} setMockTest={setMockTest} />
            }
            {
                step == 2 && <ReviewAndSubmit step={step} setStep={setStep} mockTest={mockTest} setMockTest={setMockTest} />
            }

        </div>
    )
}

export default page