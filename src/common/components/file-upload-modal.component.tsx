import { Upload as UploadIcon } from '@mui/icons-material';
import {
  Box,
  BoxProps,
  Button,
  Modal,
  Portal,
  Typography,
} from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

export const modalStyle: Record<string, BoxProps['sx']> = {
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50vh',
    height: '30vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  controls: { display: 'flex', justifyContent: 'space-evenly' },
  actions: { display: 'flex', justifyContent: 'flex-end' },
};

export interface FileUploadModalProps {
  isFileUploadModalOpen: boolean;
  setFileUploadModal: Dispatch<SetStateAction<boolean>>;
}

export function FileUploadModal({
  isFileUploadModalOpen,
  setFileUploadModal,
}: FileUploadModalProps) {
  const handleClose = () => setFileUploadModal(false);

  return (
    <Portal>
      <Modal
        open={isFileUploadModalOpen}
        onClose={handleClose}
        aria-labelledby="file-upload-modal"
        aria-describedby="file-upload-description"
      >
        <Box sx={modalStyle.container}>
          <Typography id="file-upload-modal" variant="h6" component="h2">
            Upload a file
          </Typography>

          <Box sx={modalStyle.controls}>
            <Typography id="file-upload-description" sx={{ mt: 2 }}>
              Select a file to Upload.
            </Typography>

            <Button variant="contained" component="label">
              <UploadIcon />
              <input type="file" hidden />
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
