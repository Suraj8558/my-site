import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { PrismicNextLink } from '@prismicio/next'

import Head from "next/head";
import { isFilled } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { components } from "@/slices";
import { createClient } from "@/prismicio";
import { getLocales } from "./lib/getLocales"

export default function Page({
  page,
  locales
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{page.data.meta_title}</title>
        {isFilled.keyText(page.data.meta_description) ? (
          <meta name="description" content={page.data.meta_description} />
        ) : null}
      </Head>
      {/* <ul>
        {locales.map((locale) => (
          <li key={locale.id}>
            <PrismicNextLink href={locale.url}>{locale.lang_name}</PrismicNextLink>
          </li>
        ))}
      </ul> */}
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}

export async function getStaticProps({ previewData, locale }: GetStaticPropsContext) {
  // The `previewData` parameter allows your app to preview
  // drafts from the Page Builder.
  const client = createClient({ previewData });
  
  // The query fetches the page's data based on the current URL.
  const page = await client.getSingle("home", { lang: locale });  
  const locales = await getLocales(page, client)

  return {  
    props: { page , locales},
    revalidate: 60,
  };
}
