const getRequiredEnvVar = (name: string) => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
};

const getEnvVar = (name: string, defaultValue?: string) => {
  const value = process.env[name];
  if (!value) {
    return defaultValue;
  }
  return value;
};

const config = {
  welcomeMsg: getRequiredEnvVar('MY_WELCOME_MSG'),
  author: getEnvVar('MY_NAME')
};

export default config;
