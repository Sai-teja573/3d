const questions = [
    {
        question: "What is the output of 'print(2 + 3 * 4)' in Python?",
        options: ["20", "14", "None", "56"],
        correctAnswer: "14",
    },
    {
        question: "Which library in Python is commonly used for machine learning and data analysis?",
        options: ["Numpy", "Matplotlib", "Scikit-Learn", "Django"],
        correctAnswer: "Scikit-Learn",
    },
    {
        question: "In a decision tree, what is the name of the node that represents the final decision?",
        options: ["Root node", "Intermediate node", "Leaf node", "Branch node"],
        correctAnswer: "Leaf node",
    },
    {
        question: "Which data structure is used to implement a queue in Python?",
        options: ["List", "Tuple", "Queue", "Deque"],
        correctAnswer: "Queue",
    },
    {
        question: "What does the 'random' module in Python provide?",
        options: ["Random numbers", "Random strings", "Random data structures", "Random AI models"],
        correctAnswer: "Random numbers",
    },
    {
        question: "What does 'AI' stand for in the context of computer science?",
        options: ["Artificial Intelligence", "Advanced Iteration", "Automated Interpretation", "Algorithmic Integration"],
        correctAnswer: "Artificial Intelligence",
    },
    {
        question: "Which sorting algorithm has the worst-case time complexity of O(n^2)?",
        options: ["Merge Sort", "Quick Sort", "Bubble Sort", "Insertion Sort"],
        correctAnswer: "Bubble Sort",
    },
    {
        question: "What data structure is used to store elements in a LIFO (Last-In-First-Out) order?",
        options: ["Queue", "Stack", "Linked List", "Tree"],
        correctAnswer: "Stack",
    },
    {
        question: "Which Python keyword is used to define a function?",
        options: ["func", "define", "function", "def"],
        correctAnswer: "def",
    },
    {
        question: "In machine learning, what does 'MLP' stand for?",
        options: ["Maximum Likelihood Probability", "Multi-Layer Perceptron", "Machine Learning Process", "Massive Learning Protocol"],
        correctAnswer: "Multi-Layer Perceptron",
    },
    {
        question: "What is the primary purpose of a hash table?",
        options: ["Sorting data", "Storing multimedia files", "Searching efficiently", "Drawing graphs"],
        correctAnswer: "Searching efficiently",
    },
    {
        question: "Which of the following is not a Python data type?",
        options: ["Integer", "Boolean", "Character", "List"],
        correctAnswer: "Character",
    },
    {
        question: "What is the output of 'print('Hello, World!'[::-1])' in Python?",
        options: ["Hello, World!", "d!lroW ,olleH", "!dlroW ,olleH", "World, Hello!"],
        correctAnswer: "!dlroW ,olleH",
    },
    {
        question: "Which Python library is commonly used for web scraping?",
        options: ["Requests", "Beautiful Soup", "Scrapy", "Selenium"],
        correctAnswer: "Beautiful Soup",
    },
    {
        question: "In a binary search tree, which child is considered the 'left' child?",
        options: ["The smaller child", "The larger child", "It depends", "There's no concept of 'left' or 'right' child"],
        correctAnswer: "The smaller child",
    },
    {
        question: "What does 'K-means' refer to in machine learning?",
        options: ["A classification algorithm", "A regression algorithm", "A clustering algorithm", "A dimensionality reduction algorithm"],
        correctAnswer: "A clustering algorithm",
    },
    {
        question: "Which of the following is a valid Python comment?",
        options: ["/* This is a comment */", "// This is a comment", "# This is a comment", "-- This is a comment"],
        correctAnswer: "# This is a comment",
    },
    {
        question: "What does 'AI' stand for in the context of computer science?",
        options: ["Artificial Intelligence", "Advanced Iteration", "Automated Interpretation", "Algorithmic Integration"],
        correctAnswer: "Artificial Intelligence",
    },
    {
        question: "Which sorting algorithm has the best average-case time complexity?",
        options: ["Bubble Sort", "Insertion Sort", "Quick Sort", "Merge Sort"],
        correctAnswer: "Merge Sort",
    },
   
];



let currentQuestionIndex = 0;
let score = 0;
let timer = 60; // Initial timer value, 60 seconds
let timerInterval; // Interval variable to manage the timer

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const timerDisplay = document.getElementById("timer");
const ScoreDisplay = document.getElementById("score");

function startQuiz() {
    displayQuestion();
    timerInterval = setInterval(updateTimer, 1000); // Start the timer
}

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        questionText.textContent = question.question;
        optionsContainer.innerHTML = "";

        question.options.forEach((option) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.addEventListener("click", checkAnswer);
            optionsContainer.appendChild(button);
        });

        // Reset the timer for the current question
        timer = 60;
    } else {
        endQuiz();
    }
}

function checkAnswer(event) {
    const selectedOption = event.target.textContent;
    const question = questions[currentQuestionIndex];

    if (selectedOption === question.correctAnswer) {
        score++;
    }

    currentQuestionIndex++;
    displayQuestion();
}

function updateTimer() {
    if (timer > 0) {
        timer--;
        timerDisplay.textContent = timer;
    } else {
        checkAnswerTimeout();
    }
}

function checkAnswerTimeout() {
    clearInterval(timerInterval); // Stop the timer
    currentQuestionIndex++;
    displayQuestion();
}

function endQuiz() {
    clearInterval(timerInterval); // Stop the timer
    questionText.textContent = "Quiz Ended!";
    optionsContainer.innerHTML = "";
    timerDisplay.textContent = "0";
    ScoreDisplay.textContent = score;
    // Add animation or transition effects here
}

startQuiz();
function checkAnswer(event) {
    const selectedOption = event.target.textContent;
    const question = questions[currentQuestionIndex];
    const correctOption = question.correctAnswer;

    if (selectedOption === correctOption) {
        score++;
    } else {
        // Show the correct answer to the user
        const options = optionsContainer.getElementsByTagName("button");
        for (let i = 0; i < options.length; i++) {
            if (options[i].textContent === correctOption) {
                options[i].style.backgroundColor = "green"; // Highlight the correct answer
            } else {
                options[i].style.backgroundColor = "red"; // Highlight the wrong answer
            }
            options[i].setAttribute("disabled", true); // Disable all options after answering
        }
    }

    // Animate score change
    const scoreDisplay = document.getElementById("score");
    scoreDisplay.textContent = score;
    scoreDisplay.classList.add("score-change");
    setTimeout(() => {
        scoreDisplay.classList.remove("score-change");
    }, 500);

    // Proceed to the next question
    currentQuestionIndex++;
    setTimeout(() => {
        displayQuestion(); // Display the next question after a delay
    }, 1000); // Delay of 1 second for feedback
}
function updateTimer() {
    if (timer > 0) {
        timer--;
        timerDisplay.textContent = timer;
    } else {
        checkAnswerTimeout();
    }
}

function checkAnswerTimeout() {
    clearInterval(timerInterval); // Stop the timer

    // Check if there are more questions, if not, end the quiz
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        endQuiz();
    }
}