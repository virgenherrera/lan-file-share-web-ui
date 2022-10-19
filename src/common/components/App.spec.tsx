import { render, screen } from '@testing-library/react';
import { App } from './App';

describe(`UT: <${App.name} />`, () => {
  const enum should {
    haveDefaultBreadcrumb = 'Should contain Home as default breadcrumb.',
  }

  it(should.haveDefaultBreadcrumb, async () => {
    const expectedTitle = 'Home';
    const { getByText } = render(<App />);

    expect(getByText(expectedTitle)).toBeTruthy();
    expect(screen.getByText(expectedTitle)).toBeTruthy();
  });
});
