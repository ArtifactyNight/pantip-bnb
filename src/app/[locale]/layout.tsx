import "@/styles/global.css";

import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { Sarabun } from "next/font/google";

import { AppConfig } from "@/utils/AppConfig";
import { SiteHeader } from "@/components/site-header";
import StoreProvider from "@/components/store-provider";

export const metadata: Metadata = {
  icons: [
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
};

const font = Sarabun({
  subsets: ["latin", "thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export function generateStaticParams() {
  return AppConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(props.params.locale);

  // Using internationalization in Client Components
  const messages = useMessages();

  return (
    <html lang={props.params.locale}>
      <body className={font.className}>
        <NextIntlClientProvider
          locale={props.params.locale}
          messages={messages}
        >
          <StoreProvider>
            <SiteHeader />
            {props.children}
          </StoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
