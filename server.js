const cors_proxy = require('cors-anywhere');

let whitelist = ['https://oabdesignz.com', 'https://dashboard.oabdesignz.com', 'http://localhost:8080'];
let cors_proxy_options = {
    originWhitelist: whitelist,
    requireHeader: [],
    removeHeaders: ['cookie', 'cookie2']
};

const port = process.env.PORT || 8080;
cors_proxy.createServer(cors_proxy_options).listen(port, () => {
    console.log(`CORS Anywhere server running on port ${port}`);
});
