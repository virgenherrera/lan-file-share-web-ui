import { Folder as FolderIcon } from '@mui/icons-material';
import {
  Card,
  CardContent,
  CardContentProps,
  CardHeader,
  CardHeaderProps,
  CardProps,
  Link,
} from '@mui/material';
import { useContext } from 'react';

import { PathContext } from '../../app/context';

export interface FolderComponentProps {
  name: string;
}

const cardProps: CardProps = {
  elevation: 3,
  sx: { height: 'fit-content', cursor: 'pointer' },
};
const cardContentProps: CardContentProps = { sx: { paddingTop: 0 } };

export function FolderCard({ name }: FolderComponentProps) {
  const { setPath } = useContext(PathContext);
  const handleClick = () => setPath(name);
  const cardHeaderProps: CardHeaderProps = {
    title: (
      <Link role="link">
        <FolderIcon />
      </Link>
    ),
    sx: { paddingTop: '0.5rem', paddingBottom: 0 },
  };

  return (
    <Card {...cardProps} onClick={handleClick}>
      <CardHeader {...cardHeaderProps} />
      <CardContent {...cardContentProps}>{name}</CardContent>
    </Card>
  );
}
