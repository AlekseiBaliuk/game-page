import { createContext, useState, PropsWithChildren } from "react";
import { Geo, GEO_DEFAULT } from "../../shared/config/geo.config";

export const GeoContext = createContext<{
  geo: Geo;
  setGeo: (g: Geo) => void;
}>({ geo: GEO_DEFAULT, setGeo: () => {} });

export const GeoProvider = ({ children }: PropsWithChildren) => {
  const [geo, setGeo] = useState<Geo>(GEO_DEFAULT);

  return (
    <GeoContext.Provider value={{ geo, setGeo }}>
      {children}
    </GeoContext.Provider>
  );
};
