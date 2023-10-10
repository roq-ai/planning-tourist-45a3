import { GetQueryInterface } from 'interfaces';

export interface TransportationInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface TransportationGetQueryInterface extends GetQueryInterface {
  id?: string;
}
