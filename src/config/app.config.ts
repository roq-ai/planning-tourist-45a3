interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member', 'Tour Guide', 'Travel Agent', 'Tourist'],
  tenantName: 'Business',
  applicationName: 'planning tourist places',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View local cuisine', 'View restaurants', 'View transportation options', 'View accommodations'],
  ownerAbilities: [
    'Manage local cuisine',
    'Manage restaurants',
    'Manage transportation',
    'Manage accommodations',
    'Manage tourist guides',
    'Manage user reviews',
    'Manage user preferences',
    'Manage business hours',
    'Manage user itinerary',
    'Manage tourist attractions',
    'Manage users',
    'Manage businesses',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/883657e1-5f2e-411c-bc93-76801a4d5af9',
};
