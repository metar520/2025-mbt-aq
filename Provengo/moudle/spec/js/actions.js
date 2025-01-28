//@provengo summon ctrl
// 
// // function composeQuery(session, data) {
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


function pressLogin(session) {
  sync({request: Event("PressLogin")});

  with(session) {
    click('//*[@id="usernavigation"]/div/div/span/a')
  }
}

function enterUsername_student(session) {
  with(session) {
    clear(xpaths.loginPage.usernameInputXpath)
    writeText(xpaths.loginPage.usernameInputXpath, "Student")
  }
}

function enterPassword_student(session) {
  with(session) {
    clear(xpaths.loginPage.passwordInputXpath)
    writeText(xpaths.loginPage.passwordInputXpath, "StudentPassword1!")
  }
}

function enterUsername_teacher(session) {
  with(session) {
    clear(xpaths.loginPage.usernameInputXpath)
    writeText(xpaths.loginPage.usernameInputXpath, "Teacher")
  }
}

function enterPassword_teacher(session) {
  with(session) {
    clear(xpaths.loginPage.passwordInputXpath)
    writeText(xpaths.loginPage.passwordInputXpath, "TeacherPassword1!")
  }
}

function submitLogin(session) {
  with(session) {
    click(xpaths.loginPage.submitButtonXpath)
  }
  
  sync({request: Event("SubmitLogin"),
        request: Ctrl.markEvent("SubmitLogin")
  });
}

function goToCourse(session) {
  sync({waitFor: Event("SubmitLogin"),
        request: Event("GoToCourse")
  });

  with(session) {
    click(xpaths.coursePage.myCoursesLinkXpath)
    click(xpaths.coursePage.courseLinkXpath)
  }
  
  sync({request: Event("InCourse"),
    request: Ctrl.markEvent("InCourse")
});
}

function openQuiz(session) {
  sync({waitFor: Event("InCourse"),
        request: Event("TryOpenQuiz")
});

  with(session) {
    click(xpaths.coursePage.quizLinkXpath)
  }

  sync({request: Event("OpenedQuiz"),
        request: Ctrl.markEvent("OpenedQuiz")
  });
}

function answerQuiz(session) {
  with(session) {
    click(xpaths.quizPage.quizPreviewLinkXpath)
    clear(xpaths.quizPage.quizAnswerXpath)
    writeText(xpaths.quizPage.quizAnswerXpath, "some answer")
  }
}

function submitQuiz(session) {
  with(session) {
    click(xpaths.quizPage.quizSubmitButtonXpath)
  }
  
  sync({request: Event("QuizSubmitted"),
        request: Ctrl.markEvent("QuizSubmitted")
  });
  session.close()
}

function editModeQuiz(session) {
  sync({waitFor: Event("OpenedQuiz"),
        request: Event("EditModeQuiz")
  });

  with(session) {
    click(xpaths.coursePage.editModeXpath)
  }
}

function hideQuiz(session) {
  with(session) {
    click(xpaths.coursePage.threePointsXpath)
    click(xpaths.coursePage.availibilityOptionXpath)
    click(xpaths.coursePage.hideOptionXpath)
  }
  
  sync({request: Event("QuizHidden"),
        request: Ctrl.markEvent("QuizHidden")
  });
  session.close()
}