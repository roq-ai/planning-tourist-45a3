import { GetQueryInterface } from 'interfaces';

export interface TouristAttractionsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface TouristAttractionsGetQueryInterface extends GetQueryInterface {
  id?: string;
}
