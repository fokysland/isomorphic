import { useState, useEffect } from 'react';

import { Sizes } from '../styles/media';

const getWindowWidth = () => window.innerWidth;

type Result = {
  isTablet: boolean;
  isDesktop: boolean;
  isMobile: boolean;
};

export const useSizes = (): Result => {
  const [isMobile, setIsMobile] = useState(getWindowWidth() <= Sizes.MOBILE);
  const [isTablet, setIsTablet] = useState(getWindowWidth() <= Sizes.TABLET);
  const [isDesktop, setIsDesktop] = useState(getWindowWidth() > Sizes.TABLET);

  useEffect(() => {
    const handleResize = () => {
      const width = getWindowWidth();

      // such strange if's for performance optimizations
      if (width <= Sizes.TABLET && !isTablet) setIsTablet(true);
      else if (width > Sizes.TABLET && isTablet) setIsTablet(false);

      if (width <= Sizes.MOBILE && !isMobile) setIsMobile(true);
      else if (width > Sizes.MOBILE && isMobile) setIsMobile(false);

      if (width > Sizes.TABLET && !isDesktop) setIsDesktop(true);
      else if (width <= Sizes.TABLET && isDesktop) setIsDesktop(false);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [isDesktop, isTablet, isMobile]);

  return {
    isDesktop, isMobile, isTablet,
  };
};
