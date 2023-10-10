import { GetQueryInterface } from 'interfaces';

export interface UserReviewsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface UserReviewsGetQueryInterface extends GetQueryInterface {
  id?: string;
}
