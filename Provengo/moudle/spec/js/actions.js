// function composeQuery(session, data) {
//   session.writeText(xpaths.searchWindow.searchInput, data.text)
// }

// function startSearch(session) {
//   with(session) {
//     click(xpaths.searchWindow.searchButton)
//   }
// }

// function feelLucky(session) {
//   with(session) {
//     click(xpaths.searchWindow.feelingLuckyButton)
//   }
// }


bthread("Login", function(session) {
  let event = sync({waitFor: any("Login")});
  let session_login = session;
  let student = event.data.StudentData;

  session_login.click(xpaths.loginPage.loginLinkXpath);

  let userName_userText = xpaths.loginPage.usernameInputXpath;
  let password_userText = xpaths.loginPage.passwordInputXpath;

  session_login.clear(userName_userText);
  session_login.writeText(userName_userText, student.UserName);

  session_login.clear(password_userText);
  session_login.writeText(password_userText, student.Password);

  session_login.click(xpaths.loginPage.submitButtonXpath);

  sync({request: Event("Login Done", {session: session_login})});
});


bthread("GoToCourse", function() {
  let event = sync({waitFor: any("GoToCourse")});
  let session_goToCourse = event.data.session;

  session_goToCourse.waitForVisibility(xpaths.coursePage.myCoursesLinkXpath);

  session_goToCourse.click(xpaths.coursePage.myCoursesLinkXpath);
  session_goToCourse.click(xpaths.coursePage.courseLinkXpath);

  sync({request: Event("GoToCourse Done", {session: session_goToCourse})});
});


bthread("TryToAnswerQuiz", function() {
  let event = sync({waitFor: any("TryToAnswerQuiz")});
  let session_tryToAnswerQuiz = event.data.session;

  // Select the quiz
  let quizFath = xpaths.coursePage.quizLink.replace('${quizName}', data.quizTitle);
  session_tryToAnswerQuiz.click(quizFath);
  
  // Answer the quiz
  session_tryToAnswerQuiz.click(xpaths.quizPage.quizPreviewLinkXpath);
  session_tryToAnswerQuiz.clear(xpaths.quizPage.quizAnswerXpath);
  session_tryToAnswerQuiz.writeText(xpaths.quizPage.quizAnswerXpath, data['some answer']);

  // Submit the quiz
  session_tryToAnswerQuiz.click(xpaths.quizPage.quizSubmitButtonXpath);
  
  sync({request: Event("TryToAnswerQuiz Done", {session: session_tryToAnswerQuiz})});
});


bthread("HideTheQuiz", function() {
  let event = sync({waitFor: any("HideTheQuiz")});
  let session_hideTheQuiz = event.data.session;

  // Select edit mode
  session_hideTheQuiz.waitForVisibility(xpaths.coursePage.editModeXpath);
  session_hideTheQuiz.click(xpaths.coursePage.editModeXpath);
  
  // Hide the quiz
  session_hideTheQuiz.waitForVisibility(xpaths.coursePage.threePointsXpathXpath);
  session_hideTheQuiz.click(xpaths.coursePage.threePoints);
  session_hideTheQuiz.click(xpaths.coursePage.availibilityOptionXpath);
  session_hideTheQuiz.waitForVisibility(xpaths.coursePage.hideOptionXpath);
  session_hideTheQuiz.click(xpaths.coursePage.hideOptionXpath);
  session_hideTheQuiz.close()
    
  sync({request: Event("HideTheQuiz Done", {session: session_hideTheQuiz})});
});
