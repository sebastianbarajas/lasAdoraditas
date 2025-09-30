import { locations } from "@/data";
import Menu from "./Menu";
import { getImageUrl } from "@/lib/utils";
import { useState } from "react";

const MenuPageHome = () => {
  const [sucursalNumber, setSucursalNumber] = useState("");

  const onLocationChange = (value: string) => {
    setSucursalNumber(value);
  };
  return (
    <main>
      <Menu
        logo={getImageUrl("/logo.svg")}
        locations={locations}
        href={`${import.meta.env.BASE_URL}menu-adoraditas`}
        menuSpan="NAVEGA POR EL MENÚ"
        onLocationChange={onLocationChange}
        sucursalNumber={sucursalNumber}
      />
    </main>
  );
};
export default MenuPageHome;
