import { render, screen } from '@testing-library/react';
import { Copyright } from './copyright.component';

describe(`UT: <${Copyright.name} />`, () => {
  const enum should {
    openInBlank = 'Should open anchor in Blank.',
  }

  it(should.openInBlank, () => {
    render(<Copyright />);

    const aElement = screen.getByText('H.V.').closest('a');

    expect(aElement).toHaveAttribute(
      'href',
      'https://github.com/virgenherrera',
    );
    expect(aElement).toHaveAttribute('target', '_blank');
  });
});
