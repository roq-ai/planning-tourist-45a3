import queryString from 'query-string';
import { LocalCuisineInterface, LocalCuisineGetQueryInterface } from 'interfaces/local-cuisine';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getLocalCuisines = async (
  query?: LocalCuisineGetQueryInterface,
): Promise<PaginatedInterface<LocalCuisineInterface>> => {
  return fetcher('/api/local-cuisines', {}, query);
};

export const createLocalCuisine = async (localCuisine: LocalCuisineInterface) => {
  return fetcher('/api/local-cuisines', { method: 'POST', body: JSON.stringify(localCuisine) });
};

export const updateLocalCuisineById = async (id: string, localCuisine: LocalCuisineInterface) => {
  return fetcher(`/api/local-cuisines/${id}`, { method: 'PUT', body: JSON.stringify(localCuisine) });
};

export const getLocalCuisineById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/local-cuisines/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteLocalCuisineById = async (id: string) => {
  return fetcher(`/api/local-cuisines/${id}`, { method: 'DELETE' });
};
