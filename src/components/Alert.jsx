const Alert = ({ type, message, onClose }) => {
  const baseClasses = `p-4 rounded-md border shadow transition-all duration-500`;

  const typeClasses = {
    success: `bg-green-500 text-white from-green-500 to-green-400 w-80`,
    error: `bg-red-500 text-white from-red-500 to-red-400 w-80`,
    info: `bg-blue-500 text-white from-blue-500 to-blue-400 w-80`,
    warning: `bg-yellow-500 text-white from-yellow-500 to-yellow-400 w-80`,
  };

  const enterClasses = `transform-translate-y-full opacity-0`;
  const enterActiveClasses = `transform-translate-y-0 opacity-1`;
  const leaveClasses = `transform-translate-y-full opacity-0`;
  const classes = ` ${baseClasses} ${typeClasses[type]} `;

  return (
    <div className={classes} style={{
        animation: `${enterClasses} 500ms ease-in-out forwards, ${leaveClasses} 500ms ease-in-out forwards`, }} >
      <p className="font-bold">{type}</p>
      <p>{message}</p>
      <button className="mt-2 text-sm font-medium hover:bg-gray-200" onClick={onClose}> Cerrar </button>
    </div>
  );
};

export default Alert;
