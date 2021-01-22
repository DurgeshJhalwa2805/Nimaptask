import React from 'react'

const Dropdown = ({setSelectDrop}) => {

    return (
    <div className='dropdownhome'>
        <select className="Dropdown" name="dropdown" onChange={e=>setSelectDrop(e.target.value)} >
            <option value='null'>Select Language</option>
            <option value='Java'>Java</option>
            <option value='Python'>Python</option>
            <option value='C'>C</option>
            <option value='Javascript'>Javascript</option>
            <option value='Swift'>Swift</option>
        </select>
    </div>)
}

export default Dropdown