import type { IconElement } from './icon';

export type LinkType = {
  color?: string;
  external?: boolean;
  id?: string;
  name: string;
  to: string;
};

export type LinkTypeWithIcon = LinkType & {
  icon?: IconElement;
  iconAlignment?: 'leading' | 'trailing';
};

export type SocialLinkType = string | LinkTypeWithIcon;
