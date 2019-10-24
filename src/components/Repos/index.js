import createElement from "../../utils/createElement";
import Repo from "../Repo/index";
import "./index.sass";

export default function Repos(repos) {

  let repos_user = repos.map((repo, index, array) => {
    const repo_element = Repo(repo.name, repo.stargazers_count, repo.forks_count, index, array);
    const repoWrap = []
    repoWrap.push(repo_element)
    !(index > array.length - 2) && repoWrap.push(repo_element, createElement("hr", ["repos-repo--separator"]));
    return createElement("section", ["repo-warp"], repoWrap)
  });

  let repos_title = createElement("p", ["repos-title"]);
  repos_title.innerHTML = "Repositories";
  let line_separator = createElement("hr", ["repos-header--separator"]);
  let repos_header = createElement("header", ["repos-header"], [repos_title, line_separator]);
  repos_user.unshift(repos_header);

  return createElement("article", ["user-repos"], repos_user);
}
