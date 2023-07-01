import { useState } from "react";
import octokit from "../services/github-service";
import styled from "@emotion/styled";

const ReposTitle = styled.h2`
  font-weight: 400;
  font-size: 28px;
  line-height: 35.2px;

`;

const ReposName = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #2D9CDB;
  max-width: 250px;

`;

const ReposCard = styled.div`
  width: 300px;
  border-radius: 4px;
  padding: 8px 12px 8px 12px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.25);
  background-color: white;
  align-items: center;
  word-wrap: break-word;

`;

const ReposWrapper = styled.div`
  height: 488px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ReposAnchord = styled.a`
  text-decoration: none;
  color: black
`;



function ReposPage() {
  const user = JSON.parse(localStorage.getItem("Profile"));
  const [repos, setRepos] = useState(null);

  octokit
    .request("GET /users/{username}/repos", {
      username: `${user.login}`,
    })
    .then((response) => {
      setRepos(response.data);
       
    });
  return (
    <>
    { repos ? 
    <ReposTitle>Public Repos ( {repos.length} ) </ReposTitle> : ""}
    <ReposWrapper>
      {repos
        ? repos.map((repo) => {
            return (
              <ReposAnchord href={repo.html_url} target="_blank">
              <ReposCard>
                 <ReposName>{repo.full_name}</ReposName>
                 <p>{repo.description}</p> 
                 <p>{repo.language}</p>
                 <p>{repo.stargazers_count}</p>
                 <p>{repo.forks_count}</p>
                 
                 
              </ReposCard>
              </ReposAnchord>
            );
          })
        : ""}
      </ReposWrapper>
    </>
  );
}

export default ReposPage;