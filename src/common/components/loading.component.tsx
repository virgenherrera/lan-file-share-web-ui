import { Box, CircularProgress, CircularProgressProps } from '@mui/material';

export type LoadingProps = Partial<Pick<CircularProgressProps, 'size'>>;

export function Loading({ size = '5rem' }: LoadingProps) {
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <CircularProgress role="alert" aria-busy="true" size={size} />
    </Box>
  );
}
