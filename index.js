#!/usr/bin/env node

var fs = require("fs");
var toMdast = require("hast-util-to-mdast");
var unified = require("unified");
var stringify = require("remark-stringify");

var data = fs.readFileSync(0, "utf-8");

action = process.argv.slice(-1)[0];

if (action == "hast2mdast") {
  hast = JSON.parse(data);
  mdast = toMdast(hast);
  console.log(JSON.stringify(mdast));
} else if (action == "mdast2doc") {
  mdast = JSON.parse(data);
  doc = unified()
    .use(stringify)
    .stringify(mdast);
  console.log(doc);
} else if (action == "log") {
  console.log(JSON.parse(data));
} else {
  console.log(
    JSON.stringify({
      error: "An error occurred executing hast-mdast-cli"
    })
  );
}
