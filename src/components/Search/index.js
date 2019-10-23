import createElement from "../../utils/createElement";
import Repos from "../Repos/index";
import User from "../User/index";
import call from "../../call/index";
import "./index.sass";

const url = "https://api.github.com/users/";

function Search() {
  let search_wrapper;

  async function handleSearch(e) {
    e.preventDefault();
    const inputUserName = e.target[0].value;
    let user_section

    if (inputUserName != "") {
      const user = await call(`${url + inputUserName}`);
      if (user) {
        const { repos_url, login: username, name: fullName, avatar_url, bio } = user;
        const repos = await call(repos_url);
        let user_repos = Repos(repos);
        let user_data = User(username, fullName, avatar_url, bio);

        user_section = document.querySelector(".user-container");
        
        if (!user_section) {
          user_section = createElement("section", ["user-container"], [user_data, user_repos]);
          search_wrapper.appendChild(user_section);
        } else {
          while (user_section.firstChild) user_section.removeChild(user_section.firstChild);
          user_section.appendChild(user_data);
          user_section.appendChild(user_repos);
        }
      } else {
        const errorMessage = "Does not exist";
        let error_message_display = createElement("p", ["error_message-display"]);
        error_message_display.innerHTML = errorMessage;
        user_section = document.querySelector(".user-container");
        if (!user_section) {
          console.log('error no user')
          user_section = createElement("div", ["error-display"], [error_message_display]);
          search_wrapper.appendChild(user_section);
        } else {
          while (user_section.firstChild) user_section.removeChild(user_section.firstChild);
          user_section.innerHTML = errorMessage;
          search_wrapper.appendChild(user_section);
        }
      }
    }
  }

  let inputText = createElement("input", ["search-input--text"]);
  inputText.setAttribute("type", "text");
  inputText.setAttribute("name", "search-name");

  let inputSubmit = createElement("input", ["search-input--submit"]);
  inputSubmit.setAttribute("type", "submit");
  inputSubmit.setAttribute("value", "Search");

  let form = createElement("form", ["search-form"], [inputText, inputSubmit]);
  form.onsubmit = handleSearch;

  search_wrapper = createElement("section", ["search-wrapper"], [form]);

  let searchEl = createElement("section", ["search-container"], [search_wrapper]);

  return searchEl;
}

export default Search;
