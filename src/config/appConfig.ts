const isProduction = process.env.NODE_ENV === 'production';

export const appConfig = {
  environment: isProduction ? 'production' : 'development',
  apiBaseUrl: isProduction ? 'https://api.bindibooks.com' : 'http://localhost:3000/api',
  featureFlags: {
    enableChatbot: true,
    enableNewUI: false,
  },
};
