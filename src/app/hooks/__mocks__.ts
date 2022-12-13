import * as UsePathHookModule from './use-path.hook';

export const mockUsePathHookModule: Record<
  keyof typeof UsePathHookModule,
  any
> = {
  usePath: jest.fn(),
};

jest.mock('./use-path.hook', () => mockUsePathHookModule);
