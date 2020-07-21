import React from 'react';
import styled from 'styled-components';
import InViewMonitor from 'react-inview-monitor';

export const Up = ({ children, delay, margin = '-20%' }) => (
  <InViewMonitor childPropsInView={{ isActive: true }} intoViewMargin={margin}>
    <FadeInUp isActive={false} delay={delay}>
      {children}
    </FadeInUp>
  </InViewMonitor>
);

export const SlowUp = ({ children, delay, margin = '-20%' }) => (
  <InViewMonitor childPropsInView={{ isActive: true }} intoViewMargin={margin}>
    <SlowFadeIn isActive={false} delay={delay}>
      {children}
    </SlowFadeIn>
  </InViewMonitor>
);

export const Down = ({ children, delay, margin = '-20%' }) => (
  <InViewMonitor childPropsInView={{ isActive: true }} intoViewMargin={margin}>
    <FadeInDown isActive={false} delay={delay}>
      {children}
    </FadeInDown>
  </InViewMonitor>
);

export const Left = ({ children, delay, margin = '-20%' }) => (
  <InViewMonitor childPropsInView={{ isActive: true }} intoViewMargin={margin}>
    <FadeInLeft isActive={false} delay={delay}>
      {children}
    </FadeInLeft>
  </InViewMonitor>
);

export const Right = ({ children, delay, margin = '-20%' }) => (
  <InViewMonitor childPropsInView={{ isActive: true }} intoViewMargin={margin}>
    <FadeInRight isActive={false} delay={delay}>
      {children}
    </FadeInRight>
  </InViewMonitor>
);

const FadeIn = styled.div`
  opacity: 0;
  transition: opacity 1s ease, transform 1s ease;
  ${({ isActive }) => isActive && `opacity: 1;`}
  ${({ delay }) => delay && `transition-delay: ${delay}ms;`}
`;

const SlowFadeIn = styled.div`
  opacity: 0;
  transition: opacity 2s ease, transform 2s ease;
  ${({ isActive }) => isActive && `opacity: 1;`}
  ${({ delay }) => delay && `transition-delay: ${delay}ms;`}
`;

const FadeInUp = styled(FadeIn)`
  transform: translateY(30px);
  ${({ isActive }) => isActive && `transform: translateY(0px);`}
`;

const FadeInDown = styled(FadeIn)`
  transform: translateY(-30px);
  ${({ isActive }) => isActive && `transform: translateY(0px);`}
`;

const FadeInLeft = styled(FadeIn)`
  transform: translateX(-30px);
  ${({ isActive }) => isActive && `transform: translateX(0px);`}
`;

const FadeInRight = styled(FadeIn)`
  transform: translateX(30px);
  ${({ isActive }) => isActive && `transform: translateX(0px);`}
`;
