import { fireEvent, render } from '@testing-library/react';
import { FileUploadModal } from './file-upload-modal.component';

describe(`UT: <${FileUploadModal.name} />`, () => {
  const enum should {
    initialState = 'Should Modal be hidden when show flag is false.',
    revealModal = 'Should reveal modal when provided flag is true.',
    closeModalOnBackClick = 'Should hide Modal when click on Back button.',
  }

  it(should.initialState, () => {
    const mockSetFileUploadModal = jest.fn();

    const { container } = render(
      <FileUploadModal
        isFileUploadModalOpen={false}
        setFileUploadModal={mockSetFileUploadModal}
      />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it(should.revealModal, () => {
    const mockSetFileUploadModal = jest.fn();
    const { getByText } = render(
      <FileUploadModal
        isFileUploadModalOpen={true}
        setFileUploadModal={mockSetFileUploadModal}
      />,
    );

    const titleText = getByText('Upload a file');
    const buttonText = getByText('Select a file to Upload.');

    expect(titleText).toBeInTheDocument();
    expect(buttonText).toBeInTheDocument();
    expect(mockSetFileUploadModal).not.toHaveBeenCalled();
  });

  it(should.closeModalOnBackClick, () => {
    const mockSetFileUploadModal = jest.fn();
    const { container, getByText } = render(
      <FileUploadModal
        isFileUploadModalOpen={true}
        setFileUploadModal={mockSetFileUploadModal}
      />,
    );

    const titleText = getByText('Upload a file');
    const buttonText = getByText('Select a file to Upload.');
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
