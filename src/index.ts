import express from 'express';

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';
app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.listen(PORT, HOST);
// eslint-disable-next-line no-console
console.log(`Running on http://${HOST}:${PORT}`);
