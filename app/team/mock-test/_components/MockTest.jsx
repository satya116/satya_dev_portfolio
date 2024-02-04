import Button from '@/app/_components/Button'
import Input from '@/app/_components/Input'
import TextArea from '@/app/_components/TextArea'
import { MOCKTEST_TAGS, NUMBER_OF_QUESTIONS, TEST_DURATIONS } from '@/app/constants/constant'
import { handleClick } from '@/app/utils/utils'
import React from 'react'
import Select from 'react-dropdown-select'

const MockTest = ({ mockTest, setMockTest, step, setStep }) => {

    const handleChange = (e) => {
        mockTest[e.target.name] = e.target.value;
        setMockTest({ ...mockTest });
    };

    const handleChange2 = (e, nameX, isMultiSelect) => {

        if (e.length < 1) {
            return;
        }

        if (isMultiSelect) {
            mockTest[nameX] = e;
            setMockTest({ ...mockTest });
        } else {
            mockTest[nameX] = e[0].value;
            setMockTest({ ...mockTest });
            // console.log("changed", mockTest);
        }
    };

    return (
        <div>
            <Input
                inputType={"text"}
                onChange={handleChange}
                name={"test_name"}
                inputFieldValue={mockTest.test_name}
                twMarginTop={"pt-8"}
                inputTitle="Test Name"
            />
            <TextArea
                name={"details"}
                onChange={handleChange}
                inputFieldValue={mockTest.details}
                twMarginTop={"pt-2"}
            />
            <div className='py-4'>
                <p>Test Duration</p>
                <Select
                    placeholder='Test Duration'
                    name='duration'
                    onChange={(e) => handleChange2(e, "duration")}
                    options={TEST_DURATIONS}
                />

            </div>

            <div className='py-4'>
                <p className=''>No. of Question</p>
                <Select
                    placeholder='No. of Question'
                    onChange={(e) => handleChange2(e, "number_of_question")}
                    options={NUMBER_OF_QUESTIONS}
                />

            </div>
            <div className='py-4'>
                <p className=''>Tags</p>
                <Select
                    placeholder='Tags'
                    multi
                    onChange={(e) => handleChange2(e, "tags", true)}
                    options={MOCKTEST_TAGS}
                />
            </div>

            {/* <Input
                name={"total_marks"}
                onChange={handleChange}
                inputFieldValue={mockTest.total_marks}
                twMarginTop={"pt-2"}
                inputTitle="+ve marking"
                inputType={"number"}
            /> */}{/* <Input
                name={"total_marks"}
                onChange={handleChange}
                inputFieldValue={mockTest.total_marks}
                twMarginTop={"pt-2"}
                inputTitle="-ve marking"
                inputType={"number"}
            /> */}

            <div className='flex justify-end p-4'>
                <Button twBackgroundColor="bg-gray-200" twTextColor="text-gray-700" buttonTitle="Cancel" />
                <Button onClick={(e) => handleClick(e, { step, setStep, mockTest, setMockTest, buttonType: "save_n_next" })} twBackgroundColor="bg-green-600" twTextColor="text-white" buttonTitle="Save & Next" />
            </div>
        </div>
    )
}

export default MockTest