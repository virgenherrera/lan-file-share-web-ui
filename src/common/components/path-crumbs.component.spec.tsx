import { render } from '@testing-library/react';
import { PathCrumbs } from './path-crumbs.component';

describe(`UT: <${PathCrumbs.name} />`, () => {
  const enum should {
    showDefaultHome = 'Should show "HOME" as default path.',
    showPAthSegments = 'Should show provided path segments.',
  }

  it(should.showDefaultHome, () => {
    const expectedPath = 'Home';
    const { getByText } = render(<PathCrumbs />);

    expect(getByText(expectedPath)).toBeTruthy();
  });

  it(should.showPAthSegments, async () => {
    const expectedSegments = ['foo', 'bar', 'baz', 'oof'];
    const path = expectedSegments.join('/');

    const { getByText } = render(<PathCrumbs path={path} />);

    for await (const segment of expectedSegments) {
      expect(getByText(segment)).toBeTruthy();
    }
  });
});
