import { render, screen } from '@testing-library/react';
import { FolderCard } from './folder-card.component';

describe(`UT: <${FolderCard.name} />`, () => {
  const enum should {
    showFolderName = 'Should show only folder name.',
  }

  it(should.showFolderName, () => {
    const expectedName = 'Foo-bar';
    const expectedPath = '/Foo-bar';

    render(<FolderCard name={expectedName} path={expectedPath} />);

    const aElement = screen.getByText(expectedName).closest('a');

    expect(aElement).toHaveAttribute('href', expectedPath);
  });
});
