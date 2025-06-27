import React from 'react'
import '../Styles/Title.css'

const Title = ({ text1, text2 }) => {
  return (
    <div className="title-container">
      <p>{text1} <span>{text2}</span></p>
      <p></p>
    </div>
  )
}

export default Title
