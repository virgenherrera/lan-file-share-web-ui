import { render, screen } from '@testing-library/react';
import { FolderCard } from './folder-card.component';

describe(`UT: <${FolderCard.name} />`, () => {
  const enum should {
    showFolderName = 'Should show only folder name.',
  }

  it(should.showFolderName, () => {
    const expectedName = 'foo-bar';

    render(<FolderCard name={expectedName} />);

    const folderNameElement = screen.getByText(expectedName);
    // const aElement = folderNameElement.closest('a');

    expect(folderNameElement).toBeInTheDocument();
    // expect(aElement).toBeInTheDocument();
    // expect(aElement).toHaveProperty('href', `/${expectedName}`);
  });
});
