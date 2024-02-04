import React, { useState } from 'react'
import Button from '@/app/_components/Button'
import QuestionsPagination from './QuestionsPagination'
import Question from './Question'
import { handleQuestionNavigation } from '@/app/utils/utils'

const AddQuestion = ({ mockTest, setMockTest, step, setStep }) => {

    // let questions = [
    //     {
    //         "question": "",
    //         "options": [
    //             {
    //                 "id": 1,
    //                 "text": ""
    //             },
    //             {
    //                 "id": 2,
    //                 "text": ""
    //             },
    //             {
    //                 "id": 3,
    //                 "text": ""
    //             },
    //             {
    //                 "id": 4,
    //                 "text": ""
    //             }
    //         ]
    //     },


    // ]

    // console.log("AddQuestion section",mockTest);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    return (
        <div className='mt-12'>
            <Question mockTest={mockTest} setMockTest={setMockTest}
                editable={true}
                totalNumberOfQuestion={mockTest.number_of_question}
                currentQuestionIndex={currentQuestionIndex}
            />
            <QuestionsPagination
                totalNumberOfQuestion={mockTest.number_of_question}
                currentQuestionIndex={currentQuestionIndex + 1}
                onNext={() => handleQuestionNavigation({ type: "next", number_of_question: mockTest.number_of_question, currentQuestionIndex: currentQuestionIndex, setCurrentQuestionIndex: setCurrentQuestionIndex })}
                onPrevious={() => handleQuestionNavigation({ type: "previous", number_of_question: mockTest.number_of_question, currentQuestionIndex: currentQuestionIndex, setCurrentQuestionIndex: setCurrentQuestionIndex })}
            />
            <Button
                twButtonMargin="mt-6"
                twBackgroundColor="bg-green-600"
                twTextColor="text-white"
                buttonTitle="Save & Next"
            />
        </div>
    )
}

export default AddQuestion