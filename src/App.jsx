import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TechCard from "./components/TechCard";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

function App() {
  // all technologies from the json file
  const [technologies, setTechnologies] = useState([]);
  // technologies the user added to the stack
  const [stack, setStack] = useState([]);

  // load data from public/technologies.json
  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => setTechnologies(data))
      .catch((err) => console.log("Error loading data", err));
  }, []);

  function handleAddToStack(tech) {
    // check if it is already added
    const alreadyAdded = stack.find((item) => item.id === tech.id);

    if (alreadyAdded) {
      alert(tech.name + " is already in your stack!");
      return;
    }

    setStack([...stack, tech]);
  }

  function handleRemove(id) {
    const newStack = stack.filter((item) => item.id !== id);
    setStack(newStack);
  }

  function handleRemoveAll() {
    setStack([]);
  }

  return (
    <div>
      <Navbar />
      <Banner />

      <section id="technologies" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          Explore the{" "}
          <span className="bg-linear-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="text-gray-500 mt-2 mb-8">
          Pick one technology per category to build your ideal stack.
        </p>

        {/* on small screens the stack is on top, on large screens it goes to the right */}
        <div className="flex flex-col lg:flex-row-reverse gap-6 items-start">
          <YourStack
            stack={stack}
            handleRemove={handleRemove}
            handleRemoveAll={handleRemoveAll}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 flex-1">
            {technologies.map((tech) => (
              <TechCard
                key={tech.id}
                tech={tech}
                isAdded={stack.some((item) => item.id === tech.id)}
                handleAddToStack={handleAddToStack}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
