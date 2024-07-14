import React, { useState } from "react";
import { useRouter } from "next/router";
interface Props {
  locales: any;
}
const LanguageSwitcher = ({ locales }: Props) => {
  const router = useRouter();
  const handleChangeLanguage = (event: any) => {
    const locale = event.target.value;

    router.push(router.pathname, router.asPath, { locale });
  };

  console.log("locales", locales);

  const getLangName = (lang: any) => {
    switch (lang) {
      case "en-us":
        return "English";
      case "de-de":
        return "Franch";
      case "es-co":
        return "Spanish";
      case "hi-in":
        return "Hindi";
    }
  };

  const openMenu = () => {
      
  }

  return (
    <div>
      {
        <select
          style={{ maxWidth: "120px", marginLeft: "10px" }}
          value={getLangName(router.locale)}
          onChange={handleChangeLanguage}
        >
          {locales.map((item: any, index: number) => (
            <option key={index} value={item?.lang}>
              {getLangName(item?.lang)}
            </option>
          ))}
        </select>
      }
    </div>
  );
};
export default LanguageSwitcher;
