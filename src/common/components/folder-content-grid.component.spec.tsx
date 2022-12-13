import { render, screen, waitFor } from '@testing-library/react';
import { format } from 'date-fns';
import { mockUseGetInfoModule } from '../../api/hooks/__mocks__';
import { FolderInfo } from '../../api/models';
import { FolderContentGrid } from './folder-content-grid.component';

describe(`UT: <${FolderContentGrid.name} />`, () => {
  const enum should {
    renderProvidedFolderInfoProps = 'Should render properly all "FolderInfoProps".',
  }

  const mockFolderInfo = new FolderInfo({
    files: [
      {
        fileName: 'foo-file',
        path: '/foo-file',
        size: '15Gb',
        createdAt: new Date('2022/01/01').toISOString(),
        updatedAt: new Date('2022/01/02').toISOString(),
      },
      {
        fileName: 'bar-file',
        path: '/bar-file',
        size: '15Mb',
        createdAt: new Date('2022/01/03').toISOString(),
        updatedAt: new Date('2022/01/04').toISOString(),
      },
      {
        fileName: 'baz-file',
        path: '/baz-file',
        size: '17Kb',
        createdAt: new Date('2022/01/05').toISOString(),
        updatedAt: new Date('2022/01/06').toISOString(),
      },
    ] as any[],
    folders: ['foo-folder', 'bar-folder', 'baz-folder', 'uug-folder'],
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it(should.renderProvidedFolderInfoProps, async () => {
    mockUseGetInfoModule.useGetFolderInfo = jest
      .fn()
      .mockReturnValue(mockFolderInfo);

    const useGetFolderInfoSpy = jest.spyOn(
      mockUseGetInfoModule,
      'useGetFolderInfo',
    );
    const { getByText, queryByRole } = render(<FolderContentGrid />);

    expect(useGetFolderInfoSpy).toHaveBeenCalled();
    await waitFor(() => expect(queryByRole('grid')).toBeInTheDocument());

    for await (const folder of mockFolderInfo.folders) {
      const folderElement = getByText(folder);

      expect(folderElement).toBeInTheDocument();
    }

    for await (const file of mockFolderInfo.files) {
      const fileElement = screen.getByText(file.fileName);
      const sizeElement = screen.getByText(file.size);
      const createdAtElement = screen.getByText(
        `${format(file.createdAt, 'yyyy/MM/dd')}`,
      );
      const updatedAtElement = screen.getByText(
        `${format(file.createdAt, 'yyyy/MM/dd')}`,
      );

      expect(fileElement).toBeInTheDocument();
      expect(sizeElement).toBeInTheDocument();
      expect(createdAtElement).toBeInTheDocument();
      expect(updatedAtElement).toBeInTheDocument();
    }
  });
});
function waitfor(arg0: () => void) {
  throw new Error('Function not implemented.');
}
