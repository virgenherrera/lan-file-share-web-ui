import { SharedFolderRoute } from '../enums';

export function getSharedFolderUrl(
  route: keyof typeof SharedFolderRoute,
): string {
  return `/api/v1${SharedFolderRoute[route]}`;
}
