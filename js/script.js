let topics = [
    "Describe a situation where you had to work under pressure and how you handled it",
    "What are the most important qualities a team leader should possess",
    "How has technology changed the way people communicate in the workplace",
    "Describe a challenge you faced during your academic life and how you overcame it",
    "Why is time management important for a fresher entering the corporate world",
    "What do you understand by the term professional ethics and why does it matter",
    "How would you handle a situation where you disagree with your manager",
    "Describe the role of communication skills in career growth",
    "What are the advantages and disadvantages of working in a large organization",
    "How can freshers make a strong impression during their first job",
    "Describe a time when you had to learn something new in a very short period",
    "What motivates you to perform better in a team environment",
    "How do you think artificial intelligence will impact jobs in the next five years",
    "Describe the importance of adaptability in today's fast changing work environment",
    "What steps would you take to resolve a conflict between two team members",
    "How do you prioritize tasks when you have multiple deadlines at the same time",
    "Describe a person who has inspired you professionally and why",
    "What is the significance of continuous learning in the IT industry",
    "How would you contribute to a positive work culture in your organization",
    "Describe your strengths and how they will help you in a corporate environment",
    "What do you think is the biggest challenge freshers face when joining a company",
    "How important is emotional intelligence in a professional setting",
    "Describe a situation where teamwork led to a successful outcome",
    "What are your long term career goals and how do you plan to achieve them",
    "How would you handle a situation where a project is not going as planned"
];

function generateTopic() {
    let randomIndex = Math.floor(Math.random() * topics.length);
    document.getElementById("topic").innerText = topics[randomIndex];
}

function startTimer() {
    let time = 60;
    let timer = document.getElementById("timer");
    let countdown = setInterval(function() {
        time--;
        timer.innerText = time;
        if (time <= 0) {
            clearInterval(countdown);
            alert("Time Up!");
        }
    }, 1000);
}

function startRecognition() {
    let recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = function(event) {
        let finalText = "";
        for (let i = 0; i < event.results.length; i++) {
            finalText += event.results[i][0].transcript;
        }
        document.getElementById("output").innerText = finalText;
        localStorage.setItem("spokenText", finalText);
    };

    recognition.start();

    setTimeout(function() {
        recognition.stop();
    }, 60000);
}
