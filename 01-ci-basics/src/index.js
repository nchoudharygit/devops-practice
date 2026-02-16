import { createApp } from './app.js';

const port = process.env.PORT || 3000;
const version = process.env.APP_VERSION || '1.0.0';

const app = createApp({ version });

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`api listening on :${port} (version=${version})`);
});
