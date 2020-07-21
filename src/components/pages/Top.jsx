import React from 'react';
import Doujinshi from '../organisms/Doujinshi';
import AppTitle from '../organisms/AppTitle';
import AppInfo1 from '../organisms/AppInfo1';
import AppInfo2 from '../organisms/AppInfo2';
import GitHub from '../organisms/GitHub';
import Blog from '../organisms/Blog';
import AppFooter from '../organisms/AppFooter';

export default () => {
  return (
    <>
      <AppTitle />
      <Doujinshi />
      <AppInfo1 />
      <AppInfo2 />
      <GitHub />
      <Blog />

      <AppFooter />
    </>
  );
};
