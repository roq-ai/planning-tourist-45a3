import { GetQueryInterface } from 'interfaces';

export interface BusinessHoursInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface BusinessHoursGetQueryInterface extends GetQueryInterface {
  id?: string;
}
