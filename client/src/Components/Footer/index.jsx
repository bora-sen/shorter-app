import React from 'react'
import style from './Footer.module.css'
import * as Assets from '../../Assets'

function Footer() {
  return (
    <>
    <footer className={style.footerEl}>
      <div className={style.inner}>
        <div className={style.left_section}>
            <img src={Assets.BrandLogoWhite} alt="Brand Logo" />
          </div>
          <div className={style.center_section}>
            <div>
              <span>Features</span>
              <ul>
                <li>Link Shortening</li>
                <li>Branded Links</li>
                <li>Analytics</li>
              </ul>
            </div>

            <div>
              <span>Resources</span>
              <ul>
                <li>Blog</li>
                <li>Developers</li>
                <li>Support</li>
              </ul>
            </div>

            <div>
              <span>Company</span>
              <ul>
                <li>About</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className={style.right_section}>
            <ul>
              <li><a href="/"><img src={Assets.FacebookIcon} alt="" /></a></li>
              <li><a href="/"><img src={Assets.TwitterIcon} alt="" /></a></li>
              <li><a href="/"><img src={Assets.PinterestIcon} alt="" /></a></li>
              <li><a href="/"><img src={Assets.InstagramIcon} alt="" /></a></li>
            </ul>
          </div>
      </div>
        <span className='bg-neutral-dark-violet text-neutral-gray text-xs block text-center'><a href="https://github.com/bora-sen">This Website Is Made By Bora. / Design From Front-End Mentor</a></span>
    </footer>
    
    </>
  )
}

export default Footer