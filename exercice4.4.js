/**
 * Créez une fonction pickLearner(inputAr, n)qui prend 2 paramètres.
 * inputAr: Un tableau d'apprenants (celui que vous avez créé dans l'exercice 3.0 par exemple)
 * n: Un nombre qui doit être supérieur à 0 et inférieur à la longueur de inputAr
 *  La fonction doit renvoyer un tableau d'apprenants sélectionnés au hasard.
 */ 
let inputAr = ["Abel Fortunati", "Anthony Denayer", "Bruno Lafont","Delphine Lecorney","Emilien Volkaert","Ethen Dias Marques","Julien Arnould","Louka Cadau","Nikko Di Bernardo","Willy Seghers","Alexandra Petit","Benjamin Mayeur","Ismaël Mesmoudi","Jodie Addis","Loïc Lion","Luciano Ciarrocchi","Marine Fassin","Noa Cayphas","Steve Grard","Sylvain Jacobs","Thomas M"];
let n = Number(prompt("Enter a number : "));

function pickLearner(inputAr, n) {
    

    if (n <= 0 || n > inputAr.length) {
      return alert("Enter a valid number for 'n'");                            
    } else {
      let learners = [];
      let i = 0;
      while (i < n) {

        let randomIndex = Math.floor(Math.random() * inputAr.length);                              
        if (!learners.includes(inputAr[randomIndex])) {                        
          learners.push(inputAr[randomIndex]);                       
          i++;                                          ur
        }
      }
      return learners;
    }
  }

  /**
   * la fonction pickLearner(input, n) retourne un message d'erreur si n est invalide , génère un index aléatoire 
   * elle vérifie si l'apprenant a déjà été sélectionné , ajoute l'apprenant au tableau , incrémente le compteur mais retourne la valeur d'origine avant.
   */