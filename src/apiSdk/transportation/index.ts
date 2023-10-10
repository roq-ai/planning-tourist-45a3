import queryString from 'query-string';
import { TransportationInterface, TransportationGetQueryInterface } from 'interfaces/transportation';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTransportation = async (
  query?: TransportationGetQueryInterface,
): Promise<PaginatedInterface<TransportationInterface>> => {
  return fetcher('/api/transportation', {}, query);
};

export const createTransportation = async (transportation: TransportationInterface) => {
  return fetcher('/api/transportation', { method: 'POST', body: JSON.stringify(transportation) });
};

export const updateTransportationById = async (id: string, transportation: TransportationInterface) => {
  return fetcher(`/api/transportation/${id}`, { method: 'PUT', body: JSON.stringify(transportation) });
};

export const getTransportationById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/transportation/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteTransportationById = async (id: string) => {
  return fetcher(`/api/transportation/${id}`, { method: 'DELETE' });
};
