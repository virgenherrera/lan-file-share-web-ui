import { Upload as UploadIcon } from '@mui/icons-material';
import { Box, Button, Modal, Portal, Typography } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { modalStyle } from './file-upload-modal.component';

export interface FilesUploadModalProps {
  isFilesUploadModalOpen: boolean;
  setFilesUploadModal: Dispatch<SetStateAction<boolean>>;
}

export function FilesUploadModal({
  isFilesUploadModalOpen,
  setFilesUploadModal,
}: FilesUploadModalProps) {
  const handleClose = () => setFilesUploadModal(false);

  return (
    <Portal>
      <Modal
        open={isFilesUploadModalOpen}
        onClose={handleClose}
        aria-labelledby="file-upload-modal"
        aria-describedby="file-upload-description"
      >
        <Box sx={modalStyle.container}>
          <Typography id="file-upload-modal" variant="h6" component="h2">
            Upload many files
          </Typography>

          <Box sx={modalStyle.controls}>
            <Typography id="file-upload-description" sx={{ mt: 2 }}>
              Select your files to Upload.
            </Typography>

            <Button variant="contained" component="label">
              <UploadIcon />
              <input type="file" hidden multiple />
            </Button>
          </Box>

          <Box sx={modalStyle.actions}>
            <Button
              variant="outlined"
              sx={{ marginX: '0.5rem' }}
              onClick={handleClose}
            >
              Back
            </Button>
            <Button variant="contained" disabled>
              Upload
            </Button>
          </Box>
        </Box>
      </Modal>
    </Portal>
  );
}
