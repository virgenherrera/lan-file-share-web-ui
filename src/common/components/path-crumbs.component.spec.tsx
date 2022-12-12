import { render } from '@testing-library/react';
import { PathProvider } from '../../app/context';
import { IPathContext } from '../../app/hooks';
import { PathCrumbs, RootName } from './path-crumbs.component';

describe(`UT: <${PathCrumbs.name} />`, () => {
  const enum should {
    showDefaultHome = 'Should show "HOME" as default path.',
    showPAthSegments = 'Should show provided path segments.',
  }

  it(should.showDefaultHome, () => {
    const pathCtx: IPathContext = {
      path: '',
      setPath: (value) => console.log(value),
    };
    const { getByText } = render(
      <PathProvider value={pathCtx}>
        <PathCrumbs />
      </PathProvider>,
    );

    expect(getByText(RootName)).toBeTruthy();
  });

  it(should.showPAthSegments, async () => {
    const pathCtx: IPathContext = {
      path: 'foo/bar/baz/oof',
      setPath: (value) => console.log(value),
    };
    const { getByText } = render(
      <PathProvider value={pathCtx}>
        <PathCrumbs />
      </PathProvider>,
    );

    expect(getByText(RootName)).toBeTruthy();

    for await (const segment of pathCtx.path.split('/')) {
      expect(getByText(segment)).toBeTruthy();
    }
  });
});
