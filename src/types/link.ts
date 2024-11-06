import type { IconElement } from './icon';

export type LinkType = {
  name: string;
  href: string;
  external?: boolean;
  color?: string;
  id?: string;
};

export type LinkTypeWithIcon = LinkType & {
  icon?: IconElement;
  iconAlignment?: 'leading' | 'trailing';
};

export type SocialLinkType = string | LinkTypeWithIcon;
