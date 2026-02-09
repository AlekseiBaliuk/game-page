import { useContext } from "react";
import { GeoContext } from "../../app/providers/GeoProvider";
import { t } from "../../i18n";
import en from "../../i18n/en";

export const useTranslate = () => {
  const { geo } = useContext(GeoContext);

  const translate = (key: keyof typeof en) => t(geo, key);

  return translate;
};
