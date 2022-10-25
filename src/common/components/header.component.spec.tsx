import { render, screen } from '@testing-library/react';
import { Header } from './header.component';

describe(`UT: <${Header.name} />`, () => {
  const enum should {
    renderComponent = 'Should Render component properly',
  }

  it(should.renderComponent, async () => {
    render(<Header />);

    const titleElement = screen.getByText('Lan File Share');
    const buttonElement = screen.getByText('Upload...');
    const aFileElement = screen.queryByText('a file');
    const manyFilesElement = screen.queryByText('many files');

    expect(titleElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    expect(aFileElement).not.toBeInTheDocument();
    expect(manyFilesElement).not.toBeInTheDocument();
  });
});
