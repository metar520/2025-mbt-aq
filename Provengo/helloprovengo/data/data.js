/*
 *  This is a good place to put common test data, project-wide constants, etc.
 */

const URL = 'http://localhost/';

// Intialize Moudle user data
const StudentData = {
  name: "Student",
  password: "StudentPassword1!"
}

// Intialize Moudle admin data
const AdminData = {
  name: "Admin",
  password: "AdminPassword1!"
}

const xpaths = {
  searchWindow: {
    searchInput: '//textarea[@aria-label="Search"]',
    searchButton: '//input[@aria-label="Google Search"]',
    feelingLuckyButton: '//input[@aria-label="I\'m Feeling Lucky"]'
    },

    // Login Page
    loginPage: {
      // loginLink -> usernameInput -> passwordInput -> submitButton
        loginLinkXpath: '//*[@id="usernavigation"]/div/div/span/a',
        usernameInputXpath: '//*[@id="username"]',
        passwordInputXpath: '//*[@id="password"]',
        submitButtonXpath: "//button[@id='loginbtn']",
    },

    // Course Page
    coursePage: {
      // myCourses -> courseLink -> quizLink -> threePoints -> availibilityOption -> showOption -> editMode -> 
      //    threePoints -> availibilityOption -> hideOption -> hiddenConfirmation
        myCoursesLinkXpath: "//*[contains(text(),'My courses') and @role='menuitem']",
        courseLinkXpath:
            "/html/body/div[2]/div[3]/div/div[2]/div/section/div/aside/section/div/div/div[1]/div[2]/div/div/div[1]/div/div/div/div[1]/div/div/a",
        quizLinkXpath: "//a[contains(@href, 'mod/quiz') and .//span[contains(text(), ${quizName})]]",
        threePointsXpath: "(//i[@class='icon fa fa-ellipsis-v fa-fw '])[4]",
        availibilityOptionXpath: "//*[@id='actionmenuactionsubpanel-3']",
        showOptionXpath:
            "/html[1]/body[1]/div[4]/div[5]/div[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/ul[1]/li[2]/div[2]/ul[1]/li[1]/div[2]/div[2]/div[5]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/a[1]",
        editModeXpath: "//label[contains(text(), 'Edit mode')]",
        hideOptionXpath: 
            "/html[1]/body[1]/div[4]/div[5]/div[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/ul[1]/li[2]/div[2]/ul[1]/li[1]/div[2]/div[2]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/a[1]",
        hiddenConfirmationXpath:
            "/html[1]/body[1]/div[4]/nav[1]/div[1]/nav[1]/ul[1]/li[1]/a[1]",
        quizSubmitButtonXpath: '//button[@id="submit"]',
        verifyHideStudentXpath: "/html/body/div[2]/div[4]/div/div[3]/div/section/span/div/button"
    },

    // Quiz Page
    quizPage: {
      // quizLink -> quizPreviewLink -> quizAnswer -> quizSubmitButton -> confirmationMessage -> confirmationFinish
        quizLinkXpath: "//a[contains(@href, 'mod/quiz') and .//span[contains(text(), ${quizName})]]",
        quizPreviewLinkXpath: '//*[@id="region-main"]/div[2]/div[1]/div/div/form',
        quizAnswerXpath:
            "/html/body/div[2]/div[5]/div/div[2]/div/section/div[2]/form/div/div[1]/div[2]/div/div[2]/label/span[2]/input",
        quizSubmitButtonXpath: '//input[@type="submit"]',
        quizSubmitAllAndFinishButtonXpath: "/html/body/div[5]/div[2]/div/div/div[3]/button[2]",
        confirmationMessageXpath:
            "/html[1]/body[1]/div[2]/nav[1]/div[1]/nav[1]/ul[1]/li[1]/a[1]",
        confirmationFinishXpath:"/html[1]/body[1]/div[2]/div[5]/div[1]/div[3]/div[1]/section[1]/div[2]/h3[1]"
    }
}

// Used to store CSS selector strings for selecting HTML elements within the DOM.
const cssSelectors = {
  coursePage: {
      myCoursesLinkXpath: 'a[role="menuitem"]',
      courseLinkXpath: ".multiline[title='Course Under Test']",
      quizLinkXpath: 'a[href*="mod/quiz"]',
      quizSubmitButtonXpath: "button#submit"
  }
};