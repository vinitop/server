

"use strict";

// Load environment variables from the `.env` file.
require("dotenv").config();

module.exports = {
 
  port: process.env.PORT || 5000,
  api_url: process.env.API_URL,
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
};
