import express from 'express';

const app = express();

app.get('/', (req, res) => {
    console.log('GET /');
  res.json({ ok: true });
});

export default app;