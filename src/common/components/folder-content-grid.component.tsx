import { Masonry } from '@mui/lab';
import { Paper, useMediaQuery, useTheme } from '@mui/material';
import { FolderCard } from './folder-card.component';

export function FolderContentGrid() {
  const theme = useTheme();
  const isDownSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isBetweenSmAndMd = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isUpMd = useMediaQuery(theme.breakpoints.up('md'));
  let columns: number;

  if (isDownSm) columns = 1;
  if (isBetweenSmAndMd) columns = 2;
  if (isUpMd) columns = 4;

  /* -- Dummy Children --*/
  const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];
  const MasonryChildren = heights.map((height, index) => (
    <Paper key={index} elevation={3} sx={{ height }}>
      {index + 1}
    </Paper>
  ));
  /* -- Dummy Children --*/

  return (
    <Masonry columns={columns} spacing={2}>
      <FolderCard name="foo" key="2" path="/foo" />
      <FolderCard name="foo" key="3" path="/bar" updatedAt={new Date()} />
      {MasonryChildren}
    </Masonry>
  );
}
