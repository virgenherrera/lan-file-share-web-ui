import { UploadRoute } from '../enums';

export function getUploadUrl(route: keyof typeof UploadRoute): string {
  return `/api/v1${UploadRoute[route]}`;
}
