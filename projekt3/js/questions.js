
const questions = [
  {
    category: "niomos",
    questions: [
      {
        question: "Laps tuleb varsti 'kuST?'",
        options: ["Lasteajast", "Lasteajas", "Lasteajale"],
        correctAnswer: 0,
      },
      {
        question: "Ma lähen kuhu:",
        options: ["kodu", "kodus", "koju", "majas"],
        correctAnswer: 2,
      },
      {
        question: "Ema käib iga päev kuS?",
        options: ["poodi", "poes", "pood"],
        correctAnswer: 1,
      },
      {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets", "Cascading Simple Sheets"],
        correctAnswer: 0,
      },
      {
        question: "In JavaScript, how do you create a function?",
        options: ["create function myFunction()", "def function myFunction()", "func myFunction()", "function myFunction()"],
        correctAnswer: 3,
      },
      {
        question: "What does the 'typeof' operator do in JavaScript?",
        options: ["Checks the type of a variable", "Declares a variable", "Assigns a value to a variable", "Converts a variable to another type"],
        correctAnswer: 0,
      },
      {
        question: "In C, how do you define a function?",
        options: ["function myFunction()", "def myFunction()", "void myFunction()", "func myFunction()"],
        correctAnswer: 2,
      },
      {
        question: "Which of the following is a characteristic of Python?",
        options: ["Compiled language", "Dynamic typing", "Low-level language", "Static typing"],
        correctAnswer: 3,
      },
      {
        question: "Which language is used for Android development?",
        options: ["Python", "Java", "JavaScript", "C++"],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the 'forEach()' method in JavaScript?",
        options: ["Removes duplicate elements from an array", "Filters elements in an array", "Sorts an array", "Iterates through each element in an array"],
        correctAnswer: 3,
      },
      {
        question: "What does the 'return' keyword do in a function?",
        options: ["Ends the function and returns a value", "Continues the function", "Exits the function without value", "Ends the program execution"],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is NOT a semantic HTML element?",
        options: ["<header>", "<footer>", "<div>", "<article>"],
        correctAnswer: 2,
      },
      {
        question: "What is the primary purpose of a 'for' loop in programming?",
        options: ["Repeat code for a specified number of times", "Repeat code until a condition is true", "Define a function", "Evaluate conditions in the loop"],
        correctAnswer: 0,
      },
      {
        question: "Which data structure is ideal for LIFO (Last In First Out)?",
        options: ["Queue", "Stack", "Linked list", "Array"],
        correctAnswer: 1,
      },
      {
        question: "Which command is used in Git to store changes in the repository?",
        options: ["git commit", "git push", "git pull", "git add"],
        correctAnswer: 0,
      },
      {
        question: "What does the 'map()' function do in JavaScript?",
        options: ["Sorts an array", "Filters out items", "Creates a new array", "Modifies the original array"],
        correctAnswer: 2,
      },
      {
        question: "What is an IDE?",
        options: ["An Integrated Development Environment", "A function for code execution", "An interpreter", "An input method for writing code"],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is a feature of object-oriented programming?",
        options: ["Encapsulation", "Modularity", "Recursion", "Memory Management"],
        correctAnswer: 0,
      },
      {
        question: "What does SQL stand for?",
        options: ["Simple Question Language", "Systematic Query Language", "Standard Question Language", "Structured Query Language"],
        correctAnswer: 3,
      },
      {
        question: "Which of these is an example of a non-relational database?",
        options: ["MongoDB", "MySQL", "PostgreSQL", "Oracle"],
        correctAnswer: 0,
      },
      {
        question: "How do you write comment in CSS?",
        options: ["// This is a comment", "/* This is a comment */", "# This is a comment", "<!-- This is a comment -->"],
        correctAnswer: 1,
      },
      {
        question: "Which of the following algorithms is used to sort an array by comparing elements?",
        options: ["Bubble sort", "Insertion sort", "Quick sort", "Merge sort"],
        correctAnswer: 0,
      },
      {
        question: "What does the 'finally' block in Java do?",
        options: ["Handles all exceptions", "Attempts to handle runtime exceptions", "Executes code after try-catch", "Defines execution start point"],
        correctAnswer: 2,
      },
      {
        question: "Which data structure is best for searching elements quickly?",
        options: ["Binary search tree", "Array", "Linked list", "Queue"],
        correctAnswer: 0,
      },
      {
        question: "What is the correct syntax for a JavaScript if statement?",
        options: ["if (condition) {}", "if condition {}", "if {} else", "if {condition}"],
        correctAnswer: 0,
      },
    ],
  },

  {
    category: "estkaaned",
    questions: [
      {
        question: "Which is the longest river in the world?",
        options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        correctAnswer: 1,
      },
      {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "South Korea", "Japan", "Thailand"],
        correctAnswer: 2,
      },
      {
        question: "What is the largest ocean in the world?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: 3,
      },
      {
        question: "Which country has the largest population in the world?",
        options: ["India", "China", "United States", "Indonesia"],
        correctAnswer: 1,
      },
      {
        question: "Which country is known for the Great Barrier Reef?",
        options: ["Australia", "United States", "South Africa", "New Zealand"],
        correctAnswer: 0,
      },
      {
        question: "Which is the smallest country in the world?",
        options: ["Monaco", "Liechtenstein", "Vatican City", "San Marino"],
        correctAnswer: 2,
      },
      {
        question: "Which is the tallest mountain in the world?",
        options: ["K2", "Mount Kilimanjaro", "Mount Everest", "Mount Fuji"],
        correctAnswer: 2,
      },
      {
        question: "What is the capital of Canada?",
        options: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
        correctAnswer: 0,
      },
      {
        question: "Which desert is the largest hot desert in the world?",
        options: ["Gobi Desert", "Atacama Desert", "Sahara Desert", "Karakum Desert"],
        correctAnswer: 2,
      },
      {
        question: "Which country is known as the Land of the Midnight Sun?",
        options: ["Sweden", "Finland", "Norway", "Denmark"],
        correctAnswer: 2,
      },
      {
        question: "What is the longest mountain range in the world?",
        options: ["Himalayas", "Rocky Mountains", "Andes", "Alps"],
        correctAnswer: 2,
      },
      {
        question: "Which river flows through Egypt?",
        options: ["Amazon River", "Yangtze River", "Nile River", "Ganges River"],
        correctAnswer: 2,
      },
      {
        question: "Which is the largest island in the world?",
        options: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
        correctAnswer: 0,
      },
      {
        question: "What is the capital of Japan?",
        options: ["Beijing", "Seoul", "Tokyo", "Hong Kong"],
        correctAnswer: 2,
      },
      {
        question: "Which country has the most time zones?",
        options: ["United States", "Russia", "Canada", "Australia"],
        correctAnswer: 1,
      },
      {
        question: "Which country is known for the Eiffel Tower?",
        options: ["Germany", "Italy", "Spain", "France"],
        correctAnswer: 3,
      },
      {
        question: "Which is the most populous city in the world?",
        options: ["Tokyo", "Shanghai", "New York City", "Delhi"],
        correctAnswer: 0,
      },
      {
        question: "Which mountain range is located in South America?",
        options: ["Himalayas", "Rocky Mountains", "Appalachian Mountains", "Andes"],
        correctAnswer: 3,
      },
      {
        question: "Which continent is known as the 'Dark Continent'?",
        options: ["Asia", "Africa", "South America", "Europe"],
        correctAnswer: 1,
      },
      {
        question: "What is the capital of Brazil?",
        options: ["Buenos Aires", "Rio de Janeiro", "Brasília", "Sao Paulo"],
        correctAnswer: 2,
      },
      {
        question: "What is the official language of Brazil?",
        options: ["Spanish", "English", "Portuguese", "French"],
        correctAnswer: 2,
      },
      {
        question: "Which country has the most volcanoes?",
        options: ["Japan", "Indonesia", "United States", "Italy"],
        correctAnswer: 1,
      },
      {
        question: "Which city is known as the Big Apple?",
        options: ["Los Angeles", "New York City", "Chicago", "San Francisco"],
        correctAnswer: 1,
      },
      {
        question: "Which ocean is located to the east of Africa?",
        options: ["Indian Ocean", "Pacific Ocean", "Southern Ocean", "Atlantic Ocean"],
        correctAnswer: 3,
      },
      {
        question: "Which is the second largest continent by area?",
        options: ["Asia", "Africa", "North America", "Europe"],
        correctAnswer: 1,
      },
    ],
  },

  {
    category: "sonad",
    questions: [
      {
        question: "What does this word mean? Kasutamine",
        options: ["Destroy", "Say", "Use", "Create"],
        correctAnswer: 3,
      },
      {
        question: "What does this word mean? Kuulama",
        options: ["Listen", "Write", "Cooling"],
        correctAnswer: 0,
      },
      {
        question: "What does this word mean? Mäng",
        options: ["Music", "Game", "Book"],
        correctAnswer: 1,
      },
      {
        question: "What does this word mean? Aeg",
        options: ["Time", "Aegna Island", "Watch"],
        correctAnswer: 0,
      },
      {
        question: "What differences, between AEG and KELL?",
        options: ["Aeg we are using to say, that this is watches or what time it is, but Kell for other time or conversations", "Kell we are using to say, what time it is only and it's watch, but Aeg we are using for other time or for correct conversation", "I don't know"],
        correctAnswer: 1,
      },
      {
        question: "Who is this bird? PAPAGOI",
        options: ["Seagull", "Eagle", "Duck", "Parrot"],
        correctAnswer: 3,
      },
      {
        question: "How you would say 'Today is beautiful weather'?",
        options: ["Taevas on pilves", "Eile oli ilus ilm", "Täna on ilus ilm", "Täna on päike paistab"],
        correctAnswer: 2,
      },
      {
        question: "What does this word mean? Arvuti",
        options: ["AI", "Remote", "Computer", "Machine"],
        correctAnswer: 2,
      },
      {
        question: "What does this word mean? Weather",
        options: ["ilm", "toit", "linn", "lind"],
        correctAnswer: 0,
      },
      {
        question: "What does this word mean? Ausalt",
        options: ["Weird", "Fair", "Think", "Honestly"],
        correctAnswer: 3,
      },
      {
        question: "What does this word mean? Hind",
        options: ["Grade", "Number", "Price"],
        correctAnswer: 2,
      },
      {
        question: "What does this word mean? Kasutamine",
        options: ["40 cm²", "50 cm²", "55 cm²", "60 cm²"],
        correctAnswer: 0,
      },
      {
        question: "What does this word mean? Kasutamine",
        options: ["8", "7", "9", "6"],
        correctAnswer: 1,
      },
      {
        question: "What does this word mean? Kasutamine",
        options: ["20", "21", "22", "23"],
        correctAnswer: 1,
      },
      {
        question: "What does this word mean? Kasutamine",
        options: ["4", "6", "8", "12"],
        correctAnswer: 3,
      },
      {
        question: "What does this word mean? Kasutamine",
        options: ["24", "32", "48", "56"],
        correctAnswer: 0,
      },
      {
        question: "What does this word mean? Kasutamine",
        options: ["12", "15", "18", "24"],
        correctAnswer: 0,
      },
      {
        question: "What does this word mean? Kasutamine",
        options: ["80", "70", "60", "50"],
        correctAnswer: 1,
      },
      {
        question: "What does this word mean? Kasutamine",
        options: ["186", "196", "206", "216"],
        correctAnswer: 1,
      },
      {
        question: "What does this word mean? Kasutamine",
        options: ["50", "55", "60", "65"],
        correctAnswer: 1,
      },
      {
        question: "What does this word mean? Kasutamine",
        options: ["150", "160", "170", "180"],
        correctAnswer: 3,
      },
      {
        question: "What does this word mean? Kasutamine",
        options: ["28.26 cm²", "31.42 cm²", "36.14 cm²", "39.14 cm²"],
        correctAnswer: 0,
      },
      {
        question: "What does this word mean? Kasutamine",
        options: ["30", "32", "34", "28"],
        correctAnswer: 3,
      },
      {
        question: "What does this word mean? Kasutamine",
        options: ["30", "35", "40", "45"],
        correctAnswer: 2,
      },
      {
        question: "What does this word mean? Kasutamine",
        options: ["12", "15", "18", "20"],
        correctAnswer: 1,
      },
    ],
  },

  {
    category: "numbrid",
    questions: [
      {
        question: "What does this number mean? tuhat",
        options: ["one hundred", "one thousand", "ten", "fifthteen"],
        correctAnswer: 1,
      },
      {
        question: "Try to found, what is it equal in Estonian: 1000 * 10",
        options: ["tuhat", "kümme tuhat", "sada tuhat", "üks tuhat"],
        correctAnswer: 1,
      },
      {
        question: "How to pronouce this number? 17",
        options: ["Seitse sada", "Seitsekümmend", "Seitseteist"],
        correctAnswer: 2,
      },
      {
        question: "How to pronouce this number? 111",
        options: ["Sada üksteist", "üksteist sada", "üks tuhat"],
        correctAnswer: 0,
      },
      {
        question: "What does this number mean? sada kolmkümmend üks",
        options: ["121", "131", "141", "111"],
        correctAnswer: 1,
      },
      {
        question: "What does this number mean? kaheksasada nelikümmend viis",
        options: ["314", "567", "845", "999"],
        correctAnswer: 2,
      },
      {
        question: "Choose the correct answer for this numeration: 1,2,3,4,5,6,7,8,9,10",
        options: ["Üks, Kaheksa, Kuus, viis, neli, Kolm, Seitse, Kaks, Üheksa, Kümme", "Yksi, Kaksi, Kolma, Nelja, Viisi, Kuusi, Seitsemän, Kahdeksän, Yhdeksän, Kymmenen", "Ein, Zwei, Drei, Vier, Fünf, Sechs, Sieben, Acht, Noin, Zehn", "Üks, Kaks, Kolm, Neli, Viis, Kuus, Seitse, Kaheksa, Üheksa, Kümme"],
        correctAnswer: 3,
      },
      {
        question: "Try to found, what is it equal in Estonian: 150-35",
        options: ["sada kolmkümmend viis", "sada kakskümmend viis", "sada viisteist", "sada nelikümmend viis"],
        correctAnswer: 2,
      },
      {
        question: "Logical Question: How you can pronouce decimal numbers shorter, when you're talking with someone? For Example: 20",
        options: ["kakski", "ei või öelda lühikem", "kakskend", "kakskümmd"],
        correctAnswer: 2,
      },
      {
        question: "What is 3 + 5 in Estonian?",
        options: ["kaks", "kaheksa", "üheksa", "kümme"],
        correctAnswer: 1,
      },
      {
        question: "What is half of 30 in Estonian?",
        options: ["viis", "kakskümmend viis", "viisteist"],
        correctAnswer: 2,
      },
      {
        question: "What does mean number 2018?",
        options: ["Kaks tuhat kaheksateist", "Kaks tuhat kaheksakümmend", "Kaks sada kaheksa"],
        correctAnswer: 0,
      },
      {
        question: "What is the square of 5 in Estonian?",
        options: ["viis", "Kahekümne viis", "Kakskümmend viis", "kaksteist"],
        correctAnswer: 2
      },
      {
        question: "Historical Question: When Estonia was in independence for the first time?",
        options: ["tuhat üheksasaja kaheksateist kümnendal aastal.", "tuhat üheksasaja seitsmeteist kümnendal aastal.", "tuhat üheksasaja kuueteist kümnendal aastal.", "tuhat üheksasaja üheteist kümnendal aastal."],
        correctAnswer: 0,
      },
      {
        question: "How do you say 0 in Estonian?",
        options: ["null", "noll", "zero", "ei tea"],
        correctAnswer: 0,
      },
      {
        question: "If you have at the end of your sentence aastal, then how will write numbers? For Example, use number viis",
        options: ["viies", "viiendal", "viis", "viit"],
        correctAnswer: 1,
      },
      {
        question: "What does mean number 1998?",
        options: ["tuhat neli sada üksteist", "kaks tuhat üheksa", "tuhat üheksa sada üheksakümmend kaheksa", "tuhat seitse sada seitseteist"],
        correctAnswer: 2,
      },
      {
        question: "What is 0 - 5 in Estonian?",
        options: ["viis", "null", "miinus viis", "pluus viis"],
        correctAnswer: 2,
      },
      {
        question: "How to say `first` in Estonian?",
        options: ["pervoi", "üks", "esimene"],
        correctAnswer: 2,
      },
      {
        question: "How to say `third` in Estonian?",
        options: ["kolmas", "viies", "teine", "kolm"],
        correctAnswer: 0,
      },
      {
        question: "How to say `seventh` in Estonian?",
        options: ["kuues", "seitsmes", "seitsmendal", "seitse"],
        correctAnswer: 1,
      },
      {
        question: "How to say `in first` in Estonian?",
        options: ["esimeses", "esimesel", "esiteks", "üks"],
        correctAnswer: 0,
      },
      {
        question: "What is 67 - 34 in Estonian?",
        options: ["kolmkümmend kaks", "kolmkümmend kolm", "kolmteist", "kolmkümmend neli"],
        correctAnswer: 1,
      },
      {
        question: "Do you like our quiz? Don't worry about the colors.",
        options: ["Jah", "Ei"],
        correctAnswer: 0,
      },
      {
        question: "Rate this Quiz) Don't worry about the colors.",
        options: ["1", "2", "3", "4", "5"],
        correctAnswer: 0, 
      },
    ],
  },
];
