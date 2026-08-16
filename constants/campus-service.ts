export type ServiceStatus = 'open' | 'closed' | 'limited';

export type CampusService = {
  id: string;
  name: string;
  status: ServiceStatus;
  waitTimeMinutes?: number;
  locations: string[];
};

export function getServiceDisplayText(service: CampusService): string {
  const locationsText =
    service.locations.length > 0 ? service.locations.join(', ') : 'No locations listed';

  if (service.status === 'open') {
    const waitText =
      service.waitTimeMinutes !== undefined
        ? ` - Wait: ${service.waitTimeMinutes} min`
        : '';
    return `${service.name} (Open)${waitText} | Locations: ${locationsText}`;
  }

  if (service.status === 'limited') {
    return `${service.name} (Limited service) | Locations: ${locationsText}`;
  }

  return `${service.name} (Closed) | Locations: ${locationsText}`;
}