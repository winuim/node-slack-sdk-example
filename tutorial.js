const { WebClient } = require('@slack/web-api');

console.log('Getting started with Node Slack SDK');

const token = process.env.SLACK_TOKEN;
const web = new WebClient(token);

(async () => {
    const res = web.api.test();
    res.then(console.log);
})();
