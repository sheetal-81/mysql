// script.js

let questions = [
	{
		prompt: `What is MySQL?`,
		options: [
		    "A relational database management system",
		    "A programming language",
		    "A markup language",
		    "A web browser",
		],
		answer: "A relational database management system",
	    },
	    {
		prompt: `What is the purpose of the "SELECT" statement in MySQL?`,
		options: [
		    
		    "To insert data into a database",
		    "To update data in a database",
		    "To delete data from a database",
		    "To retrieve data from a database",
		],
		answer: "To retrieve data from a database",
	    },
	    {
		prompt: `What is the purpose of the "INSERT" statement in MySQL?`,
		options: [
		    "To insert data into a database",
		    "To retrieve data from a database",
		    "To update data in a database",
		    "To delete data from a database",
		],
		answer: "To insert data into a database",
	    },
	    {
		prompt: `What is the purpose of the "UPDATE" statement in MySQL?`,
		options: [
		    
		    "To retrieve data from a database",
		    "To insert data into a database",
		    "To update data in a database",
		    "To delete data from a database",
		],
		answer: "To update data in a database",
	    },
	    {
		prompt: `What is the purpose of the "DELETE" statement in MySQL?`,
		options: [
		    "To delete data from a database",
		    "To retrieve data from a database",
		    "To insert data into a database",
		    "To update data in a database",
		],
		answer: "To delete data from a database",
	    },
	    {
		prompt: `What is the purpose of the "CREATE TABLE" statement in MySQL?`,
		options: [
		    
		    "To alter an existing table in a database",
		    "To drop a table from a database",
		    "To create a new table in a database",
		    "To truncate a table in a database",
		],
		answer: "To create a new table in a database",
	    },
	    {
		prompt: `What is the purpose of the "ALTER TABLE" statement in MySQL?`,
		options: [
		    "To alter an existing table in a database",
		    "To create a new table in a database",
		    "To drop a table from a database",
		    "To truncate a table in a database",
		],
		answer: "To alter an existing table in a database",
	    },
	    {
		prompt: `What is the purpose of the "DROP TABLE" statement in MySQL?`,
		options: [
		    
		    "To alter an existing table in a database",
		    "To create a new table in a database",
		    "To drop a table from a database",
		    "To truncate a table in a database",
		],
		answer: "To drop a table from a database",
	    },
	    {
		prompt: `What is the purpose of the "TRUNCATE TABLE" statement in MySQL?`,
		options: [
		    "To remove all rows from a table",
		    "To alter an existing table in a database",
		    "To create a new table in a database",
		    "To drop a table from a database",
		],
		answer: "To remove all rows from a table",
	    },
	    {
		prompt: `What is the purpose of the "ORDER BY" clause in MySQL?`,
		options: [
		    
		    "To filter the result set of a query",
		    "To group the result set of a query",
		    "To sort the result set of a query",
		    "To join multiple tables in a query",
		],
		answer: "To sort the result set of a query",
	    },
	    {
		prompt: `What is the purpose of the "GROUP BY" clause in MySQL?`,
		options: [
		    "To group the result set of a query",
		    "To sort the result set of a query",
		    "To filter the result set of a query",
		    "To join multiple tables in a query",
		],
		answer: "To group the result set of a query",
	    },
	    {
		prompt: `What is the purpose of the "JOIN" clause in MySQL?`,
		options: [
		    
		    "To sort the result set of a query",
		    "To filter the result set of a query",
		    "To join multiple tables in a query",
		    "To group the result set of a query",
		],
		answer: "To join multiple tables in a query",
	    },
	    {
		prompt: `What is the purpose of the "INNER JOIN" in MySQL?`,
		options: [
		    "To return rows that have matching values in both tables",
		    "To return all rows from the left table, and the matched rows from the right table",
		    "To return all rows from the right table, and the matched rows from the left table",
		    "To return only rows that do not have matching values in both tables",
		],
		answer: "To return rows that have matching values in both tables",
	    },
	    {
		prompt: `What is the purpose of the "LEFT JOIN" in MySQL?`,
		options: [
		    
		    "To return rows that have matching values in both tables",
		    "To return all rows from the right table, and the matched rows from the left table",
		    "To return only rows that do not have matching values in both tables",
		    "To return all rows from the left table, and the matched rows from the right table",
		],
		answer: "To return all rows from the left table, and the matched rows from the right table",
	    },
	    {
		prompt: `What is the purpose of the "RIGHT JOIN" in MySQL?`,
		options: [
		    "To return all rows from the right table, and the matched rows from the left table",
		    "To return rows that have matching values in both tables",
		    "To return all rows from the left table, and the matched rows from the right table",
		    "To return only rows that do not have matching values in both tables",
		],
		answer: "To return all rows from the right table, and the matched rows from the left table",
	    },
	    {
		prompt: `What is the purpose of the "FULL JOIN" in MySQL?`,
		options: [
		   
		    "To return rows that have matching values in both tables",
		    "To return all rows from the left table, and the matched rows from the right table",
		    "To return all rows when there is a match in either table",
		    "To return all rows from the right table, and the matched rows from the left table",
		],
		answer: "To return all rows when there is a match in either table",
	    },
	    {
		prompt: `What is the purpose of the "UNION" operator in MySQL?`,
		options: [
		    "To combine the result sets of two or more SELECT statements",
		    "To sort the result set of a query",
		    "To filter the result set of a query",
		    "To join multiple tables in a query",
		],
		answer: "To combine the result sets of two or more SELECT statements",
	    },
	    {
		prompt: `What is the purpose of the "HAVING" clause in MySQL?`,
		options: [
		    
		    "To specify a condition for rows in a SELECT statement",
		    "To specify a condition for groups in a GROUP BY clause",
		    "To specify a condition for columns in a SELECT statement",
		    "To specify a condition for tables in a FROM clause",
		],
		answer: "To specify a condition for groups in a GROUP BY clause",
	    },
	    {
		prompt: `What is the purpose of the "LIMIT" clause in MySQL?`,
		options: [
		    
		    "To sort the result set of a query",
		    "To filter the result set of a query",
		    "To join multiple tables in a query",
		    "To limit the number of rows returned by a query",
		],
		answer: "To limit the number of rows returned by a query",
	    },
	    {
		prompt: `What is the purpose of the "LIKE" operator in MySQL?`,
		options: [
		    
		    "To check for strict equality",
		    "To check for loose equality",
		    "To compare two values",
		    "To search for a specified pattern in a column",
		],
		answer: "To search for a specified pattern in a column",
	    },
	    {
		prompt: `What is the purpose of the "COUNT" function in MySQL?`,
		options: [
		    
		    "To calculate the average of values in a result set",
		    "To find the maximum value in a result set",
		    "To count the number of rows in a result set",
		    "To find the minimum value in a result set",
		],
		answer: "To count the number of rows in a result set",
	    },
	    {
		prompt: `What is the purpose of the "SUM" function in MySQL?`,
		options: [
		    
		    "To count the number of rows in a result set",
		    "To calculate the total sum of values in a result set",
		    "To calculate the average of values in a result set",
		    "To find the maximum value in a result set",
		],
		answer: "To calculate the total sum of values in a result set",
	    }
	    
	    
];

// Get Dom Elements

let questionsEl =
	document.querySelector(
		"#questions"
	);
let timerEl =
	document.querySelector("#timer");
let choicesEl =
	document.querySelector("#options");
let submitBtn = document.querySelector(
	"#submit-score"
);
let startBtn =
	document.querySelector("#start");
let nameEl =
	document.querySelector("#name");
let feedbackEl = document.querySelector(
	"#feedback"
);
let reStartBtn =
	document.querySelector("#restart");

// Quiz's initial state
let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerId;

// Start quiz and hide frontpage

function quizStart() {
	timerId = setInterval(
		clockTick,
		1000
	);
	timerEl.textContent = time;
	let landingScreenEl =
		document.getElementById(
			"start-screen"
		);
	landingScreenEl.setAttribute(
		"class",
		"hide"
	);
	questionsEl.removeAttribute(
		"class"
	);
	getQuestion();
}

// Loop through array of questions and
// Answers and create list with buttons
function getQuestion() {
	let currentQuestion =
		questions[currentQuestionIndex];
	let promptEl =
		document.getElementById(
			"question-words"
		);
	promptEl.textContent =
		currentQuestion.prompt;
	choicesEl.innerHTML = "";
	currentQuestion.options.forEach(
		function (choice, i) {
			let choiceBtn =
				document.createElement(
					"button"
				);
			choiceBtn.setAttribute(
				"value",
				choice
			);
			choiceBtn.textContent =
				i + 1 + ". " + choice;
			choiceBtn.onclick =
				questionClick;
			choicesEl.appendChild(
				choiceBtn
			);
		}
	);
}

// Check for right answers and deduct
// Time for wrong answer, go to next question

function questionClick() {
	if (
		this.value !==
		questions[currentQuestionIndex]
			.answer
	) {
		time -= 10;
		if (time < 0) {
			time = 0;
		}
		timerEl.textContent = time;
		feedbackEl.textContent = `Wrong! The correct answer was 
		${questions[currentQuestionIndex].answer}.`;
		feedbackEl.style.color = "red";
	} else {
		feedbackEl.textContent =
			"Correct!";
		feedbackEl.style.color =
			"green";
	}
	feedbackEl.setAttribute(
		"class",
		"feedback"
	);
	setTimeout(function () {
		feedbackEl.setAttribute(
			"class",
			"feedback hide"
		);
	}, 2000);
	currentQuestionIndex++;
	if (
		currentQuestionIndex ===
		questions.length
	) {
		quizEnd();
	} else {
		getQuestion();
	}
}

// End quiz by hiding questions,
// Stop timer and show final score

function quizEnd() {
	clearInterval(timerId);
	let endScreenEl =
		document.getElementById(
			"quiz-end"
		);
	endScreenEl.removeAttribute(
		"class"
	);
	let finalScoreEl =
		document.getElementById(
			"score-final"
		);
	finalScoreEl.textContent = time;
	questionsEl.setAttribute(
		"class",
		"hide"
	);
}

// End quiz if timer reaches 0

function clockTick() {
	time--;
	timerEl.textContent = time;
	if (time <= 0) {
		quizEnd();
	}
}

// Save score in local storage
// Along with users' name

function saveHighscore() {
	let name = nameEl.value.trim();
	if (name !== "") {
		let highscores =
			JSON.parse(
				window.localStorage.getItem(
					"highscores"
				)
			) || [];
		let newScore = {
			score: time,
			name: name,
		};
		highscores.push(newScore);
		window.localStorage.setItem(
			"highscores",
			JSON.stringify(highscores)
		);
		alert(
			"Your Score has been Submitted"
		);
	}
}

// Save users' score after pressing enter

function checkForEnter(event) {
	if (event.key === "Enter") {
		saveHighscore();
		alert(
			"Your Score has been Submitted"
		);
	}
}
nameEl.onkeyup = checkForEnter;

// Save users' score after clicking submit

submitBtn.onclick = saveHighscore;

// Start quiz after clicking start quiz

startBtn.onclick = quizStart;
