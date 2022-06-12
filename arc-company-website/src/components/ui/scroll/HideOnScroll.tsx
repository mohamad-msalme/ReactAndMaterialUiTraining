import { Slide, useScrollTrigger } from '@mui/material';
import React from 'react';

interface Props {
  window?: () => Window;
  children: React.ReactElement;
  
} 
export const HideOnScroll: React.FC<Props> = ({ children, window}) => {
  const trigger = useScrollTrigger({target: window ? window() : undefined});
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}