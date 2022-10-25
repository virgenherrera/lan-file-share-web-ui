import { ArrowDropDown } from '@mui/icons-material';
import {
  Button,
  ButtonGroup,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from '@mui/material';
import { Fragment, useRef, useState } from 'react';
import { FileUploadModal } from './file-upload-modal.component';
import { FilesUploadModal } from './files-upload-modal.component';

export function UploadDropdownButton() {
  const [isFileUploadModalOpen, setFileUploadModal] = useState(false);
  const [isFilesUploadModalOpen, setFilesUploadModal] = useState(false);
  const fileModalProps = { isFileUploadModalOpen, setFileUploadModal };
  const filesModalProps = { isFilesUploadModalOpen, setFilesUploadModal };
  const [isMenuOpen, setMenuOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const toggleOpen = () => setMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  const uploadFile = () => {
    setFileUploadModal(true);
    setMenuOpen(false);
  };
  const uploadFiles = () => {
    setFilesUploadModal(true);
    setMenuOpen(false);
  };
  const closeMenu = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setMenuOpen(false);
  };

  return (
    <Fragment>
      <ButtonGroup
        variant="contained"
        ref={anchorRef}
        aria-label="split button"
      >
        <Button onClick={toggleOpen}>Upload...</Button>
        <Button
          size="small"
          aria-controls={isMenuOpen ? 'split-button-menu' : undefined}
          aria-expanded={isMenuOpen ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={toggleOpen}
        >
          <ArrowDropDown />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={isMenuOpen}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={closeMenu}>
                <MenuList id="split-button-menu" autoFocusItem>
                  <MenuItem onClick={uploadFile}>a file</MenuItem>
                  <MenuItem onClick={uploadFiles}>many files</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>

      {isFileUploadModalOpen && <FileUploadModal {...fileModalProps} />}
      {isFilesUploadModalOpen && <FilesUploadModal {...filesModalProps} />}
    </Fragment>
  );
}
