import { ApiException, FolderInfo } from '../models';
import { getFolderInfoService } from './get-folder-info.service';

describe(`UT:${getFolderInfoService.name}()`, () => {
  const enum should {
    throwOnFailure = 'Should throw is request was not successfully.',
    fetchFolderData = 'Should fetch base folder data properly and return an instance of FolderInfo model.',
  }

  const mockFetchResponse: any = {
    ok: false,
    json: jest.fn(),
  };

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it(should.throwOnFailure, async () => {
    global.fetch = jest.fn().mockResolvedValue(mockFetchResponse);

    await expect(getFolderInfoService('')).rejects.toBeInstanceOf(ApiException);
  });

  it(should.throwOnFailure, async () => {
    const mockResponseJson = {
      files: [
        {
          fileName: 'foo-file',
          path: '/foo-file',
          size: '15Gb',
          createdAt: new Date('2022/01/01'),
          updatedAt: new Date('2022/01/02'),
        },
        {
          fileName: 'bar-file',
          path: '/bar-file',
          size: '15Mb',
          createdAt: new Date('2022/01/03'),
          updatedAt: new Date('2022/01/04'),
        },
        {
          fileName: 'baz-file',
          path: '/baz-file',
          size: '17Kb',
          createdAt: new Date('2022/01/05'),
          updatedAt: new Date('2022/01/06'),
        },
      ] as any[],
      folders: ['foo-folder', 'bar-folder', 'baz-folder', 'uug-folder'],
    };

    mockFetchResponse.ok = true;
    mockFetchResponse.json = jest.fn().mockResolvedValue(mockResponseJson);

    await expect(
      getFolderInfoService('fake/sub/folder'),
    ).resolves.toBeInstanceOf(FolderInfo);
  });
});
