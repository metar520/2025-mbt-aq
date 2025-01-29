/* @provengo summon selenium */

// /**
//  * This story opens a new browser window, goes to google.com, and searches for "Pizza".
//  */
// bthread('Search', function () {
//   let s = new SeleniumSession('search').start(URL)
//   composeQuery(s, { text: 'Pizza' })
//   startSearch(s)
// })

// /**
//  * This story opens a new browser window, goes to google.com, and searches for "Pasta" using the "I Feel Lucky" feature.
//  */
// bthread('Feeling lucky', function () {
//   let s = new SeleniumSession('lucky').start(URL)
//   composeQuery(s, { text: 'Pasta' })
//   feelLucky(s)
// })


/* @provengo summon selenium */

// Student answers a quiz
bthread('Student answer a quiz', function () {
  let session_student = new SeleniumSession("student");
  session_student.start(URL);

  pressLogin(session_student);
  enterUsername_student(session_student);
  enterPassword_student(session_student);
  submitLogin(session_student);
  goToCourse(session_student);
  openQuiz(session_student);
  answerQuiz(session_student);
  submitQuiz(session_student);

  // Ensure event is emitted after submission
  sync({
      request: Event("QuizSubmitted"),
      request: Ctrl.markEvent("QuizSubmitted")
  });

  bp.log.info("QuizSubmitted event emitted"); // Debugging
});

// Teacher hides a quiz
bthread('Teacher hides a quiz', function () {
  let session_teacher = new SeleniumSession("teacher");
  session_teacher.start(URL);

  pressLogin(session_teacher);
  enterUsername_teacher(session_teacher);
  enterPassword_teacher(session_teacher);
  submitLogin(session_teacher);
  goToCourse(session_teacher);

  // Ensure teacher correctly waits for the "QuizSubmitted" event before proceeding
  sync({ waitFor: Event("QuizSubmitted") });

  bp.log.info("QuizSubmitted event received, proceeding with quiz hiding"); // Debugging

  editModeQuiz(session_teacher);
  hideQuiz(session_teacher);

  bp.log.info("Quiz has been hidden successfully"); // Debugging
});


// Sync the two stories: the student answering the quiz and only then the teacher can hide the quiz.
// bthread("Student tries to answer quiz and then teacher hide the quiz", function() {
//   let session_student = new SeleniumSession("student");
//   let session_teacher = new SeleniumSession("teacher");
  
//   session_student.start(URL);
//   session_teacher.start(URL);
  
//   pressLogin(session_student);
//   enterUsername_student(session_student);
//   enterPassword_student(session_student);
//   submitLogin(session_student);
  
//   pressLogin(session_teacher);
//   enterUsername_teacher(session_teacher);
//   enterPassword_teacher(session_teacher);
//   submitLogin(session_teacher);
  
//   goToCourse(session_student);
//   openQuiz(session_student);
//   answerQuiz(session_student);
  
//   editModeQuiz(session_teacher);
//   hideQuiz(session_teacher);
// });
