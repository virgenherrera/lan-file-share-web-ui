import { getSharedFolderUrl } from './get-shared-folder-url.util';

describe(`UT:${getSharedFolderUrl.name}()`, () => {
  const enum should {
    getSharedFolderURL = 'Should produce a proper "sharedFolder" apiUrl',
    getFileStreamUrl = 'Should produce a proper "fileStream" apiUrl',
    getZipFileUrl = 'Should produce a proper "zipFile" apiUrl',
  }

  it(should.getSharedFolderURL, async () => {
    expect(getSharedFolderUrl('sharedFolder')).toBe('/api/v1/shared-folder');
  });

  it(should.getFileStreamUrl, async () => {
    expect(getSharedFolderUrl('sharedFolder')).toBe(
      '/api/v1/shared-folder/file',
    );
  });

  it(should.getZipFileUrl, async () => {
    expect(getSharedFolderUrl('zipFile')).toBe('/api/v1/shared-folder/zip');
  });
});
