import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./Categories";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
