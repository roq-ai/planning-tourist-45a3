import queryString from 'query-string';
import { RestaurantsInterface, RestaurantsGetQueryInterface } from 'interfaces/restaurants';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getRestaurants = async (
  query?: RestaurantsGetQueryInterface,
): Promise<PaginatedInterface<RestaurantsInterface>> => {
  return fetcher('/api/restaurants', {}, query);
};

export const createRestaurants = async (restaurants: RestaurantsInterface) => {
  return fetcher('/api/restaurants', { method: 'POST', body: JSON.stringify(restaurants) });
};

export const updateRestaurantsById = async (id: string, restaurants: RestaurantsInterface) => {
  return fetcher(`/api/restaurants/${id}`, { method: 'PUT', body: JSON.stringify(restaurants) });
};

export const getRestaurantsById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/restaurants/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteRestaurantsById = async (id: string) => {
  return fetcher(`/api/restaurants/${id}`, { method: 'DELETE' });
};
