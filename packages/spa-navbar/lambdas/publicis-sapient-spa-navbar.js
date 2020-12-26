// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const spaNavbar = require("../dist/publicis-sapient-spa-navbar-server").default;
const handler = async (event) => {
  try {
    const html = spaNavbar(
      {}, // Initial State
      { name: "Server Rendered Name" } // Props
    );
    return {
      statusCode: 200,
      body: html,
      headers: {
        "Content-Type": "text/html; charset=UTF-8",
      },
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
