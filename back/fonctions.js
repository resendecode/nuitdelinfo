
function getTitre (categorie ,indice){// Charger le contenu du fichier JSON
    fetch(`./resources/${categorie}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur de chargement du fichier JSON : ${response.status}`);
            }
            return response.json();
        })
        .then(objetJson => {
            const questions = objetJson.questions;
            if (indice >= 0 && indice < questions.length) {
                const question = questions[indice].question;
                console.log(`Question à l'indice ${indice}: ${question}`);
            } else {
                console.error(`Indice ${indice} hors de portée.`);
            }
        })
        .catch(erreur => {
            console.error('Erreur lors du chargement du fichier JSON :', erreur.message);
        });
}
function getRep1(categorie, indice){// Charger le contenu du fichier JSON
    fetch(`./resources/${categorie}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur de chargement du fichier JSON : ${response.status}`);
            }
            return response.json();
        })
        .then(objetJson => {
            const questions = objetJson.questions;
            if (indice >= 0 && indice < questions.length) {
                const rep = questions[indice].options[0].text;
                console.log(`Reponse à l'indice ${indice}: ${rep}`);
                return rep;
            } else {
                console.error(`Indice ${indice} hors de portée.`);
            }
        })
        .catch(erreur => {
            console.error('Erreur lors du chargement du fichier JSON :', erreur.message);
        });
}
function getRep2(categorie, indice){// Charger le contenu du fichier JSON
    fetch(`./resources/${categorie}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur de chargement du fichier JSON : ${response.status}`);
            }
            return response.json();
        })
        .then(objetJson => {
            const questions = objetJson.questions;
            if (indice >= 0 && indice < questions.length) {
                const rep = questions[indice].options[1].text;
                console.log(`Reponse à l'indice ${indice}: ${rep}`);
                return rep;
            } else {
                console.error(`Indice ${indice} hors de portée.`);
            }
        })
        .catch(erreur => {
            console.error('Erreur lors du chargement du fichier JSON :', erreur.message);
        });
}
function getVrai(categorie, indice){
    fetch(`./resources/${categorie}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur de chargement du fichier JSON : ${response.status}`);
            }
            return response.json();
        })
        .then(objetJson => {
            const questions = objetJson.questions;
            if (indice >= 0 && indice < questions.length) {
                const vrai = questions[indice].reponse;
                console.log(`vraie reponse ${indice}: ${vrai}`);
                return vrai;
            } else {
                console.error(`Indice ${indice} hors de portée.`);
            }
        })
        .catch(erreur => {
            console.error('Erreur lors du chargement du fichier JSON :', erreur.message);
        });
}
function getDescription(categorie, indice){
    fetch(`./resources/${categorie}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur de chargement du fichier JSON : ${response.status}`);
            }
            return response.json();
        })
        .then(objetJson => {
            const questions = objetJson.questions;
            if (indice >= 0 && indice < questions.length) {
                const description = questions[indice].description;
                console.log(`description ${indice}: ${description}`);
                return description;
            } else {
                console.error(`Indice ${indice} hors de portée.`);
            }
        })
        .catch(erreur => {
            console.error('Erreur lors du chargement du fichier JSON :', erreur.message);
        });
}
function getImg1(categorie, indice){
    fetch(`./resources/${categorie}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur de chargement du fichier JSON : ${response.status}`);
            }
            return response.json();
        })
        .then(objetJson => {
            const questions = objetJson.questions;
            if (indice >= 0 && indice < questions.length) {
                const img = questions[indice].options[0].img;
                console.log(`vraie reponse ${indice}: ${img}`);
                return img;
            } else {
                console.error(`Indice ${indice} hors de portée.`);
            }
        })
        .catch(erreur => {
            console.error('Erreur lors du chargement du fichier JSON :', erreur.message);
        });
}
function getImg2(categorie, indice){
    fetch(`./resources/${categorie}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur de chargement du fichier JSON : ${response.status}`);
            }
            return response.json();
        })
        .then(objetJson => {
            const questions = objetJson.questions;
            if (indice >= 0 && indice < questions.length) {
                const img = questions[indice].options[1].img;
                console.log(`vraie reponse ${indice}: ${img}`);
                return img;
            } else {
                console.error(`Indice ${indice} hors de portée.`);
            }
        })
        .catch(erreur => {
            console.error('Erreur lors du chargement du fichier JSON :', erreur.message);
        });
}

// function for random index of a function 

async function getQuestionByCategorie2(category) {
    try {
      const response = await fetch(`./${category}.json`);
  
      if (!response.ok) {
        throw new Error(`Erreur de chargement du fichier JSON : ${response.status}`);
      }
  
      const objetJson = await response.json();
      const questions = objetJson.questions;
  
      console.log(questions);
      return questions;
  
    } catch (error) {
      console.error('Erreur lors du chargement du fichier JSON :', error.message);
      alert('Erreur lors du chargement du fichier JSON. Consultez la console pour les détails.');
      throw error; // Re-throw the error for further handling
    }
  }
  
  
  console.log(getQuestionByCategorie2("transport"))
  
  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }
  
  function createShuffledIndicesArray(array) {
    const indicesArray = Array.from({ length: array.length }, (_, index) => index);
    return shuffleArray(indicesArray);
  }
  
  function getNextIndex(indicesArray) {
    if (indicesArray.length === 0) {
      // Si tous les indices ont été utilisés, réinitialiser le tableau d'indices
      return null;  // ou une autre valeur pour indiquer que tous les indices ont été utilisés
    }
    return indicesArray.shift();
  }
  
  const votreTableau = await getQuestionByCategorie2('transport');
  const shuffledIndices = createShuffledIndicesArray(votreTableau);
  
  // À chaque appel, récupérez le prochain indice
  const premierIndice = getNextIndex(shuffledIndices);
  const deuxiemeIndice = getNextIndex(shuffledIndices);
  
  console.log(premierIndice);  // Indice aléatoire
  console.log(deuxiemeIndice);  // Indice différent
  
