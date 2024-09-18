import React from 'react';
import style from './Contact.module.css'

const Contact = () => {
  return (
    <section id={style.contact}>
      <div className="container">
        <h1 className={style.contact__title}>Contact</h1>
        <div className={style.contact__row}>
          <div className={style.contact__card}>
            <h1>Contact title</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, vero!</p>
          </div>
          <div className={style.contact__card}>
            <h1>Contact title</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, vero!</p>
          </div>
          <div className={style.contact__card}>
            <h1>Contact title</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, vero!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact