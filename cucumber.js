module.exports = {
  default: {
    require: ["src/steps/**/*.ts", "src/support/**/*.ts"],
    requireModule: ["ts-node/register"],
    format: ["html:reports/report.html", "progress"],
    publishQuiet: true,
  },
};
