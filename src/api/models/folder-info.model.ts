import { FileInfo } from './file-info.model';

export class FolderInfo {
  files: FileInfo[] = [];
  folders: string[] = [];

  constructor(args: FolderInfo) {
    this.files = args.files.map((file: any) => new FileInfo(file));
    this.folders = args.folders;
  }
}
