import React from 'react'

function SubmitButton(props) {
  return (
    <button type='submit'>
      <div className="card">
        <p className="cardHeader">{props.title}</p>
      </div>
    </button>
  )
}

export {
  SubmitButton
};
