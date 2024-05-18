const prismic = require("@prismicio/client");
const sm = require("./slicemachine.config.json");


/** @returns {Promise<import('next').NextConfig>} */

module.exports = async () => {
  const client = prismic.createClient(sm.repositoryName);

  // const repository = await client.getRepository();
  // const locales = repository.languages.map((lang) => lang.id);
  // console.log("locales", locales);  

  return {
    reactStrictMode: true,
    swcMinify: true,
  };
};