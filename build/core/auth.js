/*eslint-disable*/
//
// Add Your Discord Bot Token here
// Discord Dev > My Apps > Bot > App Bot User > Token > Reveal
// https://discordapp.com/developers/applications/me
//



exports.token = "NTQ0Njk2MDYyNjE5OTQyOTI0.D0bkeA.LtZEzIvPPdaJ6vEQ3diKpa4RCKI";

//
// Add your Discord Main User ID here
// In Discord, Go to Settings > Appearance > Enable Developer Mode
// Right click your user in channel/message and pick "Copy ID" to obtain
//

exports.botOwner = "393272240222896138";

//
// Number of shards to spawn in sharding manager (large bots only)
//

exports.shards = 2;

//
// Invite URL (OAuth2)
//

exports.invite = "https://discordapp.com/api/oauth2/authorize?client_id=544696062619942924&permissions=0&redirect_uri=https%3A%2F%2Fdiscordapp.com%2Fapi%2Foauth2%2Fauthorize&scope=bot";

//
// Add Webhook info for logging (optional)
//
exports.loggerWebhookID = process.env.DISCORD_DEBUG_WEBHOOK_ID;

exports.loggerWebhookToken = process.env.DISCORD_DEBUG_WEBHOOK_TOKEN;

//
// Allow intervals (optional)
//

exports.intervals = false;

//
// Add donation URL (optional)
//

exports.donation = null;

//
// Changelog URL (optional)
//

exports.changelog = null;

//
// Developer Mode
//

exports.dev = process.env.DEBUG;
