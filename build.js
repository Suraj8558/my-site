require('dotenv').config();
const fs = require('fs');
const prismic = require('@prismicio/client')
const PrismicHelper = require('@prismicio/helpers');

const repoName = 'my-sites'; // Fill in your repository name.
const accessToken = process.env.PRISMIC_MASTER_ACCESS_TOKEN// If your repository is private, add an access token.
const client = prismic.createClient(repoName, {
  fetch,
  accessToken,
});


client
  .getSingle('settings')
  .then((res) => {
    const content = Object.keys(res?.data)?.length > 0 ? res?.data : {};
    console.log("content", content?.slices);
    const Redirection = content?.slices;
    var RedirectionContent = []; 

    // // Get redirections from Prismic setting custom type
    if (Redirection?.length > 0) {
      Redirection.forEach((el) => {
        const oldUrl = el?.primary?.old_link_optional ||  PrismicHelper.asLink(el?.primary?.old_link);
        const newUrl = el?.primary?.new_link_optional ||  PrismicHelper.asLink(el?.primary?.new_link);
        if (!oldUrl || !newUrl) return '';
        // Push redirection objects into the RedirectionContent array
        RedirectionContent.push({
          source: oldUrl,
          destination: newUrl,
          permanent: el?.primary?.status_code == '301' ? true : false,
        });
      });
    }

    // // Convert RedirectionContent to JSON string
    const jsonContent = JSON.stringify(RedirectionContent, null, 2);

    // // Write JSON to the file
    fs.writeFile('./public/redirect.json', jsonContent, function (err) {
      if (err) {
        return console.log(err);
      }
      console.log('The redirect.json file was saved!');
    });
  })
  .catch((error) => {
    console.error('Error fetching Prismic settings:', error.message);
  });
