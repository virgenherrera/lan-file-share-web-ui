import { render, screen } from '@testing-library/react';
import { RootName } from '../../common/components';
import { App } from './app.component';

describe(`UT: <${App.name} />`, () => {
  const enum should {
    haveDefaultBreadcrumb = 'Should contain text as header and "Home" as default breadcrumb.',
  }

  it(should.haveDefaultBreadcrumb, async () => {
    const expectedHeader = 'Lan File Share';

    render(<App />);

    expect(screen.getByText(RootName)).toBeInTheDocument();
    expect(screen.getByText(expectedHeader)).toBeInTheDocument();
  });
});
