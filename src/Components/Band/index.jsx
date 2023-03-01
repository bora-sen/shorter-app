import React from 'react'
import style from './Band.module.css'

function Band() {
  return (
    <section className={style.inner}>
        <span className='block text-4xl md:text-5xl text-white font-bold mb-8'>Boost your links today</span>
        <button className={style.get_started_btn}>Get Started</button>
    </section>
  )
}

export default Band