module.exports = (env) => {
  const base = {
    appDefinitions: {
      __ENVIRONMENT__: env,
    },
  };

  switch (env) {
    case "prod":
      return {
        ...base,
        isDev: false,
        compress: true,
        mode: "production",
        tsCache: false,
      };
    case "local":
    default:
      return {
        ...base,
        isDev: true,
        compress: false,
        mode: "development",
        tsCache: true,
      };
  }
};
