import React from 'react'
import "..//Style/StyleComponent.css"

const StyleComponent = () => {
    const  linkStyle = {
        textDecoration: 'none',
        color: 'green',
        fontsize: '25px'
    }
  return (
    <section id='style'>
        <h1 className='style_title'>StyleComponent</h1>
        <a href="asliddin.uz" style={linkStyle}>asliddin.uz</a>
        <p className='style_content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt nulla assumenda dignissimos!</p>
    </section>
  )
}

export default StyleComponent