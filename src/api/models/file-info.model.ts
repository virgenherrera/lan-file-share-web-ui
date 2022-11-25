import { parseISO } from 'date-fns';
import { SharedFolderRoute } from '../enums';

export type FileInfoArgs = Record<keyof FileInfo, string>;

export class FileInfo {
  fileName: string;
  href: string;
  path: string;
  size: string;
  createdAt: Date;
  updatedAt: Date;

  constructor({
    fileName,
    path,
    size,
    createdAt,
    updatedAt,
  }: Record<keyof FileInfo, string>) {
    Object.assign(this, {
      fileName,
      href: `/api/v1${SharedFolderRoute.fileStream}?path=${path}`,
      path,
      size,
      createdAt: parseISO(createdAt),
      updatedAt: parseISO(updatedAt),
    });
  }
}
