import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

export default function List() {
  const chemists = [];
  const others = [];
  people.forEach((person) => {
    const listItems = (
      <li key={person.id}>
        <img src={getImageUrl(person)} alt={person.name} />
        <p>
          <b>{person.name}:</b>
          {" " + person.profession + " "}
          known for {person.accomplishment}
        </p>
      </li>
    );

    if (person.profession === "chemist") {
      chemists.push(listItems);
    } else {
      others.push(listItems);
    }
  });

  return (
    <article>
      <h1>Scientists</h1>
      <h2>Chemist</h2>
      <ul>{chemists}</ul>
      <h2>Everyone else</h2>
      <ul>{others}</ul>
    </article>
  );
}
