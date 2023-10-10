import queryString from 'query-string';
import { AccommodationsInterface, AccommodationsGetQueryInterface } from 'interfaces/accommodations';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getAccommodations = async (
  query?: AccommodationsGetQueryInterface,
): Promise<PaginatedInterface<AccommodationsInterface>> => {
  return fetcher('/api/accommodations', {}, query);
};

export const createAccommodations = async (accommodations: AccommodationsInterface) => {
  return fetcher('/api/accommodations', { method: 'POST', body: JSON.stringify(accommodations) });
};

export const updateAccommodationsById = async (id: string, accommodations: AccommodationsInterface) => {
  return fetcher(`/api/accommodations/${id}`, { method: 'PUT', body: JSON.stringify(accommodations) });
};

export const getAccommodationsById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/accommodations/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteAccommodationsById = async (id: string) => {
  return fetcher(`/api/accommodations/${id}`, { method: 'DELETE' });
};
