import { jsx as _jsx } from "react/jsx-runtime";
import './App.css';
import Bag from './lib/Bag';
function App() {
    return (_jsx("div", { children: _jsx(Bag, { children: _jsx("div", { children: "dd" }) }) }));
}
export default App;
