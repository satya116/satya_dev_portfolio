import Input from '@/app/_components/Input'
import React from 'react'

const Question = ({ mockTest, setMockTest, totalNumberOfQuestion, currentQuestionIndex }) => {

  // let questions = [
  //   {
  //     "question": "",
  //     "options": [
  //       {
  //         "id": 1,
  //         "text": ""
  //       },
  //       {
  //         "id": 2,
  //         "text": ""
  //       },
  //       {
  //         "id": 3,
  //         "text": ""
  //       },
  //       {
  //         "id": 4,
  //         "text": ""
  //       }
  //     ]
  //   },
  // ]

  const onQuestionsChange = (e, args) => {
    let currentQuestionIndex = args.currentQuestionIndex;
    let questions = [];
    // console.log(e);
    // e.target.value
    // mockTest[e.target.name] = questions.push({ "question": e.target.value });
    // setMockTest({ ...mockTest });
  }

  console.log("lesseee", mockTest.questions);



  return (
    <>
      <Input name={"questions"} inputFieldValue={mockTest.questions.length > 0  ? mockTest.questions[currentQuestionIndex]["question"] :""} onChange={(e) => onQuestionsChange(e, {currentQuestionIndex})} twMarginTop={"pt-4"} inputTitle="Question" />
      <Input onChange={() => console.log("less see")} twMarginTop={"pt-4"} inputTitle="Option 1" />
      <Input onChange={() => console.log("less see")} twMarginTop={"pt-4"} inputTitle="Option 2" />

      <Input onChange={() => console.log("less see")} twMarginTop={"pt-4"} inputTitle="Option 3" />

      <Input onChange={() => console.log("less see")} twMarginTop={"pt-4"} inputTitle="Option 4" />
    </>
  )
}

export default Question