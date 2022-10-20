import { render, screen } from '@testing-library/react';
import { format } from 'date-fns';
import { FileCard, FileCardProps } from './file-card.component';

describe(`UT: <${FileCard.name} />`, () => {
  const enum should {
    showFileCardInfo = "Should show card info with all it's data",
  }

  it(should.showFileCardInfo, () => {
    const fileCardProps: FileCardProps = {
      fileName: 'foo.ext',
      href: '/foo.ext',
      size: '15 Mb',
      createdAt: new Date('2022/10/20'),
      updatedAt: new Date('2022/11/15'),
    };

    render(<FileCard {...fileCardProps} />);

    const fileNameElement = screen.getByText(fileCardProps.fileName);
    const aElement = screen.getByText('', { selector: 'a' });
    const sizeElement = screen.getByText(fileCardProps.size);
    const createdAtElement = screen.getByText(
      `${format(fileCardProps.createdAt, 'yyyy/MM/dd')}`,
      { exact: false },
    );
    const updatedAtElement = screen.getByText(
      `${format(fileCardProps.updatedAt, 'yyyy/MM/dd')}`,
      { exact: false },
    );

    expect(fileNameElement).toBeTruthy();
    expect(aElement).toBeTruthy();
    expect(aElement).toHaveAttribute('href', fileCardProps.href);
    expect(sizeElement).toBeTruthy();
    expect(createdAtElement).toBeTruthy();
    expect(updatedAtElement).toBeTruthy();
  });
});
