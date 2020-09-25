import React from 'react'

const Form = () => {
  return (
    <>
      <h2>Make an appoiment</h2>
      <form action="">
        <label htmlFor="petName">Pet Name</label>
        <input type="text" id="petName" name="petName" className="u-full-width" placeholder="Pet Name" data-form="Pet name" />
        <label htmlFor="petOwner">Pet Owner</label>
        <input type="text" id="petOwner" name="petOwner" className="u-full-width" placeholder="Pet Owner" data-form="Pet Owner" />
        <label htmlFor="date">Date</label>
        <input type="date" id="date" name="date" className="u-full-width" data-form="Date" />
        <label htmlFor="time">Time</label>
        <input type="time" id="time" name="time" className="u-full-width" data-form="Time" />
        <textarea name="symptoms" id="symptoms" rows="5" className="u-full-width" data-form="Symptons"></textarea>
        <button type="submit" className="u-full-width button-primary">
          Book Appoiment
        </button>
      </form>
    </>
  )
}
export default Form
