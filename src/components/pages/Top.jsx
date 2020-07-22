import React from 'react';
import Doujinshi from '../organisms/Doujinshi';
import AppTitle from '../organisms/AppTitle';
import AppInfo1 from '../organisms/AppInfo1';
import AppInfo2 from '../organisms/AppInfo2';
import GitHub from '../organisms/GitHub';
import Blog from '../organisms/Blog';
import AppFooter from '../organisms/AppFooter';
import { Up, Right, Left } from '../organisms/Animation';

export default () => {
  return (
    <div>
      <AppTitle />
      <Up>
        <Doujinshi />
      </Up>

      <AppInfo1 />

      <AppInfo2 />
      <Right>
        <GitHub />
      </Right>
      <Left>
        <Blog />
      </Left>
      <AppFooter />
    </div>
  );
};
