import React from 'react'
import style from './Hero.module.css'
import { WorkingIllustration } from '../../Assets'

function Hero() {
  return (
    <section className={style.inner}>
      <div className={style.left_section}>
        <h1>More than just shorter links</h1>
        <h2>Build your brand's recognition and get detailed insights on how your links performing.</h2>
        <button>Get Started</button>
      </div>
      <div className={style.right_section}>
        <img src={WorkingIllustration} alt="" />
      </div>
    </section>
  )
}

export default Hero