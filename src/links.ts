import { socialIcons } from './icons';
import type { LinkTypeWithIcon } from './types';

type SocialLinks = {
  [key: string]: LinkTypeWithIcon;
};

export const socialLinks: SocialLinks = {
  discord: {
    id: 'discord',
    name: 'Discord',
    color: '#7289da',
    href: 'https://discord.gg/DdYyWVb',
    icon: socialIcons.discord,
    external: true,
  },
  email: {
    id: 'email',
    name: 'Email',
    href: 'mailto:support@zigurous.com',
    icon: socialIcons.email,
    external: true,
  },
  facebook: {
    id: 'facebook',
    name: 'Facebook',
    color: '#1877f2',
    href: 'https://facebook.com/zigurous',
    icon: socialIcons.facebook,
    external: true,
  },
  github: {
    id: 'github',
    name: 'GitHub',
    href: 'https://github.com/zigurous',
    icon: socialIcons.github,
    external: true,
  },
  instagram: {
    id: 'instagram',
    name: 'Instagram',
    color: '#e4405f',
    href: 'https://instagram.com/zigurous',
    icon: socialIcons.instagram,
    external: true,
  },
  patreon: {
    id: 'patreon',
    name: 'Patreon',
    color: '#ff424d',
    href: 'https://patreon.com/zigurous',
    icon: socialIcons.patreon,
    external: true,
  },
  paypal: {
    id: 'paypal',
    name: 'PayPal',
    color: '#00457c',
    href: 'https://paypal.com/donate?hosted_button_id=BGS8Y9U798JS8',
    icon: socialIcons.paypal,
    external: true,
  },
  twitch: {
    id: 'twitch',
    name: 'Twitch',
    color: '#9146ff',
    href: 'https://twitch.tv/zigurous',
    icon: socialIcons.twitch,
    external: true,
  },
  twitter: {
    id: 'twitter',
    name: 'Twitter',
    color: '#1da1f2',
    href: 'https://twitter.com/zigurous',
    icon: socialIcons.twitter,
    external: true,
  },
  unity: {
    id: 'unity',
    name: 'Unity',
    href: 'https://assetstore.unity.com/publishers/51884',
    icon: socialIcons.unity,
    external: true,
  },
  youtube: {
    id: 'youtube',
    name: 'YouTube',
    color: '#ff0000',
    href: 'https://youtube.com/c/zigurous?sub_confirmation=1',
    icon: socialIcons.youtube,
    external: true,
  },
};
