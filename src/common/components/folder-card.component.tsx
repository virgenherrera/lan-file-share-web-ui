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

export interface FolderComponentProps {
  name: string;
}

export function FolderCard({ name }: FolderComponentProps) {
  const cardProps: CardProps = { elevation: 3, sx: { height: 'fit-content' } };
  const cardHeaderProps: CardHeaderProps = {
    title: (
      <Link href={`/${name}`}>
        <FolderIcon />
      </Link>
    ),
    sx: { paddingTop: '0.5rem', paddingBottom: 0 },
  };
  const cardContentProps: CardContentProps = { sx: { paddingTop: 0 } };

  return (
    <Card {...cardProps}>
      <CardHeader {...cardHeaderProps} />
      <CardContent {...cardContentProps}>{name}</CardContent>
    </Card>
  );
}
