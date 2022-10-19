import { render, screen } from '@testing-library/react';
import { FolderCard } from './folder-card.component';

describe(`UT: <${FolderCard.name} />`, () => {
  const enum should {
    showFolderName = 'Should show only folder name.',
    showFolderNameAndLastModified = 'Should show folder name and date with last modified.',
  }

  it(should.showFolderName, () => {
    const expectedName = 'Foo-bar';
    const expectedPath = '/Foo-bar';

    render(<FolderCard name={expectedName} path={expectedPath} />);

    const aElement = screen.getByText(expectedName).closest('a');

    expect(aElement).toHaveAttribute('href', expectedPath);
  });

  it(should.showFolderName, () => {
    const expectedName = 'Foo-bar';
    const expectedPath = '/Foo-bar';
    const date = new Date();

    render(
      <FolderCard name={expectedName} path={expectedPath} updatedAt={date} />,
    );

    const aElement = screen.getByText(expectedName).closest('a');
    const subHeader = screen.getByText(`updatedAt: ${date.getFullYear()}/`, {
      exact: false,
    });

    expect(aElement).toHaveAttribute('href', expectedPath);
    expect(subHeader).toBeTruthy();
  });
});
