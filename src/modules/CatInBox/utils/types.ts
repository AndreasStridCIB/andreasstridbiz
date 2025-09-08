export enum MediaSectionPages {
  PHOTOS = "Photos",
  THUMBNAILS = "Thumbnails",
  VIDEO = "Videos",
}

export enum DesignSectionPages {
  LOGOS = "Logos",
  DRAWINGS = "Drawings",
  UX_DESIGN = "UX-Design",
}

export interface NavBarItem {
  label: string;
  url: string;
  yCoordinate?: number;
  isActive?: boolean;
}
