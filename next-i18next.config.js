const path = require('path');

/** @type {import('next-i18next').UserConfig} */
module.exports = {
    i18n: {
      defaultLocale: 'fr',
      locales: ['en', 'fr'],
    },
    localePath: path.resolve('./public/locales')
  }