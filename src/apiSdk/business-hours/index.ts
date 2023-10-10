import queryString from 'query-string';
import { BusinessHoursInterface, BusinessHoursGetQueryInterface } from 'interfaces/business-hours';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getBusinessHours = async (
  query?: BusinessHoursGetQueryInterface,
): Promise<PaginatedInterface<BusinessHoursInterface>> => {
  return fetcher('/api/business-hours', {}, query);
};

export const createBusinessHours = async (businessHours: BusinessHoursInterface) => {
  return fetcher('/api/business-hours', { method: 'POST', body: JSON.stringify(businessHours) });
};

export const updateBusinessHoursById = async (id: string, businessHours: BusinessHoursInterface) => {
  return fetcher(`/api/business-hours/${id}`, { method: 'PUT', body: JSON.stringify(businessHours) });
};

export const getBusinessHoursById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/business-hours/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteBusinessHoursById = async (id: string) => {
  return fetcher(`/api/business-hours/${id}`, { method: 'DELETE' });
};
