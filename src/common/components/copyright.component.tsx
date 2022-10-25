import { Link, Typography } from '@mui/material';

export function Copyright() {
  const year = new Date().getFullYear();
  const startString = 'Copyright © ';
  const trailString = ` ${year}.`;

  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {startString}
      <Link
        color="inherit"
        href="https://github.com/virgenherrera"
        target="_blank"
      >
        H.V.
      </Link>{' '}
      {trailString}
    </Typography>
  );
}
