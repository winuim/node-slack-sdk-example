const { RTMClient } = require('@slack/rtm-api');
const token = process.env.SLACK_BOT_TOKEN;
const rtm = new RTMClient(token);

// Attach listeners to events by type. See: https://api.slack.com/events/message
rtm.on('message', (event) => {
    console.log(event);
});

(async () => {
    await rtm.start();
})();
