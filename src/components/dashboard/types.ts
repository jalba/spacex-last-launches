export interface Launch {
  mission_name: string;
  launch_date_unix: number;
  details: string | null;
  id: string;
}

export interface LaunchesData {
  launchesPast: Launch[];
}
