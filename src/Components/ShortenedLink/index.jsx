import React from 'react'

function ShortenedLink({url_object}) {
  return (
    <div className='p-8'>
        <div className='flex flex-col border-2 border-gray-500 rounded-md p-3 gap-2'>
            <a className='text-2xl font-bold' href={url_object.shortUrl}>{url_object.shortUrl}</a>
            <a className='' href={url_object.originalUrl}>{url_object.originalUrl}</a>
        </div>

    </div>

  )
}

export default ShortenedLink