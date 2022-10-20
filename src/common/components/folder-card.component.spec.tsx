import { render, screen } from '@testing-library/react';
import { FolderCard } from './folder-card.component';

describe(`UT: <${FolderCard.name} />`, () => {
  const enum should {
    showFolderName = 'Should show only folder name.',
  }

  it(should.showFolderName, () => {
    const expectedName = 'foo-bar';
    const expectedPath = `/${expectedName}`;

    render(<FolderCard name={expectedName} />);

    const aElement = screen.getByText(expectedName).closest('a');

    expect(aElement).toHaveAttribute('href', expectedPath);
  });
});
