import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { PrismicNextLink } from '@prismicio/next'

import Head from "next/head";
import { isFilled } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { components } from "@/slices";
import { createClient } from "@/prismicio";
import  Layout from '../components/layouts/Layout';
import Banner from '../components/HeroSection/Banner'
import { AppProps } from 'next/dist/shared/lib/router/router';


export default function Page({
  page,
  header,
  // locales
}: AppProps) {
  
  return (
    <>
      {/* <Head>
        <title>{page.data.meta_title}</title>
        {isFilled.keyText(page.data.meta_description) ? (
          <meta name="description" content={page.data.meta_description} />
        ) : null}
      </Head> */}
      {/* <ul>
        {locales.map((locale) => (
          <li key={locale.id}>
            <PrismicNextLink href={locale.url}>{locale.lang_name}</PrismicNextLink>
          </li>
        ))}
      </ul> */}
      <Layout showFooter={true} header={header}> 
        {/* <Banner /> */}
        <SliceZone slices={page.data.slices} components={components} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ previewData, locale }: GetStaticPropsContext) {
  const client = createClient({ previewData });
  
  // The query fetches the page's data based on the current URL.
  const page = await client.getSingle("home"); 
  const header =  await client.getSingle("navigation", { fetchLinks: 'menu.menus' }); 

  // const locales = await getLocales(page, client)

  return {  
    props: {
      page,
      header : header?.data,
    },
    revalidate: 60,
  };
}
