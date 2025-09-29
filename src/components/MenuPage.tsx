import { itemsMenuFood, locations } from "@/data";
import HeaderMenuFood from "./HeaderMenuFood";
import Menu from "./Menu";
import MenuAdoraditasComponent from "./MenuAdoraditasComponent";
import { useState } from "react";

interface Sandwich {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
}
interface Props {
  itemsMenu: Sandwich[];
}
const MenuPage = (itemsMenu: Props) => {
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
        itemsMenu={itemsMenu.itemsMenu}
        sucursalNumber={sucursalNumber}
      />
    </main>
  );
};
export default MenuPage;
