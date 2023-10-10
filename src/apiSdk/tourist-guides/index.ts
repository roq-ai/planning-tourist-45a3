import queryString from 'query-string';
import { TouristGuidesInterface, TouristGuidesGetQueryInterface } from 'interfaces/tourist-guides';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTouristGuides = async (
  query?: TouristGuidesGetQueryInterface,
): Promise<PaginatedInterface<TouristGuidesInterface>> => {
  return fetcher('/api/tourist-guides', {}, query);
};

export const createTouristGuides = async (touristGuides: TouristGuidesInterface) => {
  return fetcher('/api/tourist-guides', { method: 'POST', body: JSON.stringify(touristGuides) });
};

export const updateTouristGuidesById = async (id: string, touristGuides: TouristGuidesInterface) => {
  return fetcher(`/api/tourist-guides/${id}`, { method: 'PUT', body: JSON.stringify(touristGuides) });
};

export const getTouristGuidesById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/tourist-guides/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteTouristGuidesById = async (id: string) => {
  return fetcher(`/api/tourist-guides/${id}`, { method: 'DELETE' });
};
