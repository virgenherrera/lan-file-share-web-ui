import { Lan as LanIcon } from '@mui/icons-material';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { FileUploadModalProps } from './file-upload-modal.component';
import { UploadDropdownButton } from './upload-dropdown-button.component';

export type HeaderProps = Pick<FileUploadModalProps, 'setFileUploadModal'>;

export function Header(props: HeaderProps) {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LanIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Lan File Share
          </Typography>

          <LanIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LFS
          </Typography>
          <UploadDropdownButton {...props} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
