// Local dictionary dataset (A–B sample words)
const dictionary = {
  // A
  apple: {
    meaning: "A round fruit with red, green, or yellow skin.",
    synonyms: ["fruit", "pome", "orchard fruit"]
  },
  ability: {
    meaning: "Possession of the means or skill to do something.",
    synonyms: ["skill", "talent", "capacity", "competence"]
  },
  achieve: {
    meaning: "Successfully bring about or reach a desired result.",
    synonyms: ["accomplish", "attain", "realize", "complete"]
  },
  angry: {
    meaning: "Feeling or showing strong annoyance or displeasure.",
    synonyms: ["mad", "furious", "irate", "upset"]
  },
  answer: {
    meaning: "A response to a question.",
    synonyms: ["reply", "response", "solution"]
  },

  // B
  banana: {
    meaning: "A long curved fruit with a yellow skin.",
    synonyms: ["fruit", "plantain"]
  },
  beautiful: {
    meaning: "Pleasing to the senses or to the mind.",
    synonyms: ["pretty", "lovely", "attractive", "gorgeous"]
  },
  begin: {
    meaning: "Start; perform the first part of an action.",
    synonyms: ["start", "commence", "initiate", "launch"]
  },
  big: {
    meaning: "Of considerable size, extent, or intensity.",
    synonyms: ["large", "huge", "gigantic", "massive"]
  },
  brave: {
    meaning: "Ready to face and endure danger or pain.",
    synonyms: ["courageous", "bold", "fearless", "valiant"]
  }
};

// Select elements
const searchBtn = document.getElementById("search-btn");
const inpWord = document.getElementById("inp-word");
const wordTitle = document.querySelector(".word h3");
const definition = document.querySelector(".definition");
const soundBtn = document.querySelector(".sound-btn");

// Search function
function searchWord() {
  let word = inpWord.value.toLowerCase().trim();

  if (word in dictionary) {
    wordTitle.innerText = word;
    definition.innerHTML = `
      <strong>Meaning:</strong> ${dictionary[word].meaning}<br>
      <strong>Synonyms:</strong> ${dictionary[word].synonyms.join(", ")}
    `;
  } else {
    wordTitle.innerText = "Not Found";
    definition.innerText =
      "❌ Sorry, this word is not available in the dictionary.";
  }
}

// Sound function (Text-to-Speech)
function playSound() {
  let text = wordTitle.innerText;
  if (text && text !== "Not Found") {
    let utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  }
}

// Event listeners
searchBtn.addEventListener("click", searchWord);
soundBtn.addEventListener("click", playSound);
