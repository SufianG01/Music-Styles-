import "./App.css";
import { LeftMenu } from "./Components/LeftMenu";
import { MainConatiner } from "./Components/MainConatiner";
import { RightMenu } from "./Components/RightMenu";

function App() {
  return (
    <div className="App">
      <LeftMenu />
      <MainConatiner />
      <RightMenu />

      <div className="background"></div>
    </div>
  );
}

export default App;
