import { BrowserRouter, Routes, Route } from "react-router-dom";
import HootList from "./pages/HootList";
import HootSession from "./pages/HootSession";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HootList />} />
        <Route path="session" element={<HootSession />}>
          <Route path=":date" element={<HootSession />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
