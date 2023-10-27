import data from '../../../_config.yml';

export function getEnv(){
  let env = "";

  switch (data.assets.self_host.env.toString()) {
    case "development": env = "dev"; break;
    case "production": env = "prod"; break;
  }
  return env;
}
