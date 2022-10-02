import Header from "./components/Header";
import { ThreeScene } from "./components/ThreeScene";

const App = () => {
  return (
    <div className="bg-blue-300">
      <Header />
      <div className="h-screen">
        <ThreeScene />
      </div>
    </div>
  );
};

export default App;
