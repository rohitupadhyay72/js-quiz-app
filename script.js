let question = document.getElementById("question")
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let center = document.getElementById("center")
let options = document.getElementById('options')
let nextBtn = document.getElementById('nextBtn')
let prevBtn = document.getElementById("prevBtn")
let submitBtn = document.getElementById("submitBtn")
let retryBtn = document.getElementById("retry")

let ques = [
    {
        question: "Which of the following is used to declare a variable in JavaScript?",
        opts: ["var", "All the above", "let", "const"],
        ans: "All the above",
        checked: "false"
    },
    {
        question: "Which of the following is not a valid JavaScript data type?",
        opts: ["String", "Number", "Float", "undefined"],
        ans: "Float",
        checked: "false"
    },
    {
        question: "Which of the following is the correct way to define a function in JavaScript?",
        opts: ["function myFunction(){}", "func myFunction(){}", "function: myFunction() {}", "function = myFunction() {}"],
        ans: "function myFunction(){}"
        ,
        checked: "false"
    },
    {
        question: "What will the following code output?<br> console.log(typeof NaN);",
        opts: ["number", "object", "undefined", "NaN"],
        ans: "number",
        checked: "false"
    },
    {
        question: 'What will the following code output?<br> console.log(5 + "5");',
        opts: ["10", "55", '"55"', "Error"],
        ans: '"55"',
        checked: "false"
    },
    {
        question: "What does the typeof operator do in JavaScript?",
        opts: [
            "It checks the type of a variable or expression.",
            "It checks if a variable is defined.",
            "It defines the type of a variable.",
            "It compares two variables for equality."
        ],
        ans: "It checks the type of a variable or expression.",
        checked: "false"
    },
    {
        question: "Which of the following methods is used to add a new element at the end of an array in JavaScript?",
        opts: ["push()", "pop()", "shift()", "unshift()"],
        ans: "push()",
        checked: "false"
    },
    {
        question: "Which of the following is the correct syntax for creating a JavaScript object?",
        opts: ["let obj=()", "let obj=[]", "let obj={}", "let obj=<>"],
        ans: "let obj={}",
        checked: "false"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        opts: ["<js>", "<javascript>", "<code>", "<script>"],
        ans: "<script>",
        checked: "false"
    },
    {
        question: "Which of the following is not a reserved word in JavaScript?",
        opts: ["interface", "throws", "program", "short"],
        ans: "program",
        checked: "false"
    },
    {
        question: "How does a for loop start?",
        opts: [
            "for (i = 0; i <= 5; i++)",
            "for i=1 to 5",
            "for (i = 0; i <= 5)",
            "for (i <= 5; i = 5)"
        ],
        ans: "for (i = 0; i <= 5; i++)",
        checked: "false"
    },
    {
        question: "Which statement is used to test for a specific condition in JavaScript?",
        opts: ["if", "for", "switch", "while"],
        ans: "if",
        checked: "false"
    },
    {
        question: "What will typeof null return in JavaScript?",
        opts: ["null", "object", "undefined", "boolean"],
        ans: "object",
        checked: "false"
    },
    {
        question: "Which JavaScript method is used to access an HTML element by ID?",
        opts: ["getElementById()", "getElement(Id)", "getId()", "getElementByID()"],
        ans: "getElementById()",
        checked: "false"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        opts: ["=", "-", "_", "=="],
        ans: "=",
        checked: "false"
    }
]

let index = 0
let marks = 0
let time = setTimeout(next, 60000)
function check(option) {
    
    let answer = ques[index].opts[option]
    if (ques[index].checked === "false") {
        if (answer === ques[index].ans) {
            marks += 1;
            ques[index].checked = "true";
            console.log(marks);
        }
        next();
    }
    else {
        if (index == ques.length - 1) {
            alert("Please press submit button")
        }
        else if (index < ques.length - 1)
            alert("You have already selected an option for this question. Please move to the next question.")
    }
}
function getMarks() {
    question.innerHTML = `You scored ${marks}/${ques.length}.<br> Percentage: ${(marks / ques.length * 100).toFixed(2)}%`
    question.style.fontSize = '2rem'
    options.style.display = `none`
    prevBtn.style.display = `none`
    nextBtn.style.display = `none`
    submitBtn.style.display = `none`
    retryBtn.style.display = `block`
}

function loadQuestion(i) {
    clearTimeout(time)
    question.innerHTML = `Question ${i + 1}. ${ques[i].question}`
    btn1.innerText = `1. ${ques[i].opts[0]}`
    btn2.innerText = `2. ${ques[i].opts[1]}`
    btn3.innerText = `3. ${ques[i].opts[2]}`
    btn4.innerText = `4. ${ques[i].opts[3]}`
    if (index === 0) {
        prevBtn.style.display = 'none'
        time = setTimeout(next, 60000)
    }
    else if (index === ques.length - 1) {
        nextBtn.style.display = 'none'
        submitBtn.style.display = 'block'
        time = setTimeout(getMarks, 60000)
    }
    else {
        prevBtn.style.display = 'block'
        nextBtn.style.display = 'block'
        submitBtn.style.display = 'none'
        time = setTimeout(next, 60000)
    }
}


function next() {
    if (index < ques.length - 1) {
        index++;
        loadQuestion(index)
    }
}

function prev() {
    if (index > 0) {
        index--;
        loadQuestion(index)
    }
}

loadQuestion(index)

function retry() {
    index = 0
    marks = 0
    for (let i = 0; i < ques.length; i++) {
        ques[i].checked = "false"
    }
    options.style.display = `flex`
    question.style.fontSize = '1.2rem'

    if (index === 0) {
        prevBtn.style.display = 'none'
        retryBtn.style.display = 'none'
        nextBtn.style.display = 'block'
        time = setTimeout(next, 60000)
    }
    else if (index === ques.length - 1) {
        nextBtn.style.display = 'none'
        submitBtn.style.display = 'block'
        retryBtn.style.display = 'none'
        time = setTimeout(getMarks, 60000)
    }
    else {
        prevBtn.style.display = 'block'
        nextBtn.style.display = 'block'
        submitBtn.style.display = 'none'
        time = setTimeout(next, 60000)
    }
    loadQuestion(index)
}
