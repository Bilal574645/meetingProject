import CallList from '@/components/callList';
import React from 'react';

const Upcoming = () => {
  return (
    <section
      className="flex flex-col gap-10 w-full h-screen"
      style={{
        background: "url('https://media.giphy.com/media/l4JyNNqiVzBMbDOVO/giphy.gif') no-repeat center center/cover",
        position: 'relative',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10 flex flex-col items-center justify-center gap-10 text-white">
        <h1 className="text-3xl font-semibold">
          Upcoming Meetings
        </h1>
        <p className="text-lg font-medium">
          Stay up-to-date with your scheduled meetings. Below is a list of upcoming calls.
        </p>
        <CallList type="upcoming" />
      </div>
    </section>
  );
};

export default Upcoming;
