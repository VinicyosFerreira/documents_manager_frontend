import "server-only";

const getEnvVar = (name: string): string => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Variável de ambiente não encontrada: ${name}`);
  }
  return value;
};

export const apiUrl = getEnvVar("API_URL");
