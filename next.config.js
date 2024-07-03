const prismic = require("@prismicio/client");
const sm = require("./slicemachine.config.json")


/** @returns {Promise<import('next').NextConfig>} */
const routes = [
  // Examples:
  {
    type: "home",
    path: '/:lang?',
  },
  {
    type: "page",
    path: '/:lang?/:uid',
  },
]
module.exports = async () => {
  const client = prismic.createClient(sm.repositoryName , {
    accessToken: 'MC5aa21QSkJJQUFDb0Exd3lV.77-9d--_ve-_vTvvv71L77-977-9E--_ve-_ve-_vUDvv73vv70Z77-977-9W--_ve-_ve-_vTMJ77-977-9Bu-_ve-_vTXvv70',
    routes
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
  };
};