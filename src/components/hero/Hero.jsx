import React from 'react'
import style from './Hero.module.css';

const Hero = () => {
  return (
    <section id={style.hero}>
      <div className="container">
        <h1 className='hero__title'>Hero</h1>
        <img src="/ronaldo.jpg" alt="ronaldo" />
      </div>
    </section>
  )
}

export default Hero