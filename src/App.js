
import './App.css';
import ClassedeComponente from './components/welcome/ClassedeComponente';
import FuncaodeComponente from './components/welcome/FuncaodeComponente';
import FuncaoAnonima from './components/welcome/FuncaoAnonima';
import HelloWord from "./components/welcome/HelloWord"
import InLine from './components/welcome/InLine';
import ForProps from './components/welcome/ForProps';
import ForFunctionProps from './components/welcome/ForFunctionProps';
import Interpolacao from './components/welcome/Interpolacao';
import Ternary from './components/welcome/Ternary';
import Randow from './components/welcome/Randow';


function App() {
  return (
    <div className="App">
      <HelloWord></HelloWord>
      <FuncaodeComponente/>
      <ClassedeComponente/>
      <FuncaoAnonima/>
      <InLine/>
      <Interpolacao />
      <ForProps name="word"/>
      <ForFunctionProps name="Word" />
      <Ternary />
      <Randow />
    </div>
  );
}

export default App;
