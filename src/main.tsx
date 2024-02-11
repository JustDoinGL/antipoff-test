import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/styles/index.ts";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter basename={`/antipoff-test/`}>
      <App />
    </BrowserRouter>
  </Provider>
);
