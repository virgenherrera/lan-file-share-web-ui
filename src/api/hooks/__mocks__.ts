import * as UseGetInfoModule from './use-get-folder-info.hook';

export const mockUseGetInfoModule: Record<keyof typeof UseGetInfoModule, any> =
  {
    useGetFolderInfo: jest.fn(),
  };

jest.mock('./use-get-folder-info.hook', () => mockUseGetInfoModule);
