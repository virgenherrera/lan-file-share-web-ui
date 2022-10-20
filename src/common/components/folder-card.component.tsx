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
    sx: { 'padding-top': '0.5rem', 'padding-bottom': 0 },
  };
  const cardContentProps: CardContentProps = { sx: { 'padding-top': 0 } };

  return (
    <Card {...cardProps}>
      <CardHeader {...cardHeaderProps} />
      <CardContent {...cardContentProps}>{name}</CardContent>
    </Card>
  );
}
