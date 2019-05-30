const allConfigurations = {
  development: {
    backendAPI: 'http://localhost:7555',
  },
  production: {
    backendAPI: 'https://cs4500-sp19-teamrocket.herokuapp.com/api',
  },
  test: {
    // TODO: If we had a UAT/Testing environment set up consistently we would point this there
    backendAPI: 'https://cs4500-sp19-teamrocket.herokuapp.com/api',
  },
};

const config = allConfigurations[process.env.NODE_ENV || 'development'];

export default config;