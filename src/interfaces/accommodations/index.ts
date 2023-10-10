import { GetQueryInterface } from 'interfaces';

export interface AccommodationsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface AccommodationsGetQueryInterface extends GetQueryInterface {
  id?: string;
}
