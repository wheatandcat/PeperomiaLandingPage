import React, { useEffect, useRef } from 'react';
import { animated, useSpring } from 'react-spring';
import Doujinshi from '../organisms/Doujinshi';
import AppTitle from '../organisms/AppTitle';
import AppInfo1 from '../organisms/AppInfo1';
import AppInfo2 from '../organisms/AppInfo2';
import GitHub from '../organisms/GitHub';
import Blog from '../organisms/Blog';
import AppFooter from '../organisms/AppFooter';

const calc = o => `translateY(${o * 0.1}px)`;

export default () => {
  const ref = useRef();
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }));

  const handleScroll = () => {
    const posY = ref.current.getBoundingClientRect().top;
    const offset = window.pageYOffset - posY;
    set({ offset });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });


  return (
    <div ref={ref}>

        <AppTitle />
  
      <Doujinshi />
      <AppInfo1 />
      <AppInfo2 />
      <GitHub />
      <Blog />

      <AppFooter />
    </div>
  );
};
