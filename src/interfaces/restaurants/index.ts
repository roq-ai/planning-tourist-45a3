import { GetQueryInterface } from 'interfaces';

export interface RestaurantsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface RestaurantsGetQueryInterface extends GetQueryInterface {
  id?: string;
}
