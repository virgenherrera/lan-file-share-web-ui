import { fireEvent, render } from '@testing-library/react';
import { FilesUploadModal } from './files-upload-modal.component';

describe(`UT: <${FilesUploadModal.name} />`, () => {
  const enum should {
    initialState = 'Should Modal be hidden when show flag is false.',
    revealModal = 'Should reveal modal when provided flag is true.',
    closeModalOnBackClick = 'Should hide Modal when click on Back button.',
  }

  it(should.initialState, () => {
    const mockSetFileUploadModal = jest.fn();

    const { container } = render(
      <FilesUploadModal
        isFilesUploadModalOpen={false}
        setFilesUploadModal={mockSetFileUploadModal}
      />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it(should.revealModal, () => {
    const mockSetFileUploadModal = jest.fn();
    const { getByText } = render(
      <FilesUploadModal
        isFilesUploadModalOpen={true}
        setFilesUploadModal={mockSetFileUploadModal}
      />,
    );

    const titleText = getByText('Upload many files');
    const buttonText = getByText('Select your files to Upload.');

    expect(titleText).toBeInTheDocument();
    expect(buttonText).toBeInTheDocument();
    expect(mockSetFileUploadModal).not.toHaveBeenCalled();
  });

  it(should.closeModalOnBackClick, () => {
    const mockSetFileUploadModal = jest.fn();
    const { container, getByText } = render(
      <FilesUploadModal
        isFilesUploadModalOpen={true}
        setFilesUploadModal={mockSetFileUploadModal}
      />,
    );

    const titleText = getByText('Upload many files');
    const buttonText = getByText('Select your files to Upload.');
    const backButton = getByText('Back');

    expect(titleText).toBeInTheDocument();
    expect(buttonText).toBeInTheDocument();
    expect(backButton).toBeInTheDocument();
    expect(mockSetFileUploadModal).not.toHaveBeenCalled();

    fireEvent.click(backButton);

    expect(mockSetFileUploadModal).toHaveBeenCalled();
    expect(container).toBeEmptyDOMElement();
  });
});
