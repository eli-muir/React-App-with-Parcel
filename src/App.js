import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div>
      <h1>My React App</h1>
    </div>
  );
};


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);