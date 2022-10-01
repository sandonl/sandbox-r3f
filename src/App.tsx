import Header from "./components/Header";
import { ThreeScene } from "./components/ThreeScene";

const App = () => {
  return (
    <>
      <Header />
      <div className="h-screen">
        <ThreeScene />
      </div>
    </>
  );
};

export default App;
