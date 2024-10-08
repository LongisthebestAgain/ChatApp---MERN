import React from 'react'

const GenderCheckBox = ({ onCheckChange, selectedGender }) => {
    return (
        <div className='form-control flex flex-row '>
            <div>
                <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
                    <span className='label-text'>Male</span>
                    <input type='checkbox' className='checkbox border-white'
                        checked={selectedGender === "male"} //check if the value is actually male
                        onChange={() => onCheckChange("male")} //pass the value to the function onCheckChange 
                    />
                </label>
            </div>
            <div>
                <div className='form-control'>
                    <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
                        <span className='label-text'>Female</span>
                        <input type='checkbox' className='checkbox border-white'
                            checked={selectedGender === "female"}
                            onChange={() => onCheckChange("female")}
                        />
                    </label>
                </div>
            </div>
        </div>
    )
}
export default GenderCheckBox
