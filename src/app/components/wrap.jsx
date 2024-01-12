function Wrap() {
  const imagePaths = [
    "/Artistas/A hundred drums.jpg",
    "/Artistas/Amtsub.jpg",
    "/Artistas/CARIBOU .jpg",
    "/Artistas/jamie-xx.jpg",
    "/Artistas/Kravisnky.png",
    "/Artistas/Logic1000.jpg",
    "/Artistas/Moderat .jpg",
    "/Artistas/Ninajirachi.jpg"
  ];

  return (
    <div className="flex justify-center items-center gap-12 mt-20  flex-wrap mb-10 bg-black">
      {imagePaths.map((path, index) => (
        <img
          key={index}
          style={{ width: '200px', height: '200px' }}
          className="rounded-full"
          src={path}
          alt={`image ${index} description`}
        />
      ))}
    </div>
  );
}

export default Wrap;
