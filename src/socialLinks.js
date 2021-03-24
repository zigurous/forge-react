import PropTypes from 'prop-types';
import {
  discord,
  email,
  facebook,
  github,
  instagram,
  patreon,
  paypal,
  twitch,
  twitter,
  unity,
  youtube,
} from './svg/icons';

export const SocialLinkProps = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.shape({
    key: PropTypes.string,
    name: PropTypes.string,
    color: PropTypes.string,
    url: PropTypes.string,
    icon: PropTypes.element,
  }),
]);

const socialLinks = {
  discord: {
    key: 'discord',
    name: 'Discord',
    color: '#7289da',
    url: 'https://discord.gg/DdYyWVb',
    icon: discord,
  },
  email: {
    key: 'email',
    name: 'Email',
    color: '#808080',
    url: 'mailto:support@zigurous.com',
    icon: email,
  },
  facebook: {
    key: 'facebook',
    name: 'Facebook',
    color: '#1877f2',
    url: 'https://facebook.com/zigurous',
    icon: facebook,
  },
  github: {
    key: 'github',
    name: 'GitHub',
    color: '#191717',
    url: 'https://github.com/zigurous',
    icon: github,
  },
  instagram: {
    key: 'instagram',
    name: 'Instagram',
    color: '#e4405f',
    url: 'https://instagram.com/zigurous',
    icon: instagram,
  },
  patreon: {
    key: 'patreon',
    name: 'Patreon',
    color: '#ff424d',
    url: 'https://patreon.com/zigurous',
    icon: patreon,
  },
  paypal: {
    key: 'paypal',
    name: 'PayPal',
    color: '#00457c',
    url: 'https://paypal.com/donate?hosted_button_id=BGS8Y9U798JS8',
    icon: paypal,
  },
  twitch: {
    key: 'twitch',
    name: 'Twitch',
    color: '#9146ff',
    url: 'https://twitch.tv/zigurous',
    icon: twitch,
  },
  twitter: {
    key: 'twitter',
    name: 'Twitter',
    color: '#1da1f2',
    url: 'https://twitter.com/zigurous',
    icon: twitter,
  },
  unity: {
    key: 'unity',
    name: 'Unity',
    color: '#000000',
    url: 'https://assetstore.unity.com/publishers/51884?preview=1',
    icon: unity,
  },
  youtube: {
    key: 'youtube',
    name: 'YouTube',
    color: '#ff0000',
    url: 'https://youtube.com/c/zigurous?sub_confirmation=1',
    icon: youtube,
  },
};

export default socialLinks;
