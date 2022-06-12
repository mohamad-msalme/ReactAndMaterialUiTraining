import React from 'react';
import { AppBar, CssBaseline, Fab, Toolbar } from '@mui/material';
import { ScrollTop } from '../scroll/ScrollToTop'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { logo } from '../../../assets';

export const Header: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position='fixed' color='primary'>
        <Toolbar>
          <img src={logo} alt='Logo Company'/>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top" />
      <ScrollTop backId='back-to-top'>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
    
  )
}