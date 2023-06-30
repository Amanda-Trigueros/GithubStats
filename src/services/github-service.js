import { Octokit, App } from "octokit";
const octokit = new Octokit({
  auth: `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`,
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
