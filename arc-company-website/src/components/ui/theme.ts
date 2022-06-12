import { createTheme } from '@mui/material';
import { CommonColors } from '@mui/material/styles/createPalette';

const arcBlue = '#0b72b9';
const arcOrange = '#ffba60';

const theme = createTheme({
 palette: {
  common: {
    arcBlue,
    arcOrange,
  } as unknown as CommonColors,
  primary: {
    main: arcBlue,
  },
  secondary: {
    main: arcOrange
  }
 },
 typography: {
  h3: {
    fontWeight: 300
  },
 }
});
export default theme;