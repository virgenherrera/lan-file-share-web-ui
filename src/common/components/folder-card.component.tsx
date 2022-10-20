import { Folder as FolderIcon } from '@mui/icons-material';
import {
  Card,
  CardHeader,
  CardHeaderProps,
  CardProps,
  Link,
} from '@mui/material';

export interface FolderComponentProps {
  name: string;
  path: string;
}

export function FolderCard({ name, path }: FolderComponentProps) {
  const cardProps: CardProps = { elevation: 3, sx: { height: 'fit-content' } };
  const cardHeaderProps: CardHeaderProps = {
    title: (
      <Link href={path}>
        <FolderIcon /> {name}
      </Link>
    ),
  };

  return (
    <Card {...cardProps}>
      <CardHeader {...cardHeaderProps} />
    </Card>
  );
}
