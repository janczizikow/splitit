export const CONFIG = {
  port: 4000,
  cors: {
    credentials: true,
    origin: process.env.DEV_CLIENT_URL
  }
};
