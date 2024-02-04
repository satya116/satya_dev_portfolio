import Input from '@/app/_components/Input'
import React from 'react'

const Question = ({ mockTest, setMockTest, totalNumberOfQuestion, currentQuestionIndex }) => {

  let questions = [
    {
      "question": "",
      "options": [
        {
          "id": 1,
          "text": ""
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

  const onQuestionsChange = (e, args) => {
    let currentQuestionIndex = args.currentQuestionIndex;
    let totalNumberOfQuestion = args.totalNumberOfQuestion;
    let mockTest = args.mockTest;
    let setMockTest = args.setMockTest;

    // console.log({ currentQuestionIndex, totalNumberOfQuestion, mockTest, setMockTest });

    let inputValue = e.target.value;
    mockTest.questions[currentQuestionIndex] = {
      "question": inputValue,
      "options": [
        {
          "id": 1,
          "text": ""
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
    };

    setMockTest({ ...mockTest });
  }

  return (
    <>
      <Input name={"questions"}
        inputFieldValue={mockTest.questions.length > 0 ? mockTest.questions[currentQuestionIndex]["question"] : ""}
        onChange={(e) => onQuestionsChange(e, { currentQuestionIndex, totalNumberOfQuestion, mockTest, setMockTest: setMockTest })}
        twMarginTop={"pt-4"}
        inputTitle="Question"
      />

      <Input onChange={() => console.log()} twMarginTop={"pt-4"} inputTitle="Option 1" />
      <Input onChange={() => console.log()} twMarginTop={"pt-4"} inputTitle="Option 2" />

      <Input onChange={() => console.log()} twMarginTop={"pt-4"} inputTitle="Option 3" />

      <Input onChange={() => console.log()} twMarginTop={"pt-4"} inputTitle="Option 4" />
    </>
  )
}

export default Question