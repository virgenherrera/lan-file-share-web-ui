import { useEffect, useState } from 'react';
import { FolderInfo } from '../models';
import { getFolderInfoService } from '../services';
import { useAsyncError } from './use-async-error.hook';

export function useGetFolderInfo(path: string): FolderInfo {
  const [folderInfo, setFolderInfo] = useState<FolderInfo>(null);
  const throwError = useAsyncError();

  useEffect(() => {
    getFolderInfoService(path).then(setFolderInfo).catch(throwError);
  }, [path]);

  return folderInfo;
}
