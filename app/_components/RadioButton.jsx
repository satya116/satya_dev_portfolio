import React, { useState } from 'react'

const MultiSelectRadioButton = ({ RadioButtonLabel }) => {

    const [radioValue, setRadioValue] = useState(false);

    const RadioButtonsList = [{
        Title: "UPSC",
        name: "UPSC",
        value: 1,
        id: 1,

    }, {
        Title: "APSC",
        name: "APSC",

    }, {
        Title: "Indian Polity",
        name: "indian_polity",

    }, {
        Title: "Indian History",
        name: "indian_history",

    }];

    const handleChange =(e) => {
        // console.log(e, e.target.value, e.target.checked, e.target.type)

    }
    const handleClick =(e) => {
        console.log(e, e.target.value, e.target.checked, e.target.type);

        e.target.checked = !e.target.checked;


        setRadioValue(!e.target.checked);
        // setRadioChecked(!e.target.checked)

        // if (e.target.checked) {

        // }

    }

    return (
        <fieldset className="my-2 flex flex-wrap gap-3">
            <legend className="">Tags</legend>

            <input
                type="radio"
                className="peer"
                // onClick={(e)=>handleClick(e)}
                // id={1}
                onChange={(e) => handleClick(e)}

            // name={1}
            // value={true}
            />



            {
                RadioButtonsList.map((radio, index) => {
                    return (
                        <div key={index}>
                            <input
                                type="radio"
                                className="peer "
                                id={radio.name}

                                name={radio.name}
                                checked={radioValue}
                                onChange={(e) => handleClick(e)}

                                // checked={true}
                            />

                            <label
                                htmlFor={radio.name}
                                className={`flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-gray-200 ${radioValue==true? "peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white" : "" } `}
                            >
                                <p className="text-sm font-medium">{radio.Title}</p>
                            </label>
                        </div>


                    )
                })
            }


        </fieldset>
    )
}

export default MultiSelectRadioButton;
