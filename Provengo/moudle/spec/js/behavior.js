// /* @provengo summon selenium */

// // /**
// //  * This story opens a new browser window, goes to google.com, and searches for "Pizza".
// //  */
// // bthread('Search', function () {
// //   let s = new SeleniumSession('search').start(URL)
// //   composeQuery(s, { text: 'Pizza' })
// //   startSearch(s)
// // })

// // /**
// //  * This story opens a new browser window, goes to google.com, and searches for "Pasta" using the "I Feel Lucky" feature.
// //  */
// // bthread('Feeling lucky', function () {
// //   let s = new SeleniumSession('lucky').start(URL)
// //   composeQuery(s, { text: 'Pasta' })
// //   feelLucky(s)
// // })

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

  // Emit event to signal quiz submission
  sync({ request: Event("QuizSubmitted") }); 
  bp.log.info("QuizSubmitted event emitted, waiting for teacher to proceed...");
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

  // Wait for the event before proceeding
  sync({ waitFor: Event("QuizSubmitted") });
  bp.log.info("Teacher received QuizSubmitted event, proceeding with hiding the quiz...");

  editModeQuiz(session_teacher);
  hideQuiz(session_teacher);

  bp.log.info("Quiz has been hidden successfully");
});