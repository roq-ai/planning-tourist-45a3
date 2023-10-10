import { GetQueryInterface } from 'interfaces';

export interface UserItineraryInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface UserItineraryGetQueryInterface extends GetQueryInterface {
  id?: string;
}
