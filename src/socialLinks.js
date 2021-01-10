import PropTypes from 'prop-types';
import {
  discord,
  email,
  facebook,
  github,
  instagram,
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
  twitter: {
    key: 'twitter',
    name: 'Twitter',
    color: '#1da1f2',
    url: 'https://twitter.com/Zigurous',
    icon: twitter,
  },
  youtube: {
    key: 'youtube',
    name: 'YouTube',
    color: '#ff0000',
    url: 'https://www.youtube.com/c/Zigurous',
    icon: youtube,
  },
  discord: {
    key: 'discord',
    name: 'Discord',
    color: '#7289da',
    url: 'https://discord.gg/DdYyWVb',
    icon: discord,
  },
  twitch: {
    key: 'twitch',
    name: 'Twitch',
    color: '#9146ff',
    url: 'https://www.twitch.tv/zigurous',
    icon: twitch,
  },
  instagram: {
    key: 'instagram',
    name: 'Instagram',
    color: '#e4405f',
    url: 'https://www.instagram.com/zigurous/',
    icon: instagram,
  },
  facebook: {
    key: 'facebook',
    name: 'Facebook',
    color: '#1877f2',
    url: 'https://www.facebook.com/Zigurous',
    icon: facebook,
  },
  github: {
    key: 'github',
    name: 'GitHub',
    color: '#191717',
    url: 'https://github.com/zigurous',
    icon: github,
  },
  unity: {
    key: 'unity',
    name: 'Unity',
    color: '#000000',
    url: 'https://assetstore.unity.com/publishers/51884?preview=1',
    icon: unity,
  },
  paypal: {
    key: 'paypal',
    name: 'PayPal',
    color: '#00457c',
    url: 'https://www.paypal.com/donate?hosted_button_id=BGS8Y9U798JS8',
    icon: paypal,
  },
  email: {
    key: 'email',
    name: 'Email',
    color: '#808080',
    url: 'mailto:support@zigurous.com',
    icon: email,
  },
};

export default socialLinks;
