function Loader() {
  return (
    <div className="flex justify-center items-center py-3 flex-col gap-3">
      <div className="rounded-full animate-spin h-10 w-10 gradient-border"></div>
      <p className="text-xs text-gray-400">Transaction being processed</p>
    </div>
  );
}

export default Loader;
