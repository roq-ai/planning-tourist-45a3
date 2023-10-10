import queryString from 'query-string';
import { TouristAttractionsInterface, TouristAttractionsGetQueryInterface } from 'interfaces/tourist-attractions';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTouristAttractions = async (
  query?: TouristAttractionsGetQueryInterface,
): Promise<PaginatedInterface<TouristAttractionsInterface>> => {
  return fetcher('/api/tourist-attractions', {}, query);
};

export const createTouristAttractions = async (touristAttractions: TouristAttractionsInterface) => {
  return fetcher('/api/tourist-attractions', { method: 'POST', body: JSON.stringify(touristAttractions) });
};

export const updateTouristAttractionsById = async (id: string, touristAttractions: TouristAttractionsInterface) => {
  return fetcher(`/api/tourist-attractions/${id}`, { method: 'PUT', body: JSON.stringify(touristAttractions) });
};

export const getTouristAttractionsById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/tourist-attractions/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteTouristAttractionsById = async (id: string) => {
  return fetcher(`/api/tourist-attractions/${id}`, { method: 'DELETE' });
};
