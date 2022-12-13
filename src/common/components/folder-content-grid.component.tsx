import { Masonry } from '@mui/lab';
import { useContext } from 'react';

import { useGetFolderInfo } from '../../api/hooks';
import { PathContext } from '../../app/context';
import { FileCard } from './file-card.component';
import { FolderCard } from './folder-card.component';
import { Loading } from './loading.component';
const masonryColumns = { xs: 1, sm: 2, md: 4, lg: 4, xl: 6 };

export function FolderContentGrid() {
  const { path } = useContext(PathContext);
  const folderInfo = useGetFolderInfo(path);

  return !folderInfo ? (
    <Loading />
  ) : (
    <Masonry role="grid" columns={masonryColumns} spacing={2}>
      {folderInfo.folders.map((folder, idx) => (
        <FolderCard key={`folder-${idx}`} name={folder} />
      ))}
      {folderInfo.files.map((file, idx) => (
        <FileCard key={`file-${idx}`} {...file} />
      ))}
    </Masonry>
  );
}
