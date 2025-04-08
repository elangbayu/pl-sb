export default {
  require: ["src/steps/**/*.ts", "src/support/**/*.ts"],
  requireModule: ["ts-node/register"],
  format: ["allure-cucumberjs/reporter"],
  formatOptions: {
    resultsDir: "allure-results",
  },
};
