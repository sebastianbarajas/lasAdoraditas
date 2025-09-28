interface HeaderMenuFoodProps {
  items: {
    title: string;
    href: string;
    bgImage: string;
  }[];
}

const HeaderMenuFood = ({ items }: HeaderMenuFoodProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full">
      {items.map((item, i) => (
        <a
          key={i}
          href={item.href}
          className="group relative flex items-center justify-center h-[200px] overflow-hidden text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center hover:text-black transition duration-300"
        >
          {/* Imagen de fondo */}
          <img
            src={item.bgImage}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay de color con transparencia */}
          <div className="absolute inset-0 bg-red-500 opacity-50 transition duration-300 group-hover:bg-yellow-400 group-hover:opacity-80"></div>

          {/* Texto */}
          <span className="relative z-10 block underline">{item.title}</span>
        </a>
      ))}
    </div>
  );
};

export default HeaderMenuFood;
