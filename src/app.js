/* eslint-disable */
/*import "bootstrap";*/
/*import "./style.css";*/

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("tests");
  /* combinaciones posibles de nombres de dominio*/
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["ashes", "brave", "intercom", "guy"];

  /* lista de extensiones hackers */
  let extensions = ["es", "uy", "ve", "br", "py", "com"];

  let dominios = [];

  pronoun.forEach(start => {
    adj.forEach(mid => {
      noun.forEach(last => {
        extensions.forEach(ex => {
          let domain = `${start}${mid}${last}.${ex}`;

          if (last.endsWith(ex)) {
            let domainHack = `${start}${mid}${last.slice(
              0,
              -1 * ex.length
            )}.${ex}`;
            dominios.push(domainHack);
          } else {
            dominios.push(domain);
          }
        });
      });
    });
  });

  for (let i = 0; i < dominios.length; i++) {
    console.log(dominios[i]);
  }
};
