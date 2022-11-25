import { Masonry } from '@mui/lab';
import { useGetFolderInfo } from '../../api/hooks';
import { FileCard } from './file-card.component';
import { FolderCard } from './folder-card.component';
import { Loading } from './loading.component';

export interface FolderContentGridProps {
  path: string;
}

const masonryColumns = { xs: 1, sm: 2, md: 4, lg: 4, xl: 6 };

export function FolderContentGrid({ path }: FolderContentGridProps) {
  const folderInfo = useGetFolderInfo(path);

  return !folderInfo ? (
    <Loading />
  ) : (
    <Masonry columns={masonryColumns} spacing={2}>
      {folderInfo.folders.map((folder, idx) => (
        <FolderCard key={`folder-${idx}`} name={folder} />
      ))}
      {folderInfo.files.map((file, idx) => (
        <FileCard key={`file-${idx}`} {...file} />
      ))}
    </Masonry>
  );
}
