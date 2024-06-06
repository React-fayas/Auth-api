import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "../context/ThemeContext";
import { Provider } from "react-redux";

import { store } from "../store/store";

import Home from "../pages/home";
import Setting from "../pages/settingpage";
import Auth from "../pages/auth";
import Counter from "../pages/counter";
import Users from "../pages/users";

const PageRouters = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Auth />} path="/auth" />
            <Route element={<Setting />} path="/setting" />
            <Route element={<Counter />} path="/counter" />
            <Route element={<Users />} path="/users" />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default PageRouters;
