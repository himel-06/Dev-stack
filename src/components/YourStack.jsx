function YourStack({ stack, handleRemove, handleRemoveAll }) {
  return (
    <div className="w-full lg:w-72 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm lg:sticky lg:top-24">
      <h3 className="text-lg font-semibold">Your Stack</h3>
      <p className="text-sm text-gray-400 mb-4">{stack.length} Technology Selected</p>

      
      {stack.length === 0 && (
        <p className="text-sm text-gray-400 text-center border border-dashed border-gray-300 rounded-lg py-8 px-4">
          No technology selected yet. Click "Add to Stack" to add one.
        </p>
      )}

     
      <div className="flex flex-col gap-2">
        {stack.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 border border-gray-200 rounded-lg px-3 py-2"
          >
            <img src={item.icon} alt={item.name} className="w-6 h-6" />
            <div className="flex-1">
              <p className="text-sm font-semibold">{item.name}</p>
              <p className="text-xs text-gray-400">{item.category}</p>
            </div>
            <button
              onClick={() => handleRemove(item.id)}
              className="text-gray-400 hover:text-black"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {stack.length > 0 && (
        <button
          onClick={handleRemoveAll}
          className="mt-6 w-full border border-red-400 text-red-600 py-2 rounded-md text-sm hover:bg-red-50"
        >
          Remove All
        </button>
      )}
    </div>
  );
}

export default YourStack;
