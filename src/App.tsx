import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrintHeader from "./components/print-header/print-header";
import PrintFooter from "./components/print-footer/print-footer";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/header" element={<PrintHeader />} />
        <Route path="/footer" element={<PrintFooter />} />
      </Routes>
    </Router>
  );
};

export default App;
