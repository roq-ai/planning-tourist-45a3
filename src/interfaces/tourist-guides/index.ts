import { GetQueryInterface } from 'interfaces';

export interface TouristGuidesInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface TouristGuidesGetQueryInterface extends GetQueryInterface {
  id?: string;
}
