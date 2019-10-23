import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import Search from './components/Search'
import "./index.sass";

const url = "https://api.github.com/users/DaniLatreCodes";

export const App = async () => {
  let app = document.getElementById("app")
  let search = Search()
  app.appendChild(search)

};

App()