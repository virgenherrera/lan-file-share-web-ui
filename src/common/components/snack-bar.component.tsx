import {
  Alert,
  AlertProps,
  AlertTitle,
  Portal,
  Snackbar,
  SnackbarContentProps,
} from '@mui/material';
import { useState } from 'react';

export interface ErrorSnackBarProps {
  title: SnackbarContentProps['title'];
  message: SnackbarContentProps['message'];
  severity: AlertProps['severity'];
  variant?: AlertProps['variant'];
}

export function SnackBar({
  title,
  message,
  severity,
  variant = 'filled',
}: ErrorSnackBarProps) {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  return (
    <Portal>
      <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={5e3}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        message={message}
      >
        <Alert severity={severity} variant={variant} onClose={handleClose}>
          <AlertTitle>{title}</AlertTitle>
          {message}
        </Alert>
      </Snackbar>
    </Portal>
  );
}
