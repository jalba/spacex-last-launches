export interface Links {
  article_link: string | null;
  mission_patch_small: string | null;
  video_link: string | null;
  wikipedia: string | null;
}

export interface Launch {
  details: string | null;
  mission_name: string;
  links: Links;
}

export interface LaunchData {
  launch: Launch;
}
