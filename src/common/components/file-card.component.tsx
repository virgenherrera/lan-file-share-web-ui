import {
  FileCopy as FileCopyIcon,
  FileDownload as FileDownloadIcon,
} from '@mui/icons-material';
import {
  Card,
  CardContent,
  CardHeader,
  CardHeaderProps,
  CardProps,
  Link,
} from '@mui/material';
import { format } from 'date-fns';
import { FileInfo } from '../../api/models';

export type FileCardProps = Pick<
  FileInfo,
  'fileName' | 'href' | 'size' | 'createdAt' | 'updatedAt'
>;

const cardProps: CardProps = { elevation: 3, sx: { height: 'fit-content' } };
const pStyle = {
  margin: 0,
  fontWeight: 300,
};
const strongStyle = {
  fontWeight: pStyle.fontWeight + 100,
};

export function FileCard({
  fileName,
  href,
  size,
  createdAt,
  updatedAt,
}: FileCardProps) {
  const createdStr = format(createdAt, 'yyyy/MM/dd');
  const updatedStr = format(updatedAt, 'yyyy/MM/dd');
  const cardHeaderProps: CardHeaderProps = {
    title: (
      <>
        <FileCopyIcon />
      </>
    ),
    action: (
      <Link role="link" href={href} target="_blank">
        <FileDownloadIcon />
      </Link>
    ),
  };

  return (
    <Card {...cardProps}>
      <CardHeader {...cardHeaderProps} />
      <CardContent>
        <p style={pStyle}>
          filename: <strong style={strongStyle}>{fileName}</strong>
        </p>
        <p style={pStyle}>
          size: <strong style={strongStyle}>{size}</strong>
        </p>
        <p style={pStyle}>
          createdAt: <strong style={strongStyle}>{createdStr}</strong>
        </p>
        <p style={pStyle}>
          updatedAt: <strong style={strongStyle}>{updatedStr}</strong>
        </p>
      </CardContent>
    </Card>
  );
}
