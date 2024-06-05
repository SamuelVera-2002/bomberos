import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Table from "./components/Table";
import Datagrid from "./components/Datagrid";
import Alert from "./components/Alert";
import AlertService from "./components/AlertService";

const App = () => {
  const [count, setCount] = useState(0);
  const alertService = AlertService();

  useEffect(() => {
    // Ejemplo de showAlert
    alertService.showAlert("info", "¡Alerta de información!");
  }, []);

  return (
    <>
      <div className="bg-slate-200 h-full">
        <Card/>
        <div className="flex flex-col items-center justify-center">
        {alertService.alerts.map((alert, index) => (
          <Alert key={index} {...alert} onClose={() => alertService.hideAlert(index)} />
        ))}
        </div>
        <Table/>
        <Datagrid/>
      </div>
    </>
  );
};

export default App;
