let currentScenario = 0;
let score = 0;

const scenarios = [
    {
        title: "Social Media Promotion",
        description:
            "FoodRush wants to increase brand awareness among young customers. Which platform should you focus on?",
        choices: [
            {
                text: "Instagram",
                points: 20
            },
            {
                text: "LinkedIn",
                points: 10
            },
            {
                text: "Newspaper",
                points: 5
            }
        ]
    },

    {
        title: "Customer Engagement",
        description:
            "FoodRush wants to improve customer engagement. What should you do?",
        choices: [
            {
                text: "Create interactive polls and customer contests",
                points: 20
            },
            {
                text: "Stop interacting with customers",
                points: 5
            },
            {
                text: "Only post advertisements",
                points: 10
            }
        ]
    },

    {
        title: "Offers and Discounts",
        description:
            "FoodRush wants to attract new customers. Which offer would be effective?",
        choices: [
            {
                text: "10% discount for new customers",
                points: 20
            },
            {
                text: "Increase delivery charges",
                points: 5
            },
            {
                text: "Remove all offers",
                points: 5
            }
        ]
    },

    {
        title: "Online Visibility and SEO",
        description:
            "FoodRush wants more people to find its service online. Which keyword strategy should you choose?",
        choices: [
            {
                text: "Use keywords such as 'best food delivery near me'",
                points: 20
            },
            {
                text: "Use unrelated keywords",
                points: 5
            },
            {
                text: "Do not use keywords",
                points: 5
            }
        ]
    },

    {
        title: "Marketing Campaign Decision",
        description:
            "FoodRush has a limited marketing budget. Which strategy should you choose?",
        choices: [
            {
                text: "Use social media advertising with targeted customers",
                points: 20
            },
            {
                text: "Spend the entire budget without targeting",
                points: 5
            },
            {
                text: "Stop digital marketing",
                points: 5
            }
        ]
    }
];


function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");
}


function showInstructions() {
    showPage("instructionsPage");
}


function startGame() {

    currentScenario = 0;
    score = 0;

    showPage("gamePage");

    displayScenario();
}


function displayScenario() {

    const scenario = scenarios[currentScenario];

    document.getElementById("scenarioNumber").textContent =
        "Scenario " + (currentScenario + 1) + " of " + scenarios.length;

    document.getElementById("scenarioTitle").textContent =
        scenario.title;

    document.getElementById("scenarioDescription").textContent =
        scenario.description;

    const choicesContainer = document.getElementById("choices");

    choicesContainer.innerHTML = "";

    document.getElementById("feedback").textContent = "";

    document.getElementById("nextButton").style.display = "none";


    scenario.choices.forEach(function(choice) {

        const button = document.createElement("button");

        button.className = "choice";

        button.textContent = choice.text;

        button.onclick = function() {
            selectChoice(choice.points);
        };

        choicesContainer.appendChild(button);
    });
}


function selectChoice(points) {

    score += points;

    const buttons = document.querySelectorAll(".choice");

    buttons.forEach(function(button) {
        button.disabled = true;
    });


    if (points >= 20) {
        document.getElementById("feedback").textContent =
            "Great choice! You earned " + points + " points.";
    }
    else {
        document.getElementById("feedback").textContent =
            "You earned " + points + " points.";
    }


    document.getElementById("nextButton").style.display = "inline-block";
}


function nextScenario() {

    currentScenario++;

    if (currentScenario < scenarios.length) {
        displayScenario();
    }
    else {
        showResult();
    }
}


function showResult() {

    showPage("resultPage");

    document.getElementById("finalScore").textContent =
        score + " / 100";


    if (score >= 80) {

        document.getElementById("finalMessage").textContent =
            "Excellent Digital Marketing Strategy! 🎉";

    }
    else if (score >= 50) {

        document.getElementById("finalMessage").textContent =
            "Good Strategy! Keep improving your decisions.";

    }
    else {

        document.getElementById("finalMessage").textContent =
            "Keep learning and try again!";
    }
}


function restartGame() {

    currentScenario = 0;
    score = 0;

    startGame();
}