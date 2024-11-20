import React from 'react'
import * as Assets from '../../Assets'
import style from './Header.module.css';

function Header() {
  return (
    <section>
      <div className={style.inner}>
        <img src={Assets.BrandLogo} alt="Brand Logo" />
        <button className={style.hamburger}>
          <svg width={34} height={34} fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3.6 6a1.2 1.2 0 0 1 1.2-1.2h14.4a1.2 1.2 0 1 1 0 2.4H4.8A1.2 1.2 0 0 1 3.6 6Zm0 6a1.2 1.2 0 0 1 1.2-1.2h14.4a1.2 1.2 0 1 1 0 2.4H4.8A1.2 1.2 0 0 1 3.6 12Zm0 6a1.2 1.2 0 0 1 1.2-1.2h14.4a1.2 1.2 0 1 1 0 2.4H4.8A1.2 1.2 0 0 1 3.6 18Z" clipRule="evenodd" /></svg>
        </button>
          <ul>
            <li>
              <a href="/">
                Feature
              </a>
            </li>
            <li>
              <a href="/">
                Pricing
              </a>
            </li>
            <li>
              <a href="/">
                Resources
              </a>
            </li>
          </ul>

          <div className={style.right_section}>
            <a href="/">Login</a>
            <a className={style.sign_up_button} href="/">Sign Up</a>
          </div>
        </div>



      
    </section>
  )
}

export default Header