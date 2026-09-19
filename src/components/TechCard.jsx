
const badgeColors = {
  Popular: "bg-sky-50 text-sky-600 border-sky-200",
  Versatile: "bg-green-50 text-green-600 border-green-200",
  Fast: "bg-orange-50 text-orange-600 border-orange-200",
  "Full-Stack": "bg-purple-50 text-purple-600 border-purple-200",
  Standard: "bg-green-50 text-green-600 border-green-200",
  "Top SQL": "bg-blue-50 text-blue-600 border-blue-200",
  Cache: "bg-red-50 text-red-500 border-red-200",
  Ubiquitous: "bg-yellow-50 text-yellow-600 border-yellow-200",
  Essential: "bg-blue-50 text-blue-600 border-blue-200",
  Robust: "bg-sky-50 text-sky-600 border-sky-200",
  Modern: "bg-cyan-50 text-cyan-600 border-cyan-200",
  Containers: "bg-sky-50 text-sky-600 border-sky-200",
};

function TechCard({ tech, isAdded, handleAddToStack }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col shadow-sm">
      <div className="flex justify-between items-start">
        <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
        <span
          className={
            "text-xs border px-3 py-0.5 rounded-full " +
            (badgeColors[tech.badge] || "bg-gray-50 text-gray-600 border-gray-200")
          }
        >
          {tech.badge}
        </span>
      </div>

      <h3 className="text-xl font-semibold mt-4">{tech.name}</h3>
      <p className="text-sm text-gray-500 mt-2 mb-4 flex-1">{tech.description}</p>

      <div className="flex justify-between items-center text-xs border-t border-gray-100 pt-3">
        <span className="bg-gray-100 border border-gray-200 px-2 py-1 rounded">
          {tech.category}
        </span>
        <span className="text-gray-500">{tech.difficulty}</span>
        <span className="font-medium">
          <span className="text-yellow-400">★</span> {tech.rating}
        </span>
      </div>

      <button
        onClick={() => handleAddToStack(tech)}
        disabled={isAdded}
        className={
          "mt-4 w-full py-2.5 rounded-lg text-sm " +
          (isAdded
            ? "bg-green-100 text-green-700 cursor-not-allowed"
            : "bg-gray-900 text-white hover:bg-gray-700")
        }
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}

export default TechCard;
