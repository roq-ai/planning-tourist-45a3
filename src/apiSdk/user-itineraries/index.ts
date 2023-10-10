import queryString from 'query-string';
import { UserItineraryInterface, UserItineraryGetQueryInterface } from 'interfaces/user-itinerary';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getUserItineraries = async (
  query?: UserItineraryGetQueryInterface,
): Promise<PaginatedInterface<UserItineraryInterface>> => {
  return fetcher('/api/user-itineraries', {}, query);
};

export const createUserItinerary = async (userItinerary: UserItineraryInterface) => {
  return fetcher('/api/user-itineraries', { method: 'POST', body: JSON.stringify(userItinerary) });
};

export const updateUserItineraryById = async (id: string, userItinerary: UserItineraryInterface) => {
  return fetcher(`/api/user-itineraries/${id}`, { method: 'PUT', body: JSON.stringify(userItinerary) });
};

export const getUserItineraryById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/user-itineraries/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteUserItineraryById = async (id: string) => {
  return fetcher(`/api/user-itineraries/${id}`, { method: 'DELETE' });
};
