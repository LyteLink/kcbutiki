const Watermark = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full h-full flex-center-center">
      <h1 className="text-9xl md:text-[15rem] text-slate-400 opacity-5 font-poppins font-extrabold">
        KCB
      </h1>
    </div>
  );
};

export default Watermark;
