import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
<>
<div className=' flex bg-slate-700 justify-center items-center h-screen w-full'>
    <Image
        // src="/public/icons/loading.gif"
        alt='Loading'
        width={100}
        height={100}
    />

</div>
</>  )
}

export default Loader