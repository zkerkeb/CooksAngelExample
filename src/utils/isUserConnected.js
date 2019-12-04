const isUserConnected = () => {
  const isConnected = localStorage.getItem('token');
  return !!isConnected;
};

export default isUserConnected;