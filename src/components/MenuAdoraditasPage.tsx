import { adoraditas, itemsMenuFood, locations } from "@/data";
import HeaderMenuFood from "./HeaderMenuFood";
import Menu from "./Menu";
import MenuAdoraditasComponent from "./MenuAdoraditasComponent";
import { useState } from "react";

const MenuAdoraditasPage = () => {
  const [sucursalNumber, setSucursalNumber] = useState("");

  const onLocationChange = (value: string) => {
    setSucursalNumber(value);
  };
  return (
    <main>
      <Menu
        logo={"/logo.svg"}
        locations={locations}
        href="/"
        menuSpan="VOLVER AL INICIO"
        onLocationChange={onLocationChange}
        sucursalNumber={sucursalNumber}
      />
      <HeaderMenuFood items={itemsMenuFood} />
      <MenuAdoraditasComponent
        items={adoraditas}
        sucursalNumber={sucursalNumber}
      />
    </main>
  );
};
export default MenuAdoraditasPage;
