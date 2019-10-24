import createElement from "../../utils/createElement";
import "./index.sass";

export default function User(name, fullName, avatar_url, bio) {
  let thumbnail = createElement("div", ["user-image"]);
  thumbnail.setAttribute("style", `background-image: url(${avatar_url})`);

  let user_name = createElement("p", ["user-name"]);
  user_name.innerHTML = `@${name}`;

  let full_name = createElement("p", ["user-full_name"]);
  full_name.innerHTML = fullName;

  let user_bio = createElement("p", ["user-bio"]);
  user_bio.innerHTML = bio;

  let user_info = createElement("section", ["user-info"], [user_name, full_name, user_bio]);

  return createElement("article", ["user-data"], [thumbnail, user_info]);
}
