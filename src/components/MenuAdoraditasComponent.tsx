import CardMenu from "./CardMenu";

interface Sandwich {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
}

interface Props {
  items: Sandwich[];
  sucursalNumber: string;
}

const MenuAdoraditasComponent = ({ items, sucursalNumber }: Props) => {
  return (
    <div className="xl:py-32 xl:px-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-white">
      {items.map(({ id, title, description, price, image }) => (
        <CardMenu
          id={id}
          title={title}
          description={description}
          price={price}
          image={image}
          sucursalNumber={sucursalNumber}
        />
      ))}
    </div>
  );
};

export default MenuAdoraditasComponent;
