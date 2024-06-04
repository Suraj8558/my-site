require('dotenv').config();
const prismic = require("@prismicio/client");
const sm = require("./slicemachine.config.json");
const redirections = require('./public/redirect.json');



/** @returns {Promise<import('next').NextConfig>} */
  const PRISMIC_MASTER_ACCESS_TOKEN = process.env.PRISMIC_MASTER_ACCESS_TOKEN
module.exports = async () => {
  // const client = prismic.createClient(sm.repositoryName);
  const client = prismic.createClient(sm.repositoryName, {
    accessToken: PRISMIC_MASTER_ACCESS_TOKEN,

  });

  const repository = await client.getRepository();
  const locales = repository.languages.map((lang) => lang.id);
  console.log("locales", locales);  

  return {
    reactStrictMode: true,
    swcMinify: true,
    env:{
      PRISMIC_MASTER_ACCESS_TOKEN: process.env.PRISMIC_MASTER_ACCESS_TOKEN
    },
    i18n: {
      locales,
      // This is the default locale. It will not be included in URLs.
      defaultLocale: locales[0],
    },
    async redirects() {
      return redirections;
    },
    
  };
};