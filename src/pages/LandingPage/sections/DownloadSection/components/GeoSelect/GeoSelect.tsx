import { useContext } from "react";
import { GeoContext } from "../../../../../../app/providers/GeoProvider";
import { MenuItem, Select } from "@mui/material";
import { GEOS } from "../../../../../../shared/config/geo.config";
import styled from "styled-components";

const SelectStyled = styled(Select)`
  && {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    color: #fff;
    width: 289px;
    height: 56px;
    margin-bottom: 60px;

    .MuiSelect-select {
      padding: 12px;
      color: #bababa;
      text-align: left;
    }

    .MuiSvgIcon-root {
      fill: #bababa;
    }
  }
`;

export const GeoSelect = () => {
  const { geo, setGeo } = useContext(GeoContext);

  return (
    <SelectStyled value={geo} onChange={(e) => setGeo(e.target.value as any)}>
      {GEOS.map((g) => (
        <MenuItem value={g.value}>
          {g.icon} {g.label}
        </MenuItem>
      ))}
    </SelectStyled>
  );
};
