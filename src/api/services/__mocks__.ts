export const mockFetchResponse: any = {
  ok: false,
  json: jest.fn(),
};

global.fetch = jest.fn().mockResolvedValue(mockFetchResponse);
