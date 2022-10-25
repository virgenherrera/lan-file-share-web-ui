import { render, screen } from '@testing-library/react';
import { App } from './app.component';

describe(`UT: <${App.name} />`, () => {
  const enum should {
    haveDefaultBreadcrumb = 'Should contain text as header and "Home" as default breadcrumb.',
  }

  it(should.haveDefaultBreadcrumb, async () => {
    const expectedHeader = 'Lan File Share';
    const expectedPath = 'Home';

    render(<App />);

    expect(screen.getByText(expectedPath)).toBeInTheDocument();
    expect(screen.getByText(expectedHeader)).toBeInTheDocument();
  });
});
