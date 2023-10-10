import { GetQueryInterface } from 'interfaces';

export interface LocalCuisineInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface LocalCuisineGetQueryInterface extends GetQueryInterface {
  id?: string;
}
