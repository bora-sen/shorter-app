import React, { useContext } from 'react'
import { ShortenContext } from '../../Contexts/ShortenContext'
import style from './LinkShorten.module.css'
import ShortenedLink from '../ShortenedLink';

function LinkShorten() {
  const {URLS,shortenUrl} = useContext(ShortenContext);
  async function handleSubmit(e){
    let inputEl = document.getElementById('url-input');
    let URL = inputEl.value;
    e.preventDefault();
    await shortenUrl(URL);
    inputEl.value = "";
  }
  return (
    <section>
        <div className={style.inner}>
            <div className={style.inputForm}>
                <input id='url-input' type="text" placeholder='Shorten a link here...' />
                <button onClick={e => handleSubmit(e)}>Shorten It!</button>
            </div>

        </div>
        <div className='flex flex-col md:flex-row md:flex-wrap'>
          {
            URLS.map((url,index) => {
              //console.log(url);
              return (
                <ShortenedLink key={index} url_object={url}  />
              )
            })
          }
        </div>
    </section>
  )
}

export default LinkShorten