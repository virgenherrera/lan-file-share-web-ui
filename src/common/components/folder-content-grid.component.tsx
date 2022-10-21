import { Masonry } from '@mui/lab';
import { useMediaQuery, useTheme } from '@mui/material';
import { FolderInfo } from '../../api/models';
import { FileCard } from './file-card.component';
import { FolderCard } from './folder-card.component';

export function FolderContentGrid({ files, folders }: FolderInfo) {
  const folderElements = folders.map((folder, idx) => (
    <FolderCard key={`folder-${idx}`} name={folder} />
  ));
  const fileElements = files.map((file, idx) => (
    <FileCard key={`file-${idx}`} {...file} />
  ));
  const theme = useTheme();
  const isDownSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isBetweenSmAndMd = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isUpMd = useMediaQuery(theme.breakpoints.up('md'));
  let columns: number;

  if (isDownSm) columns = 1;
  if (isBetweenSmAndMd) columns = 2;
  if (isUpMd) columns = 4;

  return (
    <Masonry columns={columns} spacing={2}>
      {[...folderElements, ...fileElements]}
    </Masonry>
  );
}
