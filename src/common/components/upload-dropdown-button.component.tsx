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

export function UploadDropdownButton() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const toggleOpen = () => setMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  const uploadFile = () => {
    console.log('Upload a file!');

    setMenuOpen(false);
  };
  const uploadFiles = () => {
    console.log('Upload a bunch of files!');

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
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={closeMenu}>
                <MenuList id="split-button-menu" autoFocusItem>
                  <MenuItem onClick={uploadFile}>Upload a file</MenuItem>
                  <MenuItem onClick={uploadFiles}>Upload many files</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Fragment>
  );
}
