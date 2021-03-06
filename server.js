const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

(async () => {
    console.log('there');
    try {
        await app.prepare();
        console.log('app prepared');

        const server = express();
        server.get('/a/:id', (req, res) => {
            const actualPage = '/article';
            const queryParams = { id: req.params.id };
            app.render(req, res, actualPage, queryParams);
        });
        server.get('/f/:id', (req, res) => {
            const actualPage = '/fortnite';
            const queryParams = { theme: req.params.id };
            app.render(req, res, actualPage, queryParams);
        });
        server.get('*', (req, res) => {
            return handle(req, res);
        });

        server.listen(3000, err => {
            if (err) throw err;
            console.log('> Ready on http://localhost:3000');
        });
    } catch (ex) {
        console.error(ex.stack);
        process.exit(1);
    }
})();
