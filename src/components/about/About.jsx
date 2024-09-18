import React, { Component } from 'react';
import ap from '../../assets/images/ronaldobenzema.jpg'
import style from './About.module.css'

class About extends Component {
  render() {
    return (
      <section id={style.about}>
        <div className='container'>
          <h1 className='about__title'>About</h1>
          <img src={ap} alt="ronaldo benzema"/>
        </div>
      </section>
    );
  }
}

export default About;