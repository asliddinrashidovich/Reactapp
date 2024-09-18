import React from 'react'
import style from './Header.module.css'

const Header = () => {
  console.log( style )
  return (
    <header id='header'>
      <nav className="container">
        <div className={style.nav__logo}>
          <a href="#hero">Logo</a>
        </div>
        <ul className={style.nav__list}>
          <li className={style.nav__item}><a href="link-1" className={style.nav__link}>Home</a></li>
          <li className={style.nav__item}><a href="link-2" className={style.nav__link}>About</a></li>
          <li className={style.nav__item}><a href="link-3" className={style.nav__link}>Contact</a></li>
          <li className={style.nav__item}><a href="link-4" className={style.nav__link}>Register</a></li>
          <li className={style.nav__item}><a href="link-5" className={style.nav__link + ' ' + style['nav__link--login']}>Link-5</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header