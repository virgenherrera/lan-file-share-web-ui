import { ApiException, FolderInfo } from '../models';
import { getSharedFolderUrl } from '../utils';

export async function getFolderInfoService(path: string): Promise<FolderInfo> {
  let url = getSharedFolderUrl('sharedFolder');

  if (path) url += `?path=${encodeURIComponent(path)}`;

  const response = await fetch(url);

  if (!response.ok) throw new ApiException(response);

  const data = await response.json();

  return new FolderInfo(data);
}
