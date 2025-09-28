interface Branch {
  id: number;
  title: string;
  address: string;
  phones: string[];
  schedule: Schedule[];
  mapUrl: string;
  logo?: string; // opcional
}
interface Schedule {
  days: string;
  hours: string;
}

interface BranchListProps {
  sucursales: Branch[];
}

const Sucursales = ({ sucursales }: BranchListProps) => {
  return (
    <div className="w-full px-4 xl:px-52 md:px-10 py-10 bg-primary-gray">
      <h2 className="text-center text-2xl md:text-4xl font-bold text-red-600 mb-8">
        BUSCA LA SUCURSAL MÁS CERCA DE TI
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {sucursales.map((sucursal) => (
          <div
            key={sucursal.id}
            className="bg-white rounded-lg shadow p-5 flex flex-col justify-between"
          >
            {/* Título */}
            <h3 className="text-lg font-bold mb-2">{sucursal.title}</h3>

            {/* Dirección */}
            <p className="text-sm text-gray-700 mb-2">{sucursal.address}</p>

            {/* Teléfonos */}
            <div className="mb-2">
              {sucursal.phones.map((phone, idx) => (
                <p key={idx} className="flex items-center text-sm">
                  <span className="mr-2">📞</span> {phone}
                </p>
              ))}
            </div>

            {/* Horarios */}
            <div className="text-sm text-gray-600 mb-3">
              {sucursal.schedule.map((line, idx) => (
                <div key={idx} className="mb-3">
                  <p>{line.days}</p>
                  <p>{line.hours}</p>
                </div>
              ))}
            </div>

            {/* Logo opcional */}
            {sucursal.logo && (
              <div className="mt-3">
                <img
                  src={sucursal.logo}
                  alt={`${sucursal.title} logo`}
                  className="h-8 object-contain"
                />
              </div>
            )}
            {/* Link a mapa */}
            <a
              href={sucursal.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 text-sm font-semibold hover:underline"
            >
              Obtener Dirección
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sucursales;
