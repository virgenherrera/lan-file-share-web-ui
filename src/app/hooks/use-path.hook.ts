import { Dispatch, SetStateAction, useState } from 'react';

export interface IPathContext {
  path: string;
  setPath: Dispatch<SetStateAction<string>>;
}

export function usePath(): IPathContext {
  const [path, setPath] = useState<IPathContext['path']>('');

  return { path, setPath };
}
