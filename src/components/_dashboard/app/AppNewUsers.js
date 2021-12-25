// import * as React from 'react';
import { Box, ThemeProvider, createTheme } from '@mui/system';
import { Grid } from '@mui/material';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';

const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
    icon: {
      green: '#009688',
      pink:  '#ff80ab',
      cyan:  '#00e5ff',
    },
  },
});

export default function Example() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
        }}
      >
        <Grid container spacing={2}>
            <Grid item xs={10}>
              <Box sx={{ color: 'text.primary', textTransform: 'uppercase', fontWeight: 'bold' }}>Savings Account</Box>
              <Box sx={{ color: 'text.secondary', fontSize: 10, fontWeight: 'medium', mb: 10, textTransform: 'uppercase' }}>
                Sub Account - 12346789
              </Box>
            </Grid>
            <Grid item xs={2}>
             <CreditCardRoundedIcon sx={{ fontSize: '24px', color: 'icon.cyan'}}/>
            </Grid>
        </Grid>
        <Box
          sx={{
            color: 'text.secondary',
            display: 'inline',
            fontWeight: 'medium',
            mx: 0.5,
            fontSize: 24,
          }}
        >
          N39,342
        </Box>
        <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 14 }}>
        .45
        </Box>
      </Box>
    </ThemeProvider>
  );
}
