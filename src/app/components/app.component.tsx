import { ThemeProvider } from '@emotion/react';
import { Copyright } from '@mui/icons-material';
import { Box, CssBaseline } from '@mui/material';
import { StrictMode } from 'react';

import { SnackBarBoundary } from '../../common/boundaries';
import { FolderContentGrid, Header, PathCrumbs } from '../../common/components';
import { Theme } from '../../mui-material';
import { PathProvider } from '../context';
import { usePath } from '../hooks';

export function App() {
  const pathContext = usePath();

  return (
    <StrictMode>
      <ThemeProvider theme={Theme}>
        <PathProvider value={pathContext}>
          <CssBaseline />

          <Box sx={{ display: 'flex', minHeight: '100vh', minWidth: '100vw' }}>
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <Header />

              <Box
                component="nav"
                sx={{
                  flex: 1,
                  py: 2,
                  px: 4,
                  bgcolor: '#eaeff1',
                  maxHeight: '2.5rem',
                }}
              >
                <PathCrumbs />
              </Box>

              <Box
                component="main"
                sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}
              >
                <SnackBarBoundary>
                  <FolderContentGrid />
                </SnackBarBoundary>
              </Box>

              <Box component="footer" sx={{ p: 2, bgcolor: '#eaeff1' }}>
                <Copyright />
              </Box>
            </Box>
          </Box>
        </PathProvider>
      </ThemeProvider>
    </StrictMode>
  );
}
