import React from 'react'

const GenderCheckBox = () => {
    return (
        <div className='form-control flex flex-row '>
            <div>
                <label className='label gap-2 cursor-pointer'>
                    <span className='label-text'>Male</span>
                    <input type='checkbox' className='checkbox border-white' />
                </label>
            </div>
            <div>
                <div className='form-control'>
                    <label className='label gap-2 cursor-pointer'>
                        <span className='label-text'>Female</span>
                        <input type='checkbox' className='checkbox border-white' />
                    </label>
                </div>
            </div>
        </div>
    )
}
export default GenderCheckBox
