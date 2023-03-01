import React from 'react'
import style from './Features.module.css'
import * as Assets from '../../Assets';


/*
Brand Recognition 
Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.

Detailed Records 
Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.

Fully Customizable 
Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.


*/



function Features() {
  return (
    <section>
        <div className={style.inner}>
            <div className={style.header}>
                <h3>Advanced Statistics</h3>
                <span>Track how your links are performing across the web with our advanced statistics dashboard.</span>
            </div>

            <div className={style.cards_container}>

                <div className={style.card}>
                    <div className={style.card_image}>
                        <img src={Assets.BrandRecognition} alt="" />
                    </div>

                    <div className={style.card_bottom}>
                        <h6>Brand Recognition</h6>
                        <span>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</span>
                    </div>

                </div>


                <div className={style.card}>
                    <div className={style.card_image}>
                        <img src={Assets.DetailedRecords} alt="" />
                    </div>
                    <div className={style.card_bottom}>
                        <h6>Detailed Records</h6>
                        <span>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</span>
                    </div>

                </div>


                <div className={style.card}>
                    <div className={style.card_image}>
                        <img src={Assets.FullyCustomizableIcon} alt="" />
                    </div>
                    <div className={style.card_bottom}>
                        <h6>Fully Customizable</h6>
                        <span>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</span>
                    </div>

                </div>



            </div>
        </div>


    </section>
  )
}

export default Features