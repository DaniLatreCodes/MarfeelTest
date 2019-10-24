import createElement from "../../utils/createElement";
import "./index.sass";

export default function Repo(name, stargazers_count, forks_count) {
  let repo_name = createElement("p", ["repo-name"]);
  repo_name.innerHTML = name;

  let star_svg = createElement("i", ["repo_star-svg", "fas fa-star"]);
  let star_number = createElement("p", ["repo_stars-number"]);
  star_number.innerHTML = stargazers_count;
  let repo_starts_mark = createElement("div", ["repo_stars-mark"], [star_svg, star_number]);

  let fork_svg = createElement("i", ["repo_star-svg", "fas fa-code-branch"]);
  let fork_number = createElement("p", ["repo_fork-number"]);
  fork_number.innerHTML = forks_count;
  let repo_fork_mark = createElement("div", ["repo_fork-mark"], [fork_svg, fork_number]);

  let counters = createElement("div", ["repo-counters"], [repo_starts_mark, repo_fork_mark]);

  let info_repo = createElement("div", ["info-repo"], [repo_name, counters]);

  return createElement("div", ["user-repo"], [info_repo]);
}
