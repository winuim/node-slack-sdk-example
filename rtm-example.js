const { RTMClient } = require('@slack/rtm-api');

// Read a token from the environment variables
const token = process.env.SLACK_BOT_TOKEN;

// Initialize
const rtm = new RTMClient(token);

(async () => {
    // Connect to Slack
    const { self, team } = await rtm.start();
})();

// Attach listeners to events by type. See: https://api.slack.com/events/message
rtm.on('message', (event) => {
    console.log(event);
});

// Listen for users who join a channel that the bot user is a member of
// See: https://api.slack.com/events/member_joined_channel
rtm.on('member_joined_channel', async (event) => {
    try {
        // Send a welcome message to the same channel where the new member just joined, and mention the user.
        const reply = await rtm.sendMessage(`Welcome to the channel, <@${event.user}>`, event.channel)
        console.log('Message sent successfully', reply.ts);
    } catch (error) {
        console.log('An error occurred', error);
    }
});
