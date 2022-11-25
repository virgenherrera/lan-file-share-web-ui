import { getUploadUrl } from './get-upload-url.util';

describe(`UT:${getUploadUrl.name}()`, () => {
  const enum should {
    getMimeTypesUrl = 'Should produce a proper "mimeTypes" apiUrl',
    getFileUrl = 'Should produce a proper "file" apiUrl',
    getFilesUrl = 'Should produce a proper "files" apiUrl',
  }

  it(should.getMimeTypesUrl, async () => {
    expect(getUploadUrl('mimeTypes')).toBe('/api/v1/upload/mime-types');
  });

  it(should.getFileUrl, async () => {
    expect(getUploadUrl('file')).toBe('/api/v1/upload/file');
  });

  it(should.getFilesUrl, async () => {
    expect(getUploadUrl('files')).toBe('/api/v1/upload/files');
  });
});
