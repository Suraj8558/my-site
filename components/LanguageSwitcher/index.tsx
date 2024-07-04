import React from "react";
import { useRouter } from "next/router";
interface Props {
  locales : any
}
const LanguageSwitcher = ({ locales }: Props) => {
  const router = useRouter();
  const handleChangeLanguage = (event: any) => {
    const locale = event.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  console.log("locales", locales);
  
  return (
    <div>
      <select
        style={{ maxWidth: "120px", marginLeft: "10px" }}
         value={router.locale}
        onChange={handleChangeLanguage}
      >
        {locales.map((item: any, index: number) => (
          <option key={index} value={item?.lang}>
            {item?.lang_name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default LanguageSwitcher;
