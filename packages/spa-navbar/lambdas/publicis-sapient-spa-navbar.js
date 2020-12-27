// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const spaNavbar = require("../dist/publicis-sapient-spa-navbar-server").default;
const handler = async (event) => {
  try {
    const output = spaNavbar(
      {}, // Initial State
      {} // Initial Props
    );
    return {
      statusCode: 200,
      body: JSON.stringify(output),
      headers: {
        "Content-Type": "application/json",
      },
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
