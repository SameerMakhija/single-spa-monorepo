const fs = require("fs");
const path = require("path");
const {
  constructServerLayout,
  sendLayoutHTTPResponse,
} = require("single-spa-layout/server");
const ejs = require("ejs");
const axios = require("axios").default;
const _ = require("lodash");
const app = require("./app");

// Compile the EJS template
const htmlTemplate = ejs.compile(
  fs.readFileSync(path.resolve(__dirname, "./views/index.ejs"), "utf-8")
);
// Create the HTML to be used by the server
const html = htmlTemplate({
  isLocal: true,
  orgName: "publicis-sapient",
});
// Create server layout instance
const serverLayout = constructServerLayout({
  html,
});
// Add single-spa assembler middleware
app.use("*", (req, res, next) => {
  const developmentMode = process.env.NODE_ENV === "development";
  const cacheBustSuffix = developmentMode ? `?ts=${Date.now()}` : "";
  // Additional props to be passed to each application
  const props = {
    rootSettings: {
      foo: "bar",
    },
  };
  // Fragment handlers
  const fragments = {};
  // Fragment renderer
  const renderFragment = (name) => fragments[name]();

  sendLayoutHTTPResponse({
    serverLayout,
    urlPath: req.originalUrl,
    res,
    renderFragment,
    async renderApplication({ appName, propsPromise }) {
      const appProps = await propsPromise;
      const output = await axios
        .get(`http://localhost:8888/.netlify/functions/${_.kebabCase(appName)}`)
        .then((response) => response.data);
      return {
        content: output.content,
        assets: output.assets,
      };
    },
    async retrieveApplicationHeaders({ appName, propsPromise }) {
      const appProps = await propsPromise;
      return {};
    },
    async retrieveProp(propName) {
      return props[propName];
    },
    assembleFinalHeaders(allHeaders) {
      return Object.assign({}, Object.values(allHeaders));
    },
  })
    .then(next)
    .catch((err) => {
      console.error(err);
      res.status(500).send("A server error occurred");
    });
});
