const mapping: Record<string, string> = {
  accommodations: 'accommodations',
  businesses: 'business',
  'business-hours': 'business_hours',
  'local-cuisines': 'local_cuisine',
  restaurants: 'restaurants',
  'tourist-attractions': 'tourist_attractions',
  'tourist-guides': 'tourist_guides',
  transportation: 'transportation',
  users: 'user',
  'user-itineraries': 'user_itinerary',
  'user-preferences': 'user_preferences',
  'user-reviews': 'user_reviews',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
