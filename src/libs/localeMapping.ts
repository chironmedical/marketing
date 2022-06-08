// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const localeMapping = (locale) => {
  const mapping = {
    'zh-HK': 'hk',
    'en-US': 'en',
    'zh-CN': 'cn',
    'hk': 'zh-HK',
    'en': 'en-US',
    'cn': 'zh-CN'
  };

  return mapping[locale] ? mapping[locale] : locale;
};

export default localeMapping;
