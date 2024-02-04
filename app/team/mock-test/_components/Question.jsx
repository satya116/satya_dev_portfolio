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

    let inputIdentifier = args.inputIdentifier;
    let optionIndex = args.optionIndex || 0;

    // console.log({ currentQuestionIndex, totalNumberOfQuestion, mockTest, setMockTest });
    let inputValue = e.target.value;

    if (inputIdentifier === "question") {
      mockTest.questions[currentQuestionIndex] = {
        "question": inputValue,
        "options": [
          {
            "id": 1,
            "text": mockTest.questions[currentQuestionIndex]["options"][0].text
          },
          {
            "id": 2,
            "text": mockTest.questions[currentQuestionIndex]["options"][1].text
          },
          {
            "id": 3,
            "text": mockTest.questions[currentQuestionIndex]["options"][2].text
          },
          {
            "id": 4,
            "text": mockTest.questions[currentQuestionIndex]["options"][3].text
          }
        ]
      };

      setMockTest({ ...mockTest });

    } else if (inputIdentifier === "options") {
      mockTest.questions[currentQuestionIndex]["options"][optionIndex] =
      {
        "id": optionIndex,
        "text": inputValue,
        "isCorrect": false,
      }

      setMockTest({ ...mockTest });
    }


  }

  return (
    <>
      <Input name={"questions"}
        inputFieldValue={mockTest.questions.length > 0 ? mockTest.questions[currentQuestionIndex]["question"] : ""}
        onChange={(e) => onQuestionsChange(e, { currentQuestionIndex, totalNumberOfQuestion, mockTest, setMockTest, inputIdentifier: "question" })}
        twMarginTop={"pt-4"}
        inputTitle="Question"
        inputType={"text"}
      />

      <Input
        onChange={(e) => onQuestionsChange(e, { currentQuestionIndex, totalNumberOfQuestion, mockTest, setMockTest, inputIdentifier: "options", optionIndex: 0 })}
        twMarginTop={"pt-4"}
        inputTitle="Option 1"
        inputFieldValue={mockTest.questions.length > 0 ? mockTest.questions[currentQuestionIndex]["options"][0].text : ""}
        inputType={"text"}
        name={"option1"}
      />

      <Input
        onChange={(e) => onQuestionsChange(e, { currentQuestionIndex, totalNumberOfQuestion, mockTest, setMockTest: setMockTest, inputIdentifier: "options", optionIndex: 1 })}
        twMarginTop={"pt-4"}
        inputTitle="Option 2"
        inputFieldValue={mockTest.questions.length > 0 ? mockTest.questions[currentQuestionIndex]["options"][1].text : ""}
        inputType={"text"}
        name={"option2"}
      />

      <Input
        onChange={(e) => onQuestionsChange(e, { currentQuestionIndex, totalNumberOfQuestion, mockTest, setMockTest: setMockTest, inputIdentifier: "options", optionIndex: 2 })}
        twMarginTop={"pt-4"}
        inputTitle="Option 3"
        inputFieldValue={mockTest.questions.length > 0 ? mockTest.questions[currentQuestionIndex]["options"][2].text : ""}
        inputType={"text"}
        name={"option3"}
      />

      <Input
        onChange={(e) => onQuestionsChange(e, { currentQuestionIndex, totalNumberOfQuestion, mockTest, setMockTest: setMockTest, inputIdentifier: "options", optionIndex: 3 })}
        twMarginTop={"pt-4"}
        inputTitle="Option 4"
        inputFieldValue={mockTest.questions.length > 0 ? mockTest.questions[currentQuestionIndex]["options"][3].text : ""}
        inputType={"text"}
        name={"option4"}
      />
    </>
  )
}

export default Question