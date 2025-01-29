/*
 *  This is a good place to put common test data, project-wide constants, etc.
 */

const URL = 'http://localhost:8888/moodle500/';

const xpaths = {
  searchWindow: {
    searchInput: '//textarea[@aria-label="Search"]',
    searchButton: '//input[@aria-label="Google Search"]',
    feelingLuckyButton: '//input[@aria-label="I\'m Feeling Lucky"]'
    },

    // Login Page
    loginPage: {
      // loginLink -> usernameInput -> passwordInput -> submitButton
        usernameInputXpath: '//*[@id="username"]',
        passwordInputXpath: '//*[@id="password"]',
        submitButtonXpath: "//button[@id='loginbtn']",
    },

    // Course Page
    coursePage: {
      // myCourses -> courseLink -> quizLink -> threePoints -> availibilityOption -> showOption -> editMode -> 
      //    threePoints -> availibilityOption -> hideOption -> hiddenConfirmation
        myCoursesLinkXpath: "/html/body/div[2]/nav/div/div[1]/nav/ul/li[3]/a",
        courseLinkXpath:
            "/html/body/div[2]/div[3]/div/div[2]/div/section/div/aside/section/div/div/div[1]/div[2]/div/div/div[1]/div/div/div/div/div[1]/div/div/a/span[3]/span[2]",
        quizLinkXpath: "/html/body/div[2]/div[4]/div/div[3]/div/section/div/div/div/ul/li[1]/div/div[2]/ul/li/div/div[2]/div[2]/div/div/a",
        threePointsXpath: "/html/body/div[4]/div[5]/div/div[3]/div/section/div/div/div/ul/li[1]/div[1]/div[2]/ul/li/div[2]/div[2]/div[4]/div/div/div/div/a/i",
        availibilityOptionXpath: '//*[@id="actionmenuactionsubpanel-1"]',
        editModeXpath: "//label[contains(text(), 'Edit mode')]",
        hideOptionXpath: 
            "/html/body/div[4]/div[5]/div/div[3]/div/section/div/div/div/ul/li[1]/div[1]/div[2]/ul/li/div[2]/div[2]/div[4]/div/div/div/div/div/div[1]/div/div/div[2]/div[3]/a",
        quizFinishAttempButtonXpath: '//button[@id="submit"]',
        
    },

    // Quiz Page
    quizPage: {
      // quizLink -> quizPreviewLink -> quizAnswer -> quizSubmitButton -> confirmationMessage -> confirmationFinish
        quizLinkXpath: "//a[contains(@href, 'mod/quiz') and .//span[contains(text(), ${quizName})]]",
        quizPreviewLinkXpath: '//*[@id="region-main"]/div[2]/div[1]/div/div/form',
        quizAnswerXpath:
          "//label[contains(text(), 'True')]",
        quizFinishAttempButtonXpath: '//*[@id="mod_quiz-next-nav"]',
        quizSubmitAllAndFinishButtonXpath: "//button[contains(., 'Submit all and finish')]",
        quizSubmitAndFinishPopUpXpath:"/html/body/div[4]/div[2]/div/div/div[3]/button[2]",
        FinishReviewXpath:"/html/body/div[2]/div[5]/div/div[2]/div/section/div[2]/div[2]/a"
    }
}

// Used to store CSS selector strings for selecting HTML elements within the DOM.
const cssSelectors = {
  coursePage: {
      myCoursesLinkXpath: 'a[role="menuitem"]',
      courseLinkXpath: ".multiline[title='Course Under Test']",
      quizLinkXpath: 'a[href*="mod/quiz"]',
      quizFinishAttempButtonXpath: "button#submit"
  }
};
