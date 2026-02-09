import { Geo } from "../shared/config/geo.config";
import de from "./de";
import en from "./en";

export const translations = { en, de };

export const t = (geo: Geo, key: keyof typeof en) => translations[geo][key];
