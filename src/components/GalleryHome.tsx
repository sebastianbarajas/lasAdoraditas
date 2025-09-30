interface GalleryProps {
  images: string[];
}

const GalleryHome = ({ images }: GalleryProps) => {
  return (
    <div className="w-full flex flex-col ">
      {/* Primer bloque */}
      <div className="grid grid-cols-1 sm:grid-cols-2 ">
        <img src={images[0]} alt="Imagen 1" className="w-full h-auto" />
        <img src={images[1]} alt="Imagen 2" className="w-full h-auto " />
      </div>
      <img src={images[2]} alt="Imagen 3" className="w-full h-auto " />

      {/* Segundo bloque */}
      <div className="grid grid-cols-1 sm:grid-cols-2 ">
        <img src={images[3]} alt="Imagen 4" className="w-full h-auto " />
        <img src={images[4]} alt="Imagen 5" className="w-full h-auto " />
      </div>
      <img src={images[5]} alt="Imagen 6" className="w-full h-auto " />
    </div>
  );
};

export default GalleryHome;
