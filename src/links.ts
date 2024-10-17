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
    to: 'https://discord.gg/DdYyWVb',
    icon: socialIcons.discord,
    external: true,
  },
  email: {
    id: 'email',
    name: 'Email',
    to: 'mailto:support@zigurous.com',
    icon: socialIcons.email,
    external: true,
  },
  facebook: {
    id: 'facebook',
    name: 'Facebook',
    color: '#1877f2',
    to: 'https://facebook.com/zigurous',
    icon: socialIcons.facebook,
    external: true,
  },
  github: {
    id: 'github',
    name: 'GitHub',
    to: 'https://github.com/zigurous',
    icon: socialIcons.github,
    external: true,
  },
  instagram: {
    id: 'instagram',
    name: 'Instagram',
    color: '#e4405f',
    to: 'https://instagram.com/zigurous',
    icon: socialIcons.instagram,
    external: true,
  },
  patreon: {
    id: 'patreon',
    name: 'Patreon',
    color: '#ff424d',
    to: 'https://patreon.com/zigurous',
    icon: socialIcons.patreon,
    external: true,
  },
  paypal: {
    id: 'paypal',
    name: 'PayPal',
    color: '#00457c',
    to: 'https://paypal.com/donate?hosted_button_id=BGS8Y9U798JS8',
    icon: socialIcons.paypal,
    external: true,
  },
  twitch: {
    id: 'twitch',
    name: 'Twitch',
    color: '#9146ff',
    to: 'https://twitch.tv/zigurous',
    icon: socialIcons.twitch,
    external: true,
  },
  twitter: {
    id: 'twitter',
    name: 'Twitter',
    color: '#1da1f2',
    to: 'https://twitter.com/zigurous',
    icon: socialIcons.twitter,
    external: true,
  },
  unity: {
    id: 'unity',
    name: 'Unity',
    to: 'https://assetstore.unity.com/publishers/51884',
    icon: socialIcons.unity,
    external: true,
  },
  youtube: {
    id: 'youtube',
    name: 'YouTube',
    color: '#ff0000',
    to: 'https://youtube.com/c/zigurous?sub_confirmation=1',
    icon: socialIcons.youtube,
    external: true,
  },
};
