import queryString from 'query-string';
import { UserReviewsInterface, UserReviewsGetQueryInterface } from 'interfaces/user-reviews';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getUserReviews = async (
  query?: UserReviewsGetQueryInterface,
): Promise<PaginatedInterface<UserReviewsInterface>> => {
  return fetcher('/api/user-reviews', {}, query);
};

export const createUserReviews = async (userReviews: UserReviewsInterface) => {
  return fetcher('/api/user-reviews', { method: 'POST', body: JSON.stringify(userReviews) });
};

export const updateUserReviewsById = async (id: string, userReviews: UserReviewsInterface) => {
  return fetcher(`/api/user-reviews/${id}`, { method: 'PUT', body: JSON.stringify(userReviews) });
};

export const getUserReviewsById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/user-reviews/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteUserReviewsById = async (id: string) => {
  return fetcher(`/api/user-reviews/${id}`, { method: 'DELETE' });
};
