const LinearGradient = () => {
  return (
    <>
      <div
        className="absolute h-full w-1/4 top-0 left-0 z-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, #181818 20%, transparent)",
        }}
      ></div>
      <div
        className="absolute h-full w-1/4 top-0 right-0 z-10"
        style={{
          backgroundImage: "linear-gradient(to left, #181818 20%, transparent)",
        }}
      ></div>
    </>
  );
};

export default LinearGradient;
