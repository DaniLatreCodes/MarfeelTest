import createElement from "../../utils/createElement";
import Repo from "../Repo/index";
import "./index.sass";

export default function Repos(repos) {
  let repos_user = repos.map(repo => Repo(repo.name, repo.stargazers_count, repo.forks_count));

  
  let last_repo_user = repos_user.pop()
  last_repo_user.removeChild(last_repo_user.lastChild)

  let repos_title = createElement("p", ["repos-title"]);
  repos_title.innerHTML = "Repositories";
  let line_separator = createElement("hr", ["repos-header--separator"]);
  let repos_header = createElement("header", ["repos-header"], [repos_title, line_separator]);
  repos_user.unshift(repos_header);


  return createElement("article", ["user-repos"], repos_user);
}
