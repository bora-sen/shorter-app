import React from 'react'
import style from './LinkShorten.module.css'

function LinkShorten() {
  return (
    <section>
        <div className={style.inner}>
            <div className={style.inputForm}>
                <input type="text" placeholder='Shorten a link here...' />
                <button>Shorten It!</button>
            </div>

        </div>
    </section>
  )
}

export default LinkShorten