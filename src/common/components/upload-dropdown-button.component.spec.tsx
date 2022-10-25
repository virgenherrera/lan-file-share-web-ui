import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { UploadDropdownButton } from './upload-dropdown-button.component';

describe(`UT: <${UploadDropdownButton.name} />`, () => {
  const enum should {
    collapseMenuOnClickAway = 'Should show dropdown button, expand menu after click and collapse after click away.',
    collapseMenuOnFileClick = 'Should show dropdown button, expand menu after click and collapse after click in "a file" option.',
    collapseMenuOnFilesClick = 'Should show dropdown button, expand menu after click and collapse after click in "many files" option.',
  }

  it(should.collapseMenuOnClickAway, async () => {
    render(<UploadDropdownButton />);

    let buttonElement = screen.getByText('Upload...');
    let aFileElement = screen.queryByText('a file');
    let manyFilesElement = screen.queryByText('many files');

    expect(buttonElement).toBeInTheDocument();
    expect(aFileElement).not.toBeInTheDocument();
    expect(manyFilesElement).not.toBeInTheDocument();

    fireEvent.click(buttonElement);

    buttonElement = screen.getByText('Upload...');
    aFileElement = screen.queryByText('a file');
    manyFilesElement = screen.queryByText('many files');

    expect(buttonElement).toBeInTheDocument();
    expect(aFileElement).toBeInTheDocument();
    expect(manyFilesElement).toBeInTheDocument();

    fireEvent.click(buttonElement);

    buttonElement = screen.getByText('Upload...');

    expect(buttonElement).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText('a file')).not.toBeVisible();
      expect(screen.queryByText('many files')).not.toBeVisible();
    });
  });

  it(should.collapseMenuOnFileClick, async () => {
    render(<UploadDropdownButton />);

    let buttonElement = screen.getByText('Upload...');
    let aFileElement = screen.queryByText('a file');
    let manyFilesElement = screen.queryByText('many files');

    expect(buttonElement).toBeInTheDocument();
    expect(aFileElement).not.toBeInTheDocument();
    expect(manyFilesElement).not.toBeInTheDocument();

    fireEvent.click(buttonElement);

    buttonElement = screen.getByText('Upload...');
    aFileElement = screen.queryByText('a file');
    manyFilesElement = screen.queryByText('many files');

    expect(buttonElement).toBeInTheDocument();
    expect(aFileElement).toBeInTheDocument();
    expect(manyFilesElement).toBeInTheDocument();

    fireEvent.click(aFileElement);
    await waitForElementToBeRemoved(aFileElement);

    buttonElement = screen.getByText('Upload...');
    aFileElement = screen.queryByText('a file');
    manyFilesElement = screen.queryByText('many files');
    const aFileModal = screen.queryByText('Select a file to Upload.');
    const manyFilesModal = screen.queryByText('Select your files to Upload.');

    expect(buttonElement).toBeInTheDocument();
    expect(aFileElement).not.toBeInTheDocument();
    expect(manyFilesElement).not.toBeInTheDocument();
    expect(aFileModal).toBeInTheDocument();
    expect(manyFilesModal).not.toBeInTheDocument();
  });

  it(should.collapseMenuOnFilesClick, async () => {
    render(<UploadDropdownButton />);

    let buttonElement = screen.getByText('Upload...');
    let aFileElement = screen.queryByText('a file');
    let manyFilesElement = screen.queryByText('many files');

    expect(buttonElement).toBeInTheDocument();
    expect(aFileElement).not.toBeInTheDocument();
    expect(manyFilesElement).not.toBeInTheDocument();

    fireEvent.click(buttonElement);

    buttonElement = screen.getByText('Upload...');
    aFileElement = screen.queryByText('a file');
    manyFilesElement = screen.queryByText('many files');

    expect(buttonElement).toBeInTheDocument();
    expect(aFileElement).toBeInTheDocument();
    expect(manyFilesElement).toBeInTheDocument();

    fireEvent.click(manyFilesElement);
    await waitForElementToBeRemoved(manyFilesElement);

    buttonElement = screen.getByText('Upload...');
    aFileElement = screen.queryByText('a file');
    manyFilesElement = screen.queryByText('many files');
    const aFileModal = screen.queryByText('Select a file to Upload.');
    const manyFilesModal = screen.queryByText('Select your files to Upload.');

    expect(buttonElement).toBeInTheDocument();
    expect(aFileElement).not.toBeInTheDocument();
    expect(manyFilesElement).not.toBeInTheDocument();
    expect(aFileModal).not.toBeInTheDocument();
    expect(manyFilesModal).toBeInTheDocument();
  });
});
