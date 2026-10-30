export interface VisitorLocation {
  id: string;
  label: string;
  timeZone: string;
  latitude: number;
  longitude: number;
}

export interface VisitorWidgetContent {
  locations: readonly VisitorLocation[];
}
