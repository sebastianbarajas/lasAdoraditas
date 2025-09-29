interface item {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  sucursalNumber: string;
}

const CardMenu = ({
  id,
  title,
  description,
  price,
  image,
  sucursalNumber,
}: item) => {
  return (
    <div key={id} className="flex flex-col bg-white  overflow-hidden">
      {/* Imagen */}
      <img src={image} alt={title} className="w-full h-auto object-cover" />

      {/* Contenido */}
      <div className="flex flex-col flex-grow p-4">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-2 flex-grow">{description}</p>

        {/* Botón */}
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
          className={`mt-4 flex items-center justify-center gap-2 py-2 rounded font-semibold transition
    ${
      sucursalNumber
        ? "bg-green-500 text-white hover:bg-green-600 cursor-pointer"
        : "bg-gray-300 text-gray-500 cursor-not-allowed"
    }`}
        >
          {/* Precio */}
          <span
            className={`text-xl font-bold px-2 py-1 ${
              sucursalNumber ? "text-white" : "text-gray-500"
            }`}
          >
            {price}
          </span>

          {/* Icono WhatsApp */}
          <img
            src={"/whatsIcon.svg"}
            alt="whatsapp"
            className="w-7 h-7 mr-1 opacity-90"
          />

          {/* Texto */}
          <span>Elige, ordena y disfruta</span>
        </button>
      </div>
    </div>
  );
};
export default CardMenu;
