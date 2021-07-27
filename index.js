const core = require("@actions/core");

const handlePullRequest = require("./lib/handle_pull_request");
const handleSchedule = require("./lib/handle_schedule");

main();

async function main() {
  core.info("In main()");
  process.env.MC_PR_NO = 1;
  core.info(`Merge conflict PR NO is ${process.env.MC_PR_NO}`);
  
  if (process.env.GITHUB_EVENT_NAME === "pull_request") {
    return handlePullRequest();
  }

  handleSchedule();
  core.info(`Merge conflict PR NO is ${process.env.MC_PR_NO}`);
  core.info(`Merge conflict PR NO is ${process.env.MC_PR_NO}`);
  core.info(`Merge conflict PR NO is ${process.env.MC_PR_NO}`);
}

process.on("unhandledRejection", (reason, promise) => {
  core.warning("Unhandled Rejection at:");
  core.warning(promise);
  core.setFailed(reason);
});
