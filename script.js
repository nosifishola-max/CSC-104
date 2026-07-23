/* =========================================================
   CSC 104 — Internet Technology CBT Practice
   All logic + 60-question bank derived from the course note
   ========================================================= */

(function(){
"use strict";

/* -----------------------------------------------------------
   1. QUESTION BANK (60 questions)
   Each question: text, options[4], correctIndex (0-based, before shuffle),
   explanation
------------------------------------------------------------ */
const QUESTION_BANK = [
// ---------- WWW / evolution ----------
{
  text:"According to the course note, the World Wide Web (WWW) is best described as:",
  options:[
    "A physical network of cables connecting computers worldwide",
    "A collection of internet resources, hyperlinked text, audio, video and remote sites accessed via browsers using standards such as HTTP and TCP/IP",
    "A single website that hosts all information on the internet",
    "A type of computer hardware used for networking"
  ],
  correct:1,
  explain:"The note defines the WWW as a collection of internet resources (FTP, telnet), hyperlinked text/audio/video and remote sites accessible through browsers using HTTP and TCP/IP."
},
{
  text:"Who created the World Wide Web, and in which year?",
  options:[
    "Bill Gates, in 1995",
    "Tim Berners-Lee, in 1989",
    "Steve Jobs, in 1991",
    "Vint Cerf, in 1983"
  ],
  correct:1,
  explain:"The Web was created in 1989 by UK physicist Tim Berners-Lee while working at CERN in Switzerland."
},
{
  text:"At which organisation was the World Wide Web created?",
  options:["NASA","CERN","MIT","IBM"],
  correct:1,
  explain:"Tim Berners-Lee created the Web at CERN (European Organization for Nuclear Research) in Switzerland."
},
{
  text:"By what year did the World Wide Web become available to anyone using the internet?",
  options:["1989","1991","1995","2000"],
  correct:1,
  explain:"The note states that by 1991 the Web became available to anyone using the internet."
},
{
  text:"In the evolution of the Web, which stage is described as 'The Social Web'?",
  options:["Web 1.0","Web 2.0","Web 3.0","Web 4.0"],
  correct:1,
  explain:"Web 2.0 is described as the Social Web, characterised by wikis, blogs and mashups."
},
{
  text:"Web 3.0 is best characterised in the note as:",
  options:[
    "The classic web of browsers, email and instant messaging",
    "The social web of wikis, blogs and mashups",
    "The semantic 'web of data', accessible via any media, place or device",
    "A web accessible only through desktop browsers"
  ],
  correct:2,
  explain:"Web 3.0 (the Semantic Web) is shown as the 'web of data', usable from any media, any place, any device."
},
// ---------- Basic elements: HTML, URI, HTTP ----------
{
  text:"HTML stands for:",
  options:["Hyper Transfer Markup Language","Hyper Text Markup Language","Hyperlink Text Modern Language","High Text Markup Language"],
  correct:1,
  explain:"HTML is the Hyper Text Markup Language, the markup/formatting language for the Web."
},
{
  text:"URI stands for:",
  options:["Uniform Resource Identifier","Universal Reference Index","Unique Resource Internet","Uniform Reference Interface"],
  correct:0,
  explain:"URI (Uniform Resource Identifier) is a unique address used to identify a resource on the Web, also commonly called a URL."
},
{
  text:"HTTP stands for:",
  options:["High Transfer Text Protocol","Hyperlink Transfer Text Protocol","Hypertext Transfer Protocol","Home Text Transport Protocol"],
  correct:2,
  explain:"HTTP is the Hypertext Transfer Protocol, used to retrieve linked resources across the Web."
},
// ---------- Web architecture / HTTP features ----------
{
  text:"In the Web System Architecture described in the note, which tier includes the web server and application server (middleware)?",
  options:["Presentation tier","Business logics tier","Data management tier","Client tier"],
  correct:1,
  explain:"The Business Logics Tier (middleware) contains the web server and application server, sitting between the presentation tier and the data management tier."
},
{
  text:"Which tier of the Web System Architecture holds the database server (e.g. MySQL)?",
  options:["Presentation tier","Business logics tier","Data management tier","Application tier"],
  correct:2,
  explain:"The Data Management Tier holds the database server, such as MySQL."
},
{
  text:"HTTP has been the foundation for data communication on the Web since:",
  options:["1980","1985","1990","2000"],
  correct:2,
  explain:"The note states HTTP has been the foundation for data communication for the WWW since 1990."
},
{
  text:"HTTP being 'media independent' means that:",
  options:[
    "It can only transmit plain text",
    "Any type of data can be sent as long as client and server can handle the content, typically specified via MIME type",
    "It only works with images",
    "It requires a special media player"
  ],
  correct:1,
  explain:"HTTP is media independent: any data type can be sent provided both client and server know how to handle it, usually via the MIME type."
},
{
  text:"Which basic feature of HTTP means the server and client do not retain information between different requests?",
  options:["Statelessness","Media independence","Encryption","Compression"],
  correct:0,
  explain:"HTTP is stateless — a direct result of being connectionless — so neither client nor server retains information across different requests."
},
{
  text:"In the basic architecture of HTTP shown in the note, which component sits between the Web Client and the Database?",
  options:["DNS Server","Server Side Script","Web Browser","Cache Server"],
  correct:1,
  explain:"The diagram shows Web Client → Web Server → Server Side Script → Database, with the server-side script mediating between the server and the database."
},
// ---------- URL ----------
{
  text:"According to the note, a URL defines four things. Which of the following is one of them?",
  options:["Cookie","Port","Cache","Session ID"],
  correct:1,
  explain:"A URL defines protocol, host computer, port and path."
},
{
  text:"In a URL, the Protocol refers to:",
  options:[
    "The pathname of the file where information is located",
    "The client/server program used to retrieve documents, e.g. HTTP or FTP",
    "The computer where information is stored",
    "The port number of the server"
  ],
  correct:1,
  explain:"The Protocol is the client/server program used to retrieve a document; HTTP is the most common today, though FTP can also be used."
},
{
  text:"In a URL, the Host typically refers to:",
  options:[
    "The port number",
    "The computer on which the information is located, often aliased with a name beginning 'WWW'",
    "The file extension",
    "The browser being used"
  ],
  correct:1,
  explain:"The Host is the computer where the information is located; it is commonly given an alias beginning with 'WWW', though this is not mandatory."
},
// ---------- DNS ----------
{
  text:"What is the main purpose of the Domain Name System (DNS)?",
  options:[
    "To design web pages",
    "To locate and translate Internet domain names into IP addresses",
    "To store website files",
    "To encrypt web traffic"
  ],
  correct:1,
  explain:"DNS is the system that locates and translates Internet domain names into IP addresses so that user-friendly names can be used instead of raw numbers."
},
{
  text:"Why are domain names considered easier to use than IP addresses?",
  options:[
    "Because domain names are alphabetic and easier to remember",
    "Because domain names are shorter than IP addresses",
    "Because domain names never change",
    "Because domain names are only four digits long"
  ],
  correct:0,
  explain:"Because domain names are alphabetic, they are easier to remember than the numeric IP addresses on which the internet is actually based."
},
{
  text:"Which domain extension is associated with Nigeria in the note's geographical domain table?",
  options:[".NG",".NI",".NA",".GN"],
  correct:0,
  explain:"The note lists .NG as the domain extension for Nigeria under geographical domain names."
},
{
  text:"Which of these is a NON-geographical domain extension used for commercial organisations?",
  options:[".gov",".edu",".com",".ng"],
  correct:2,
  explain:".com is listed as the non-geographical extension for commercial organisations, while .edu is for educational institutions and .gov for government."
},
// ---------- IP addressing ----------
{
  text:"An IP address is best described as:",
  options:[
    "A name given only to web servers",
    "A number that uniquely identifies each host on the Internet, comprised of a host number and network prefix",
    "The title of a web page",
    "A type of HTML tag"
  ],
  correct:1,
  explain:"Every computer (host) on the Internet has at least one IP address that uniquely identifies it, made up of a network prefix and host number."
},
{
  text:"How many bits make up a standard IPv4 address?",
  options:["8 bits","16 bits","32 bits","64 bits"],
  correct:2,
  explain:"An IPv4 address is a 32-bit number, written as four octets (numbers) separated by periods."
},
{
  text:"An IPv4 address such as 192.168.1.1 is divided into how many octets?",
  options:["Two","Three","Four","Eight"],
  correct:2,
  explain:"An IPv4 address is written as four numbers (octets) separated by periods, each ranging from 0 to 255."
},
{
  text:"Which IP address class range covers addresses from 1 to 126?",
  options:["Class A","Class B","Class C","Class D"],
  correct:0,
  explain:"Class A addresses range from 1–126 according to the note's classification."
},
{
  text:"Which IP class is used for addresses ranging from 224–239?",
  options:["Class B","Class C","Class D","Class E"],
  correct:2,
  explain:"Class D addresses range from 224–239 in the classification given."
},
{
  text:"What is the reserved purpose of the IP address 127 (loopback)?",
  options:["Broadcasting","Loopback testing","Representing all IP addresses","Assigning to routers only"],
  correct:1,
  explain:"127 is a reserved address used specifically for loopback testing."
},
// ---------- Browsers, webpages, static/dynamic ----------
{
  text:"Which was the first Web browser with a graphical user interface, and when did it appear?",
  options:["Netscape, 1995","Mosaic, 1993","Internet Explorer, 1996","Chrome, 2008"],
  correct:1,
  explain:"Mosaic, which appeared in 1993, was the first Web browser with a graphical user interface."
},
{
  text:"According to the difference table in the note, which statement is TRUE?",
  options:[
    "A website consists of only one webpage",
    "A webpage is a collection of different linked websites",
    "A website is a collection of different web pages linked together with hyperlinks",
    "A webpage requires more programming skill than a website"
  ],
  correct:2,
  explain:"A website is defined as a collection of different web pages linked together by hyperlinks, while a webpage is a single hypertext document."
},
{
  text:"A static web page is best described as one that:",
  options:[
    "Changes content automatically at different times",
    "Is loaded on the client's browser exactly as stored on the server, and can only be read, not modified by the user",
    "Requires a database connection to load",
    "Can only be created using JavaScript"
  ],
  correct:1,
  explain:"Static web pages (flat/stationary pages) are loaded exactly as stored on the server and contain only static, read-only information."
},
{
  text:"What technology is credited with making it possible to change part of a dynamic web page without reloading the entire page?",
  options:["FTP","Ajax technology","DNS","HTTP cookies"],
  correct:1,
  explain:"The note states that Ajax technology makes it possible to change a portion of a dynamic web page without loading the entire page."
},
{
  text:"A client-side dynamic web page is processed using scripting such as:",
  options:["PHP","JavaScript, passed to the Document Object Model (DOM)","SQL on the server","MySQL queries"],
  correct:1,
  explain:"Client-side dynamic pages are processed with client-side scripting such as JavaScript, which is then passed into the DOM."
},
// ---------- HTML basics ----------
{
  text:"Who created HTML, and in what year?",
  options:["Bill Gates, 1993","Tim Berners-Lee, 1991","Marc Andreessen, 1995","Vint Cerf, 1989"],
  correct:1,
  explain:"HTML was created by Tim Berners-Lee in 1991, with HTML 2.0 published in 1999 as the first standard version."
},
{
  text:"Which tag is used to specify the text shown on a browser's title bar?",
  options:["<head>","<body>","<title>","<meta>"],
  correct:2,
  explain:"The <title> element, placed inside <head>, contains the page title shown in the browser's title bar."
},
{
  text:"What is an HTML attribute?",
  options:[
    "A separate CSS file",
    "A special word used inside a tag to specify additional information such as colour or alignment",
    "A type of JavaScript variable",
    "The main content between tags"
  ],
  correct:1,
  explain:"An attribute is a special word used inside a tag to add extra information to that tag, e.g. style='color:red;'."
},
{
  text:"A WYSIWYG HTML editor is best described as one that:",
  options:[
    "Requires the developer to type raw tags with no preview",
    "Lets a user see a live preview of the output as it would appear on a browser, often via drag-and-drop",
    "Only works for CSS files",
    "Compiles HTML into an executable program"
  ],
  correct:1,
  explain:"WYSIWYG ('what you see is what you get') editors like Adobe Dreamweaver show a live preview of the output and often support drag-and-drop, needing little HTML knowledge."
},
{
  text:"Which <meta> attribute would you use to define keywords for search engines?",
  options:["name='description'","name='keywords'","name='author'","http-equiv='refresh'"],
  correct:1,
  explain:"The keywords meta attribute, e.g. <meta name='keywords' content='...'>, is used by search engines when indexing a page."
},
{
  text:"Which tag pair is used to define a paragraph in HTML?",
  options:["<para></para>","<p></p>","<txt></txt>","<pg></pg>"],
  correct:1,
  explain:"The <p> and </p> tag pair defines a paragraph; browsers automatically add space before and after it."
},
{
  text:"Which tag pair is used for text intended to be a bibliographic citation, typically displayed in italics?",
  options:["<code></code>","<cite></cite>","<strong></strong>","<em></em>"],
  correct:1,
  explain:"<cite> indicates the enclosed text is a bibliographic citation (like a book or magazine) and is shown in italics by convention."
},
{
  text:"Which tag is used to create an ordered (numbered) list?",
  options:["<ul>","<ol>","<li>","<dl>"],
  correct:1,
  explain:"<ol> and </ol> create an ordered list, with items numbered automatically starting from 1; <li> tags mark each item."
},
{
  text:"Which attribute of the <img> tag provides alternate text shown if the image fails to load?",
  options:["src","alt","height","width"],
  correct:1,
  explain:"The alt attribute defines alternate text displayed when there is a problem loading the image."
},
{
  text:"To jump to a named section within the same page using <a name='section1'>, how is the target link written?",
  options:["<a href='section1'>","<a href='#section1'>","<a src='section1'>","<a link='section1'>"],
  correct:1,
  explain:"To jump to a named fragment, the href value is preceded by a '#' symbol, e.g. <a href='#section1'>Click here</a>."
},
{
  text:"Which tag is used to embed one HTML document inside another HTML document?",
  options:["<embed>","<iframe>","<object>","<include>"],
  correct:1,
  explain:"An <iframe> is an HTML document embedded inside another HTML document."
},
{
  text:"In an HTML <form>, which attribute specifies the server-side script that handles the submitted data?",
  options:["method","action","target","name"],
  correct:1,
  explain:"The action attribute of <form> points to the server-side script (e.g. a PHP file) that processes the submission."
},
{
  text:"Which input type is used specifically to mask characters as a user types, such as for a password field?",
  options:["<input type='text'>","<input type='password'>","<input type='hidden'>","<input type='email'>"],
  correct:1,
  explain:"<input type='password'> is a single-line text input that masks each character as it is typed."
},
{
  text:"The <textarea> tag's 'rows' and 'cols' attributes control:",
  options:[
    "The number of lines and the number of characters per line",
    "The font size and colour of the text",
    "The number of buttons in a form",
    "The width and height of an image"
  ],
  correct:0,
  explain:"'rows' defines the number of lines the <textarea> contains, and 'cols' defines the number of characters per line."
},
// ---------- CSS ----------
{
  text:"CSS stands for:",
  options:["Creative Style Sheets","Cascading Style Sheets","Computer Style Sheets","Colour Style Sheets"],
  correct:1,
  explain:"CSS stands for Cascading Style Sheets, used to control the look and feel of a web page."
},
{
  text:"Which is listed as an advantage of using CSS?",
  options:[
    "It always makes pages load slower",
    "It saves time by letting one style be reused across many pages, easing maintenance",
    "It removes the need for HTML entirely",
    "It cannot be used with mobile devices"
  ],
  correct:1,
  explain:"CSS saves time and eases maintenance: a style defined once (e.g. in an external file) can apply to many pages, and changes update all of them at once."
},
{
  text:"An internal style sheet is written:",
  options:[
    "In a separate .css file",
    "Directly inside a <style> element within the <head> section of the page",
    "As an attribute on each individual tag",
    "Only inside the <body> tag"
  ],
  correct:1,
  explain:"Internal style sheets are defined within a <style> element inside the <head> section of a single HTML page."
},
{
  text:"In the CSS rule 'h1 { color: blue; font-size: 12px; }', what is 'h1' called?",
  options:["A declaration","A property","A selector","A value"],
  correct:2,
  explain:"'h1' is the selector — it refers to the HTML element the style should apply to; 'color' and 'font-size' are properties with their values."
},
{
  text:"What is the key difference between a class selector and an ID selector?",
  options:[
    "A class selector can be applied to only one element, an ID selector to many",
    "A class selector can identify more than one element, while an ID selector should identify only one unique element",
    "There is no difference between them",
    "Class selectors only work with tables"
  ],
  correct:1,
  explain:"An ID selector should be unique to a single element, while a class selector (using '.') can be applied to multiple elements."
},
{
  text:"Which text-decoration value would produce an underline effect?",
  options:["line-through","overline","underline","none"],
  correct:2,
  explain:"text-decoration: underline; applies an underline effect beneath the text."
},
{
  text:"Which border-style value produces a 3D-looking border that appears to push the content inward?",
  options:["solid","dashed","inset","dotted"],
  correct:2,
  explain:"The 'inset' border-style value defines a 3D inset border effect, dependent on the border colour."
},
{
  text:"What does the CSS property 'border-collapse: collapse;' do to a table?",
  options:[
    "Removes all table borders permanently",
    "Merges the table and cell borders into a single border instead of separate ones",
    "Hides the entire table",
    "Adds rounded corners to the table"
  ],
  correct:1,
  explain:"By default, tables and their cells have separate borders; border-collapse: collapse; makes them share a single, unified border."
},
{
  text:"An element with 'position: fixed;' behaves in which way?",
  options:[
    "It moves with the normal page flow like a static element",
    "It stays in the same place on the viewport even when the page is scrolled",
    "It can only be placed inside a table",
    "It disappears when the page loads"
  ],
  correct:1,
  explain:"Fixed positioning is relative to the viewport, so the element stays in the same place on screen even as the page scrolls."
},
// ---------- JavaScript ----------
{
  text:"JavaScript is best described in the note as a:",
  options:[
    "Compiled, platform-dependent language used only on servers",
    "Platform independent, interpreted, object-oriented scripting language",
    "Markup language for structuring documents",
    "Database query language"
  ],
  correct:1,
  explain:"The note defines JavaScript as a platform-independent, interpreted, object-oriented scripting language embedded in HTML pages."
},
{
  text:"Which HTML tag is used to embed a JavaScript program directly in a page?",
  options:["<js>","<script>","<code>","<javascript>"],
  correct:1,
  explain:"The <script> tag (with an ending </script>) is used to write JavaScript in an HTML document."
},
{
  text:"In the expression 5 + 6 / 3, what is the result, following JavaScript's operator precedence rules?",
  options:["3.67","7","11 / 3","3"],
  correct:1,
  explain:"Division has higher precedence than addition, so 6/3 is evaluated first (=2), then 5+2 = 7."
},
{
  text:"What is the purpose of the 'break' statement inside a JavaScript loop?",
  options:[
    "It restarts the loop from the beginning",
    "It exits the loop early, and execution continues with the first statement after the loop",
    "It pauses the script permanently",
    "It converts the loop into a function"
  ],
  correct:1,
  explain:"'break' ends execution of the loop (or switch) immediately, and the program continues with the statement right after it."
},
];

/* -----------------------------------------------------------
   2. STATE
------------------------------------------------------------ */
const EXAM_DURATION_SECONDS = 30 * 60;

let state = {
  candidateName:"",
  questions:[],          // shuffled question objects, each with shuffled options + correctIndex remapped
  answers:[],             // selected option index per question, or null
  currentIndex:0,
  timeRemaining:EXAM_DURATION_SECONDS,
  timerId:null,
  startedAt:null,
  submitted:false,
  timeUsedSeconds:0
};

/* -----------------------------------------------------------
   3. UTILITIES
------------------------------------------------------------ */
function shuffle(array){
  const a = array.slice();
  for(let i = a.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildShuffledQuestions(){
  const shuffledQs = shuffle(QUESTION_BANK);
  return shuffledQs.map(q => {
    const optionOrder = shuffle(q.options.map((text, idx) => ({text, idx})));
    const newCorrectIndex = optionOrder.findIndex(o => o.idx === q.correct);
    return {
      text:q.text,
      options:optionOrder.map(o => o.text),
      correctIndex:newCorrectIndex,
      explain:q.explain
    };
  });
}

function formatTime(totalSeconds){
  const m = Math.floor(totalSeconds / 60).toString().padStart(2,"0");
  const s = Math.floor(totalSeconds % 60).toString().padStart(2,"0");
  return `${m}:${s}`;
}

function letterFor(i){ return String.fromCharCode(65 + i); }

function qs(sel){ return document.querySelector(sel); }
function qsa(sel){ return Array.from(document.querySelectorAll(sel)); }

/* -----------------------------------------------------------
   4. SCREEN NAVIGATION
------------------------------------------------------------ */
const screens = {
  welcome: qs("#screen-welcome"),
  instructions: qs("#screen-instructions"),
  exam: qs("#screen-exam"),
  result: qs("#screen-result"),
  review: qs("#screen-review")
};
const examShell = qs(".exam-shell");

function showScreen(name){
  Object.values(screens).forEach(s => s.classList.remove("screen--active"));
  screens[name].classList.add("screen--active");
  examShell.classList.toggle("exam-mode", name === "exam");
  window.scrollTo({top:0, behavior:"instant" in window ? "instant" : "auto"});
}

/* -----------------------------------------------------------
   5. WELCOME → INSTRUCTIONS
------------------------------------------------------------ */
const nameInput = qs("#candidateName");
const nameError = qs("#nameError");

qs("#btnToInstructions").addEventListener("click", () => {
  const val = nameInput.value.trim();
  if(!val){
    nameError.classList.add("show");
    nameInput.classList.add("error");
    nameInput.focus();
    return;
  }
  nameError.classList.remove("show");
  nameInput.classList.remove("error");
  state.candidateName = val;
  showScreen("instructions");
});

nameInput.addEventListener("keydown", e => {
  if(e.key === "Enter") qs("#btnToInstructions").click();
});
nameInput.addEventListener("input", () => {
  if(nameInput.value.trim()){
    nameError.classList.remove("show");
    nameInput.classList.remove("error");
  }
});

qs("#btnBackToWelcome").addEventListener("click", () => showScreen("welcome"));

/* -----------------------------------------------------------
   6. START EXAM
------------------------------------------------------------ */
qs("#btnStartExam").addEventListener("click", startExam);

function startExam(){
  state.questions = buildShuffledQuestions();
  state.answers = new Array(state.questions.length).fill(null);
  state.currentIndex = 0;
  state.timeRemaining = EXAM_DURATION_SECONDS;
  state.startedAt = Date.now();
  state.submitted = false;

  qs("#candidateChipName").textContent = state.candidateName;
  qs("#qTotalNum").textContent = state.questions.length;

  buildPalette();
  renderQuestion();
  startTimer();
  showScreen("exam");
}

/* -----------------------------------------------------------
   7. TIMER
------------------------------------------------------------ */
function startTimer(){
  clearInterval(state.timerId);
  updateTimerDisplay();
  state.timerId = setInterval(() => {
    state.timeRemaining--;
    updateTimerDisplay();
    if(state.timeRemaining <= 0){
      clearInterval(state.timerId);
      autoSubmit();
    }
  }, 1000);
}

function updateTimerDisplay(){
  const display = qs("#timerDisplay");
  display.textContent = formatTime(Math.max(0, state.timeRemaining));
  const chip = qs("#timerChip");
  chip.classList.toggle("timer--warn", state.timeRemaining <= 60);
}

/* -----------------------------------------------------------
   8. RENDER QUESTION
------------------------------------------------------------ */
const questionText = qs("#questionText");
const optionsList = qs("#optionsList");

function renderQuestion(){
  const idx = state.currentIndex;
  const q = state.questions[idx];

  qs("#qCurrentNum").textContent = idx + 1;
  const answered = state.answers[idx] !== null;
  const statusTag = qs("#qStatusTag");
  statusTag.textContent = answered ? "Answered" : "Unanswered";
  statusTag.classList.toggle("answered", answered);

  questionText.textContent = q.text;
  optionsList.innerHTML = "";

  q.options.forEach((optText, i) => {
    const div = document.createElement("div");
    div.className = "option" + (state.answers[idx] === i ? " selected" : "");
    div.setAttribute("role","button");
    div.setAttribute("tabindex","0");
    div.innerHTML = `<span class="option-letter">${letterFor(i)}</span><span class="option-text">${optText}</span>`;
    div.addEventListener("click", () => selectAnswer(i));
    div.addEventListener("keydown", e => {
      if(e.key === "Enter" || e.key === " "){ e.preventDefault(); selectAnswer(i); }
    });
    optionsList.appendChild(div);
  });

  qs("#progressFill").style.width = `${((idx + 1) / state.questions.length) * 100}%`;
  qs("#btnPrev").disabled = idx === 0;
  qs("#btnNext").textContent = idx === state.questions.length - 1 ? "Finish →" : "Next →";

  updatePaletteHighlight();
}

function selectAnswer(i){
  state.answers[state.currentIndex] = i;
  renderQuestion();
  updatePaletteCell(state.currentIndex);
  updatePaletteSummary();
}

qs("#btnClear").addEventListener("click", () => {
  state.answers[state.currentIndex] = null;
  renderQuestion();
  updatePaletteCell(state.currentIndex);
  updatePaletteSummary();
});

qs("#btnPrev").addEventListener("click", () => {
  if(state.currentIndex > 0){ state.currentIndex--; renderQuestion(); }
});
qs("#btnNext").addEventListener("click", () => {
  if(state.currentIndex < state.questions.length - 1){
    state.currentIndex++;
    renderQuestion();
  } else {
    requestSubmit();
  }
});

/* -----------------------------------------------------------
   9. PALETTE
------------------------------------------------------------ */
const paletteGrid = qs("#paletteGrid");

function buildPalette(){
  paletteGrid.innerHTML = "";
  state.questions.forEach((_, i) => {
    const btn = document.createElement("button");
    btn.className = "palette-cell";
    btn.textContent = i + 1;
    btn.setAttribute("aria-label", `Go to question ${i + 1}`);
    btn.addEventListener("click", () => {
      state.currentIndex = i;
      renderQuestion();
      closePaletteOnMobile();
    });
    paletteGrid.appendChild(btn);
  });
  updatePaletteSummary();
}

function updatePaletteCell(i){
  const cell = paletteGrid.children[i];
  if(!cell) return;
  cell.classList.toggle("answered", state.answers[i] !== null);
}

function updatePaletteHighlight(){
  qsa(".palette-cell").forEach((cell, i) => {
    cell.classList.toggle("current", i === state.currentIndex);
    cell.classList.toggle("answered", state.answers[i] !== null);
  });
}

function updatePaletteSummary(){
  const answeredCount = state.answers.filter(a => a !== null).length;
  const total = state.questions.length;
  qs("#paletteSummary").innerHTML =
    `<strong>${answeredCount}</strong> of <strong>${total}</strong> answered &middot; <strong>${total - answeredCount}</strong> remaining`;
}

/* mobile palette toggle */
const palettePane = qs(".palette-pane");
qs("#paletteToggle").addEventListener("click", () => palettePane.classList.add("open"));
qs("#paletteClose").addEventListener("click", () => palettePane.classList.remove("open"));
function closePaletteOnMobile(){
  if(window.innerWidth <= 980) palettePane.classList.remove("open");
}

/* -----------------------------------------------------------
   10. SUBMIT (manual + auto) with confirmation modal
------------------------------------------------------------ */
const modalOverlay = qs("#modalOverlay");
const modalBody = qs("#modalBody");

qs("#btnSubmit").addEventListener("click", requestSubmit);

function requestSubmit(){
  if(state.submitted) return;
  const unanswered = state.answers.filter(a => a === null).length;
  modalBody.textContent = unanswered > 0
    ? `You still have ${unanswered} unanswered question${unanswered > 1 ? "s" : ""}. Are you sure you want to submit now? This action cannot be undone.`
    : `You have answered every question. Submit your exam now? This action cannot be undone.`;
  modalOverlay.classList.add("show");
}

qs("#modalCancel").addEventListener("click", () => modalOverlay.classList.remove("show"));
qs("#modalConfirm").addEventListener("click", () => {
  modalOverlay.classList.remove("show");
  finalizeSubmit();
});

function autoSubmit(){
  if(state.submitted) return;
  modalOverlay.classList.remove("show");
  finalizeSubmit();
}

function finalizeSubmit(){
  if(state.submitted) return;
  state.submitted = true;
  clearInterval(state.timerId);
  state.timeUsedSeconds = EXAM_DURATION_SECONDS - Math.max(0, state.timeRemaining);
  qs("#btnSubmit").disabled = true;
  computeAndShowResult();
}

/* -----------------------------------------------------------
   11. RESULT
------------------------------------------------------------ */
function computeAndShowResult(){
  let correct = 0;
  state.questions.forEach((q, i) => {
    if(state.answers[i] === q.correctIndex) correct++;
  });
  const total = state.questions.length;
  const incorrect = total - correct;
  const percent = Math.round((correct / total) * 100);

  let grade, pass;
  if(percent >= 70){ grade = "A"; pass = true; }
  else if(percent >= 60){ grade = "B"; pass = true; }
  else if(percent >= 50){ grade = "C"; pass = true; }
  else if(percent >= 45){ grade = "D"; pass = true; }
  else if(percent >= 40){ grade = "E"; pass = false; }
  else { grade = "F"; pass = false; }

  qs("#resultCandidate").textContent = state.candidateName;
  qs("#resultScore").textContent = `${correct} / ${total}`;
  qs("#resultGrade").textContent = grade;
  const statusEl = qs("#resultStatus");
  statusEl.textContent = pass ? "PASS" : "FAIL";
  statusEl.className = "rs-value " + (pass ? "pass" : "fail");
  qs("#resultTime").textContent = formatTime(state.timeUsedSeconds);
  qs("#resultCorrect").textContent = correct;
  qs("#resultIncorrect").textContent = incorrect;
  qs("#scorePercent").textContent = `${percent}%`;

  const circumference = 2 * Math.PI * 70;
  const offset = circumference - (percent / 100) * circumference;
  const ringFill = qs("#scoreRingFill");
  ringFill.style.strokeDasharray = circumference;
  ringFill.style.strokeDashoffset = circumference;
  requestAnimationFrame(() => { ringFill.style.strokeDashoffset = offset; });

  buildReview();
  showScreen("result");
}

/* -----------------------------------------------------------
   12. REVIEW
------------------------------------------------------------ */
function buildReview(){
  const list = qs("#reviewList");
  list.innerHTML = "";
  state.questions.forEach((q, i) => {
    const userAnswer = state.answers[i];
    const isCorrect = userAnswer === q.correctIndex;
    const isSkipped = userAnswer === null;

    const item = document.createElement("div");
    item.className = "review-item";

    const flagClass = isSkipped ? "skipped" : (isCorrect ? "correct" : "wrong");
    const flagText = isSkipped ? "Skipped" : (isCorrect ? "Correct" : "Incorrect");

    let optionsHtml = "";
    q.options.forEach((optText, oi) => {
      let cls = "option";
      if(oi === q.correctIndex) cls += " correct-answer";
      else if(oi === userAnswer && !isCorrect) cls += " wrong-answer";
      optionsHtml += `<div class="${cls}"><span class="option-letter">${letterFor(oi)}</span><span class="option-text">${optText}</span></div>`;
    });

    item.innerHTML = `
      <div class="review-item-head">
        <span class="review-num">Q${i + 1}</span>
        <span class="review-flag ${flagClass}">${flagText}</span>
      </div>
      <div class="review-question">${q.text}</div>
      <div class="options-list">${optionsHtml}</div>
      <div class="review-explain"><strong>Why:</strong> ${q.explain}</div>
    `;
    list.appendChild(item);
  });
}

qs("#btnReview").addEventListener("click", () => showScreen("review"));
qs("#btnBackToResult").addEventListener("click", () => showScreen("result"));

/* -----------------------------------------------------------
   13. RETAKE
------------------------------------------------------------ */
qs("#btnRetake").addEventListener("click", () => {
  state = {
    candidateName: state.candidateName,
    questions:[], answers:[], currentIndex:0,
    timeRemaining:EXAM_DURATION_SECONDS, timerId:null,
    startedAt:null, submitted:false, timeUsedSeconds:0
  };
  qs("#btnSubmit").disabled = false;
  showScreen("welcome");
  nameInput.value = state.candidateName;
});

/* -----------------------------------------------------------
   14. Warn before leaving mid-exam
------------------------------------------------------------ */
window.addEventListener("beforeunload", (e) => {
  if(screens.exam.classList.contains("screen--active") && !state.submitted){
    e.preventDefault();
    e.returnValue = "";
  }
});

})();
