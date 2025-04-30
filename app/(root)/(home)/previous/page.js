import CallList from '@/components/callList';
import React from 'react';

const Previous = () => {
  return (
    <section
      className="flex flex-col gap-10 w-full h-screen"
      // style={{
      //   background: "url('https://media.giphy.com/media/l4JyZXeJBh5yr1DGg/giphy.gif') no-repeat center center/cover",
      //   position: 'relative',
      // }}
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10 flex flex-col items-center justify-center gap-10 text-white">
        <h1 className="text-3xl font-bold">
          Previous
        </h1>
        <CallList type="ended" />
      </div>
    </section>
  );
};

export default Previous;
