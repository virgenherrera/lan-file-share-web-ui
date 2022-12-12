import { createContext } from 'react';
import { IPathContext } from '../hooks';

export const PathContext = createContext<IPathContext>({
  path: '',
  setPath: (path) => path,
});
export const PathProvider = PathContext.Provider;
export const PathConsumer = PathContext.Consumer;
