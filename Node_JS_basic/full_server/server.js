import express from 'express';
import routes from './routes';

const app = express();
app.use('/', routes);

const port = 1245;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

export default app;
