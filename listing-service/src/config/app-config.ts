export enum Profile {
  DEVELOPMENT = "development",
  PRODUCTION = "production",
}

export const ENV = (process.env.ENV || Profile.DEVELOPMENT) as String ;

export enum Config {
  PORT = "7200"
}
