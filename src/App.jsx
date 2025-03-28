import Hero from "./components/Hero";
import LoveSection from "./components/LoveSection";

function App() {
  return (
    <div className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll overflow-x-hidden">
      <Hero />
      <LoveSection />
    </div>
  );
}

export default App;