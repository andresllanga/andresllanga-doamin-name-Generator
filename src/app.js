/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  function domainGenerator() {
    let domainList = document.querySelector("#domain-list");
    domainList.innerHTML = "";
    for (let i = 0; i < 10; i++) {
      let pronouns = pronoun[Math.floor(Math.random() * pronoun.length)];
      let adjs = adj[Math.floor(Math.random() * adj.length)];
      let nouns = noun[Math.floor(Math.random() * noun.length)];
      let domains = `${pronouns}${adjs}${nouns}.com`;
      let listItem = document.createElement("li");
      listItem.textContent = domains;
      domainList.appendChild(listItem);
      console.log(domains);
    }
  }
  domainGenerator();
};
