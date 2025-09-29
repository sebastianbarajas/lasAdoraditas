interface MenuProps {
  logo: string; // URL o import del logo
  locations: locations[]; // ej: { mx: "México", co: "Colombia" }
  onLocationChange?: (value: string) => void;
  sucursalNumber?: string;
  href: string;
  menuSpan: string;
}

interface locations {
  whatsApp: string;
  label: string;
}
const Menu = ({
  logo,
  locations,
  href,
  menuSpan,
  onLocationChange,
  sucursalNumber,
}: MenuProps) => {
  return (
    <header className="w-full bg-yellow-400">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 py-6 gap-3">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img src={logo} alt="Logo" className="w-40 lg:w-56 mx-auto md:mx-0" />
        </a>

        {/* Texto central (solo en md o más grande) */}
        <div className="hidden md:block text-black font-semibold items-center text-center">
          <a className="text-center" href={href}>
            {menuSpan}
          </a>
        </div>

        {/* Bloque derecho */}
        <div className="flex flex-col items-center gap-3 w-full md:w-auto">
          {/* Título */}

          <h2 className="font-extrabold text-black text-lg ">
            ENTREGA A DOMICILIO
          </h2>

          {/* Select con icono */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="bg-red-600 p-3 rounded">
              <img
                src={"../../public/motoIcon.svg"}
                alt="Moto"
                className="w-8 h-8"
              />
            </div>
            <select
              onChange={(e) =>
                onLocationChange && onLocationChange(e.target.value)
              }
              value={sucursalNumber}
              className="flex-1 md:flex-none px-4 py-2 border border-black rounded text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="">Selecciona Sucursal</option>
              {Object.entries(locations).map(([key, location]) => (
                <option key={key} value={location.whatsApp}>
                  {location.label}
                </option>
              ))}
            </select>
          </div>

          {/* Franja verde WhatsApp */}
          <button
            disabled={!sucursalNumber}
            onClick={() => {}}
            className="w-full"
          >
            <button
              disabled={!sucursalNumber}
              onClick={() => {
                if (sucursalNumber) {
                  window.open(
                    `https://wa.me/${sucursalNumber}?text=Hola,%20quiero%20hacer%20un%20pedido`,
                    "_blank"
                  );
                }
              }}
              className={`flex items-center justify-center gap-2 w-full md:w-auto px-4 py-2 rounded font-semibold transition
    ${
      sucursalNumber
        ? "bg-green-500 text-white hover:bg-green-600 cursor-pointer"
        : "bg-gray-300 text-gray-500 cursor-not-allowed"
    }`}
            >
              <img src={"/whatsIcon.svg"} alt="whatsapp" className="w-8 h-8" />
              Elige, ordena y disfruta sin salir de casa
            </button>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Menu;
