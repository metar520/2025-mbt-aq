// /* @provengo summon selenium */

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


// This story logs in as a student, goes to a course, and attempts a quiz.
bthread('Student start to answer a quiz', function () {
  let session_student = new SeleniumSession("student").start(URL);

  sync({Request: Event("Login"), session: session_student, StudentData});
  sync({Request: Event("GoToCourse"), session: session_student});
  sync({Request: Event("TryToAnswerQuiz"), session: session_student, quizTitle: "MyQuizTest"});
});


// This story logs in as an admin, goes to a course, and hides the quiz from students.
bthread('Admin hides a quiz', function () {
  let session_admin = new SeleniumSession("admin").start(URL);

  sync({Request: Event("Login"), session: session_admin, AdminData});
  sync({Request: Event("GoToCourse"), session: session_admin});
  sync({Request: Event("HideQuiz"), session: session_admin, quizTitle: "MyQuizTest"});
});