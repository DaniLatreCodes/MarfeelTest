import createElement from "../../utils/createElement"
import call from '../../call/index'
import "./index.sass";

const url = "https://api.github.com/users/"


function Search() {

  let searchEl

  async function handleSearch(e){
    e.preventDefault() 
    const inputUserName = e.target[0].value
    const { repos_url, name, login: fullName, avatar_url, bio } = await call(`${url + inputUserName}`)
    const repos = await call(repos_url)
    debugger

    let thumbnail = createElement("img", ["user-image"])
    thumbnail.setAttribute("src", avatar_url)

    let user_name = createElement("p", ["user-name"])
    user_name.innerHTML = name

    let full_name = createElement("p", ["user-full_name"])
    full_name.innerHTML = fullName

    let user_bio = createElement("p", ["user-bio"])
    user_bio.innerHTML = bio

    let user_data = createElement("article", ["user-data"], [thumbnail, user_name, full_name, user_bio])
    
    
    let user_section = document.querySelector('.user-container')
    if(!user_section ) {
      user_section = createElement("section", ["user-container"],[user_data])
      searchEl.appendChild(user_section)
    }else{
      user_section.removeChild(user_section.children[0])
      user_section.appendChild(user_data)
    }

  }
 
  let inputText = createElement("input", ["search-input--text"])
  inputText.setAttribute('type', 'text')
  inputText.setAttribute('name', 'search-name')

  let inputSubmit = createElement("input", ["search-input--submit"])
  inputSubmit.setAttribute('type', 'submit')
  inputSubmit.setAttribute('value', 'Search')

  let form = createElement("form", ["search-form"], [inputText, inputSubmit])
  form.onsubmit = handleSearch

  searchEl = createElement("section", ["search-container"],[form])




  return searchEl;
}

export default Search;
