import React from 'react'
import Image from 'next/image'
import MeetingTypeList from '@/components/meetingTypeList';
const Home = () => {

  const now = new Date();
  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);
  return (
    <section className=' flex flex-col gap-10 size-full' >
      <div className=' bg-cover h-1/4'>
      <div className="relative w-full h-full rounded-md">
  <div style={{ width: '100%', height: 0, paddingBottom: '55%', position: 'relative' }}
  className='z-0'
  >
    <iframe
      // src="https://giphy.com/embed/l4JyQqyt9S1WTiE6c"
      width="100%"
      height="100%"
      style={{ position: 'absolute' }}
      frameBorder="0"
      className="giphy-embed"
      allowFullScreen
    ></iframe>
  </div>
</div>
 
      </div>
      <div className='mt-5 flex flex-col gap-2 backdrop-filter z-10'>

        <h1 className=' text-4xl font-bold'>
          {time}
        </h1>
        <p className=' text-lg font-medium'>
          {date}
        </p>

      </div>

      <MeetingTypeList/>
    </section>)
}

export default Home