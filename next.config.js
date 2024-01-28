module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/",
        destination: "http://localhost:5000/api/",
      },
    ];
  };
  return {
    rewrites,
  };
};
