const { WebClient } = require('@slack/web-api');

console.log('Getting started with Node Slack SDK');

const token = process.env.SLACK_TOKEN;
const web = new WebClient(token);

(async () => {
    web.api.test().then(console.log);
    web.users.list({
        limit: 10,
    }).then(console.log).catch(console.error);
})();
