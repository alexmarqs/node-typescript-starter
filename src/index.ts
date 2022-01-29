import config from './config';

const main = async () => {
  console.log(`${config.welcomeMsg} @ ${config.author} || alexmarqs`);
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
