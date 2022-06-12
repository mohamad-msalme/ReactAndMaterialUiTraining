import * as React from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

export const  ElevationScroll: React.FC<Props> = (props: Props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}