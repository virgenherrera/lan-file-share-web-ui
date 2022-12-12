import { NavigateNext as NavigateNextIcon } from '@mui/icons-material';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { useContext } from 'react';

import { PathContext } from '../../app/context';

function getLink(key: string, text: string, onClick: () => void) {
  return (
    <Link key={key} underline="hover" color="inherit" onClick={onClick}>
      {text}
    </Link>
  );
}

function getTypography(key: string, text: string) {
  return (
    <Typography key={key} color="text.primary">
      {text}
    </Typography>
  );
}

export const RootName = `<RootDir>`;

export function PathCrumbs() {
  const { path, setPath } = useContext(PathContext);
  const handleClick = (nextPath: string) => () => setPath(nextPath);
  const HomeComponent = !path
    ? getTypography('default-home-string', RootName)
    : getLink('default-home-link', RootName, handleClick(''));
  const BreadcrumbsChildren = path.split('/').reduce(
    (acc, segment, idx, pathSegments) => {
      const isLastSegment = pathSegments.length - 1 === idx;

      if (isLastSegment) {
        acc.push(getTypography(`typography-${idx}`, segment));
      } else {
        const parentPath = pathSegments.slice(0, idx - 1).join('/');

        acc.push(getLink(`link-${idx}`, segment, handleClick(parentPath)));
      }

      return acc;
    },
    [HomeComponent],
  );

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextIcon fontSize="medium" />}
    >
      {BreadcrumbsChildren}
    </Breadcrumbs>
  );
}
