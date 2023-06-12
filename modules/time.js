const updateDateTime = () => {
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();
  document.getElementById('time').innerHTML = `${date} ${time}`;
};
export default updateDateTime;
