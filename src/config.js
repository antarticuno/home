const allConfigurations = {
  development: {
    backendAPI: 'http://localhost:7555',
  },
  production: {
    backendAPI: 'http://localhost:7555',
  },
  test: {
    // TODO: If we had a UAT/Testing environment set up consistently we would point this there
    backendAPI: '',
  },
};

const config = allConfigurations[process.env.NODE_ENV || 'development'];

export default config;