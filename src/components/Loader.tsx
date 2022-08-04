const Loader = () => {
  return (
    <div className="h-screen w-screen bg-black bg-opacity-50 flex justify-center items-center fixed top-0 right-0 left-0">
      <div className="w-24 h-24 rounded-full border-8 border-solid border-slate-400 border-t-red-400 animate-spin"></div>
    </div>
  );
};
export default Loader;
