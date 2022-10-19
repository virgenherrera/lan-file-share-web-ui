import { Folder as FolderIcon } from '@mui/icons-material';
import {
  Card,
  CardHeader,
  CardHeaderProps,
  CardProps,
  Link,
} from '@mui/material';
import { format } from 'date-fns';

export interface FolderComponentProps {
  name: string;
  path: string;
  updatedAt?: Date;
}

export function FolderCard({ name, path, updatedAt }: FolderComponentProps) {
  const cardProps: CardProps = { elevation: 3, sx: { height: '5rem' } };
  const cardHeaderProps: CardHeaderProps = {
    title: (
      <Link href={path}>
        <FolderIcon /> {name}
      </Link>
    ),
  };

  if (updatedAt)
    cardHeaderProps.subheader = `updatedAt: ${format(updatedAt, 'yyyy/MM/dd')}`;

  return (
    <Card {...cardProps}>
      <CardHeader {...cardHeaderProps} />
    </Card>
  );
}
