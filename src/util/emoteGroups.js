const groups = [
  {
    paramKey: 'zw',
    home: {
      text: 'Zero-width emotes',
      default: false,
    },
  },
  {
    paramKey: 'channel',
    home: {
      text: 'All channel emotes',
      default: true,
    },
  },
  {
    paramKey: 'global',
    home: {
      text: 'All global emotes',
      default: false,
    },
  },
  {
    service: 'twitch',
    scope: 'channel',
    paramKey: 'twitch',
    home: {
      text: 'Twitch channel emotes',
      default: true,
    },
  },
  {
    service: 'bttv',
    scope: 'global',
    paramKey: 'bttvg',
    home: {
      text: 'BTTV global emotes',
      default: false,
    },
  },
  {
    service: 'bttv',
    scope: 'channel',
    paramKey: 'bttv',
    home: {
      text: 'BTTV channel emotes',
      default: true,
    },
  },
  {
    service: 'ffz',
    scope: 'global',
    paramKey: 'ffzg',
    home: {
      text: 'FFZ global emotes',
      default: false,
    },
  },
  {
    service: 'ffz',
    scope: 'channel',
    paramKey: 'ffz',
    home: {
      text: 'FFZ channel emotes',
      default: true,
    },
  },
  {
    service: '7tv',
    scope: 'global',
    paramKey: '7tvg',
    home: {
      text: '7TV global emotes',
      default: false,
    },
  },
  {
    service: '7tv',
    scope: 'channel',
    paramKey: '7tv',
    home: {
      text: '7TV channel emotes',
      default: true,
    },
  },
];

export default groups;
