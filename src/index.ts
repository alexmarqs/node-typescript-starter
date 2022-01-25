import { author, version, name } from '../package.json';
import config from './config';

const main = async () => {
  console.log(`${config.welcomeMsg} @ ${config.author || author}`);
  console.log(`App info: ${name} v${version}`);
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
