interface LinkItem {
  label: string;
  url: string;
}

interface IconItem {
  name: string;
  url: string;
  icon: string; // ruta a imagen svg o png
}

interface FooterProps {
  navLinks: LinkItem[];
  socialLinks: IconItem[];
  deliveryApps: IconItem[];
  legalText: string;
}

const Footer = ({
  navLinks,
  socialLinks,
  deliveryApps,
  legalText,
}: FooterProps) => {
  return (
    <footer className="bg-[#E34524] text-white px-6 py-10 xl:px-52 xl:py-24">
      {/* Contenido principal */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 border-b border-white pb-6">
        {/* Navegación izquierda */}
        <div>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.url}
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Texto legal */}
        <div className="text-sm md:text-right">{legalText}</div>
      </div>

      {/* Redes sociales y apps */}
      <div className="mt-6 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        {/* Redes sociales */}
        <div>
          <h3 className="font-bold mb-3">Redes Sociales</h3>
          <div className="flex gap-4">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="h-6 w-6 object-contain"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Apps de entrega */}
        <div className="flex gap-6">
          {deliveryApps.map((app, idx) => (
            <a
              key={idx}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={app.icon}
                alt={app.name}
                className="h-10 w-10 md:h-12 md:w-12 object-contain rounded-full"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
