import { Octokit, App } from "octokit";
// import { configDotenv } from "dotenv";
// require("dotenv").config();
// const apiKey = process.env.GITHUT_KEY;
const octokit = new Octokit({
  auth: ``,
});

export default octokit;

// const octokit = new Octokit({
//   auth: 'YOUR-TOKEN'
// })

// await octokit.request('GET /user', {
//   headers: {
//     'X-GitHub-Api-Version': '2022-11-28'
//   }
// })
