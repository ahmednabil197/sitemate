import app from './app';
import { initDbConnection } from './db';

const port = process.env.PORT || 5000;
initDbConnection().then(() => {
    app.listen(port, () => {
        console.log(`Listening: http://localhost:${port}`);
    });
}).catch(e => {
    console.error(e);
})
