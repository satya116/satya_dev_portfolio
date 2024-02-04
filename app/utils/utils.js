import axios from "axios";

export const handleClick = async (e, args) => {
  let step = args.step;
  let setStep = args.setStep;
  let mockTest = args.mockTest;
  let setMockTest = args.setMockTest;
  let buttonType = args.buttonType;

  // console.log("mockTest", mockTest);

  let numberOfQuestion = mockTest.number_of_question;
  let questions = [];

  // console.log(numberOfQuestion);

  for (let i = 0; i < numberOfQuestion; i++) {
    questions.push({
      "question": `Question ${i + 1}`,
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
    },);

  }

  mockTest.questions = questions;
  setMockTest({ ...mockTest });

  // disale double click;

  // check required fields


  // get All VAlues and create mongodb DATABASE

  //

  try {
    // const response = await axios.post('http://localhost:5000/api/team/create-mocktest', mockTest);
    // console.log(response.data); // Assuming API responds with some data
  } catch (error) {
    // setErrorMessage('Error occurred while posting data');
    console.error('Error occurred while posting data:', error);
  }


  if (buttonType === "save_n_next") {
    setStep((state) => state + 1);
  }

}

export const handleQuestionNavigation = (args) => {
  let type = args.type || "";
  let number_of_question = args.number_of_question || 0;
  let currentQuestionIndex = args.currentQuestionIndex || 0;
  let setCurrentQuestionIndex = args.setCurrentQuestionIndex;

  if (type === "next") {
    if (currentQuestionIndex + 1 < number_of_question) {
      setCurrentQuestionIndex(state => state + 1);
    } else {
      alert("Last Question");
    }
  } else if (type === "previous") {
    if (currentQuestionIndex + 1 > 1) {
      setCurrentQuestionIndex(state => state - 1);
    } else {
      alert("First Question");
    }
  }
}