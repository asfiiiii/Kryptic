function Loader({ message, size }) {
  return (
    <div className="flex justify-center items-center py-3 flex-col gap-3">
      <div
        className={`rounded-full animate-spin ${size} gradient-border`}
      ></div>
      <p className="text-xs text-gray-400 mt-2">{message}</p>
    </div>
  );
}

export default Loader;
