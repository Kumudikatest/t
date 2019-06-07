const google = require("googleapis").google;

const key = JSON.parse(process.env.GCP_SERVICE_ACCOUNT_KEY);
const jwtClient = new google.auth.JWT({
    email: key.client_email,
    key: key.private_key,
    scopes: ["https://www.googleapis.com/auth/cloud-platform"]
});

google.options({auth: jwtClient, project: process.env.GCP_PROJECT});