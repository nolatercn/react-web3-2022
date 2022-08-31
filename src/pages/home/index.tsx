import React from 'react';
import homeBg from '@/images/home.jpg';
import homeBg2 from '@/images/home2.jpg';
export default function Home() {
  return (
    <div>
      <img src={homeBg} alt="" style={{ width: '100%' }} />
      <img src={homeBg2} alt="" style={{ width: '100%' }} />
    </div>
  );
}
