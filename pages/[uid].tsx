import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { isFilled, asLink,  } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { PrismicNextLink,  } from '@prismicio/next'
import { getLocales } from "@/lib/getLocales"
import Link from "next/link";
import { components } from "@/slices";
import { createClient } from "@/prismicio";
import { useEffect, useState } from 'react';
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Layout from "@/components/layouts/Layout";

type Params = { uid: string, locales: any };

export default function Page({
  page,
  locales
}: any) {

  return (
    <>
      <Head>
        <title>{page.data.meta_title}</title>
        {isFilled.keyText(page.data.meta_description) ? (
          <meta name="description" content={page.data.meta_description} />
        ) : null}
      </Head>
      <Layout locales={locales}>
        <SliceZone slices={page?.data?.slices} components={components} />
      </Layout>
    </>
  );
}

export async function getStaticProps({
  params,
  locale,
  previewData,
}: GetStaticPropsContext<Params>) {
  // The `previewData` parameter allows your app to preview
  // drafts from the Page Builder.
  const client = createClient({ previewData });

  const page = await client?.getByUID("page", params!.uid, { lang: locale });
  const locales = await getLocales(page, client)
  return {
    props: { page, locales },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("page", { lang: '*' }); 

  return {
    paths: pages.map((page) => {
      return asLink(page);
    }),
    fallback: 'blocking',
  };
}
