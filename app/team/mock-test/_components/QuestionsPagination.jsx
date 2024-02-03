import Button from '@/app/_components/Button'
import React from 'react'

const QuestionsPagination = ({ totalNumberOfQuestion, currentQuestionIndex, onNext, onPrevious }) => {
    return (
        <div className="inline-flex mt-4 items-center justify-center gap-3">

            <Button buttonTitle={"<"}
                twBackgroundColor={"bg-green-600"}
                twTextColor={"text-white"}
                onClick={onPrevious}
            />
            <p className="text-xs text-gray-900">
                {currentQuestionIndex}
                <span className="mx-0.25">/</span>
                {totalNumberOfQuestion}
            </p>

            <Button buttonTitle={">"}
                twBackgroundColor={"bg-green-600"}
                twTextColor={"text-white"}
                onClick={onNext}
            />
        </div>
    )
}

export default QuestionsPagination