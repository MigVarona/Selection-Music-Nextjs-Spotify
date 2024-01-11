function Wrap() {
  const imagePaths = [
    "/Daftpunk-homework.jpg",
    "/jamie-xx.jpg",
    "/Ametsub - The Nothings Of The North .jpg",
    "/Amtsub.jpg",
    "/Caribo-Swim.jpg",
    "/Kravisky-Nigthcall.jpg"
  ];

  return (
    <div className="flex justify-center items-center gap-12 mt-20 ml-5 flex-wrap">
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
