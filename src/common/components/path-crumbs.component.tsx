import { NavigateNext as NavigateNextIcon } from '@mui/icons-material';
import { Breadcrumbs, Link, Typography } from '@mui/material';

export interface BreadCrumbsProps {
  path?: string;
}

export function PathCrumbs({ path }: BreadCrumbsProps) {
  const pathSegments = !path ? ['Home'] : path.split('/');
  const BreadcrumbsChildren = pathSegments.reduce((acc, segment, idx) => {
    const isLastSegment = pathSegments.length - 1 === idx;

    if (isLastSegment) {
      acc.push(
        <Typography key={idx} color="text.primary">
          {segment}
        </Typography>,
      );
    } else {
      acc.push(
        <Link key={idx} underline="hover" color="inherit" href="#">
          {segment}
        </Link>,
      );
    }

    return acc;
  }, []);

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextIcon fontSize="small" />}
    >
      {BreadcrumbsChildren}
    </Breadcrumbs>
  );
}
