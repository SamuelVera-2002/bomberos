import React, { useState } from "react";

const AlertService = () => {
  const [alerts, setAlerts] = useState([]);

  const showAlert = (type, message) => {
    setAlerts((prevAlerts) => [...prevAlerts, { type, message }]);
  };

  const hideAlert = (index) => {
    setAlerts((prevAlerts) => prevAlerts.filter((_, i) => i !== index));
  };

  return {
    showAlert, hideAlert, alerts,
  };
};

export default AlertService;
