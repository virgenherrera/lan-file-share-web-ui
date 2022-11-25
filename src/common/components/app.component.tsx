import { ThemeProvider } from '@emotion/react';
import { Box, CssBaseline } from '@mui/material';
import { StrictMode, useState } from 'react';
import { Theme } from '../../mui-material';
import { SnackBarBoundary } from '../boundaries';
import { Copyright } from './copyright.component';
import { FolderContentGrid } from './folder-content-grid.component';
import { Header } from './header.component';
import { PathCrumbs } from './path-crumbs.component';

export function App() {
  const [path] = useState('');

  return (
    <StrictMode>
      <ThemeProvider theme={Theme}>
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
              <PathCrumbs path={path} />
            </Box>

            <Box
              component="main"
              sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}
            >
              <SnackBarBoundary>
                <FolderContentGrid path={path} />
              </SnackBarBoundary>
            </Box>

            <Box component="footer" sx={{ p: 2, bgcolor: '#eaeff1' }}>
              <Copyright />
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </StrictMode>
  );
}
