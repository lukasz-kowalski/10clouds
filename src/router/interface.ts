import { FC } from 'react';

export interface Route {
  path: string;
  component: FC<any>;
  exact?: boolean;
}
