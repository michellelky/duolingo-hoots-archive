import { BrowserRouter, Routes, Route } from "react-router-dom";
import HootList from "./pages/HootList";
import HootSession from "./pages/HootSession";

export default function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route index element={<HootList />} />
        <Route path="session" element={<HootSession />}>
          <Route path=":date" element={<HootSession />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
