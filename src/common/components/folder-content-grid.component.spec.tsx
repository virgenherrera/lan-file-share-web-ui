import { render, screen } from '@testing-library/react';
import { FolderInfo } from '../../api/models';
import { FolderContentGrid } from './folder-content-grid.component';

describe(`UT: <${FolderContentGrid.name} />`, () => {
  const enum should {
    renderProvidedFolderInfoProps = 'Should render properly all "FolderInfoProps".',
  }

  const folderInfo = new FolderInfo({
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
  });

  it(should.renderProvidedFolderInfoProps, async () => {
    render(<FolderContentGrid {...folderInfo} />);

    for await (const folder of folderInfo.folders) {
      const folderElement = screen.getByText(folder);
      // const aElement = folderElement.closest('a');

      expect(folderElement).toBeInTheDocument();
      // expect(aElement).toBeInTheDocument();
    }

    for await (const file of folderInfo.files) {
      const fileElement = screen.getByText(file.fileName);

      expect(fileElement).toBeInTheDocument();
    }
  });
});
