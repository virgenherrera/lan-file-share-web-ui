import { render } from '@testing-library/react';
import { SnackBar } from './snack-bar.component';

describe(`UT: <${SnackBar.name} />`, () => {
  const enum should {
    initialState = 'Should Snackbar be hidden when show flag is false.',
  }

  it(should.initialState, () => {
    const title = 'mock title';
    const message = 'mock message';

    const { getByText } = render(
      <SnackBar title={title} message={message} severity="info" />,
    );

    const expectedTitle = getByText(title);
    const expectedMessage = getByText(message);

    expect(expectedTitle).toBeInTheDocument();
    expect(expectedMessage).toBeInTheDocument();
  });
});
