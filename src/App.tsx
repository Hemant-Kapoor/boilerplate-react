import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrintHeader from "./components/print-header/print-header";
import PrintFooter from "./components/print-footer/print-footer";
import Spinner from "./components/spinner/Spinner";

const App: React.FC = () => {
  return (
    <Suspense fallback={<Spinner size="large" color="#007bff" />}>
      <Router>
        <Routes>
          <Route path="/" element={ <Spinner size="large" color="#007bff" />} />
          <Route path="/header" element={<PrintHeader />} />
          <Route path="/footer" element={<PrintFooter />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
