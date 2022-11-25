import { render } from '@testing-library/react';
import { ApiException } from '../../api/models';
import { SnackBarBoundary } from './snack-bar.boundary';

describe(`UT: <${SnackBarBoundary.name} />`, () => {
  const enum should {
    renderChildren = 'Should render children properly when children is working fine.',
    renderSnackBar = 'Should render SnackBar Component when children throws.',
  }

  it(should.renderChildren, () => {
    const expectedChildrenText = 'mock title';
    const MockChildrenComponent = () => <h1>{expectedChildrenText}</h1>;

    const { getByText } = render(
      <SnackBarBoundary>
        <MockChildrenComponent></MockChildrenComponent>
      </SnackBarBoundary>,
    );

    const expectedChildrenTextElement = getByText(expectedChildrenText);

    expect(expectedChildrenTextElement).toBeInTheDocument();
  });

  it(should.renderSnackBar, () => {
    const response = {
      ok: false,
      redirected: false,
      status: 500,
      statusText: 'fake status text',
      type: 'error',
    } as any as Response;
    const apiException = new ApiException(response);

    const MockChildrenComponent = () => {
      throw apiException;
    };

    const { getByText } = render(
      <SnackBarBoundary>
        <MockChildrenComponent></MockChildrenComponent>
      </SnackBarBoundary>,
    );

    const titleElement = getByText(apiException.title);
    const titleTextElement = getByText(apiException.statusText);

    expect(titleElement).toBeInTheDocument();
    expect(titleTextElement).toBeInTheDocument();
  });
});
