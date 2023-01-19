window.onload = () => {
    document.querySelector("#sentence").innerHTML = randomSentences();
};

const randomSentences = () => {

    let pronoun = ["A", "The"];
    let subject = ["cat", "raccoon", "dog", "rabbit", "bird",];
    let action = ["took my", "threw my", "stole my", "bit my"];
    let possetion = [ "homework", "toe", "car", "shoe", "pencil"];

    let pronounIndex = Math.floor(Math.random() * pronoun.length);
    let subjectIndex = Math.floor(Math.random() * subject.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let possetionIndex = Math.floor(Math.random() * possetion.length);
    
    return pronoun[pronounIndex] + " " + subject[subjectIndex] + " " + action[actionIndex] + " " + possetion[possetionIndex] + "!"; 
};