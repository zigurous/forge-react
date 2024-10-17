import type { SVGIcon } from './icon';

export type LinkType = {
  color?: string;
  external?: boolean;
  id?: string;
  name: string;
  to: string;
};

export type LinkTypeWithIcon = LinkType & {
  icon?: string | SVGIcon;
  iconAlignment?: 'left' | 'right';
};

export type SocialLinkType = string | LinkTypeWithIcon;
