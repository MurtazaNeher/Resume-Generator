console.log(window.screen.width * window.devicePixelRatio > Number(1170));

// Header
const header = document.getElementById("header");

// Introduction input
const inputForm = document.getElementById("input-form");
const nameInput = document.getElementById("name-input");
const addressInput = document.getElementById("address-input");
const contactNumInput = document.getElementById("contact-num-input");
const emailInput = document.getElementById("email-input");

// Introduction Output

const nameOuput = document.getElementById("name-output")
const addressOuput = document.getElementById("address-output")
const contactNumOuput = document.getElementById("contact-num-output")
const emailOuput = document.getElementById("email-output")


// Objective Input

const objectiveInputDiv = document.getElementById("objective-input-div");
const objectiveInput = document.getElementById("objective-input");

// Objective Output

const objectiveOutputDiv = document.getElementById("objective-output-div");
const objectiveOutput = document.getElementById("objective-output");
const objectiveOutputHeading = document.getElementById("objective-output-heading");


// Education Input
const educationInputDiv = document.getElementById("education-input-div");
const educationInput = document.querySelector("education-input");

// Education Output
const educationOutputDiv = document.getElementById("education-output-div");

const educationUl = document.getElementById("e-ul");

const educationOutputHeading = document.getElementById("education-output-heading");


// Work Input
const workInputDiv = document.getElementById("work-input-div");
const workInput = document.querySelector("work-input");

// Work Output
const workOutputDiv = document.getElementById("work-output-div");

const workUl = document.getElementById("w-ul");

const workOutputHeading = document.getElementById("work-output-heading")

// Tech Input
const techInputDiv = document.getElementById("tech-input-div");
const techInput = document.querySelector("tech-input");


// Tech Output
const techOutputDiv = document.getElementById("tech-output-div");

const techUl = document.getElementById("t-ul");

const techOutputHeading = document.getElementById("tech-output-heading");

// Personal Information Input
const personalInputDiv = document.getElementById("personal-input-div");

const dobInput = document.getElementById("dob-input");

const genderInput = document.getElementById("gender-input");

const martialInput = document.getElementById("martial-input");

const fatherInput = document.getElementById("father-input");

const nationalityInput = document.getElementById("nationality-input");

const langInput = document.getElementById("lang-input");

const hobbiesInput = document.getElementById("hobbies-input");

// Personal Information Output

const personalOutputDiv = document.getElementById("personal-output-div");

const personalOutputHeading = document.getElementById("personal-output-heading");

const dobOutput = document.getElementById("dob-output");

const genderOutput = document.getElementById("gender-output");

const martialOutput = document.getElementById("martial-output");

const fatherOutput = document.getElementById("father-output");

const nationalityOutput = document.getElementById("nationality-output");

const langOutput = document.getElementById("lang-output");

const hobbiesOutput = document.getElementById("hobbies-output");

const dobOutputRow = document.getElementById("dob-output-row");

const genderOutputRow = document.getElementById("gender-output-row");

const martialOutputRow = document.getElementById("martial-output-row");

const fatherOutputRow = document.getElementById("father-output-row");

const nationalityOutputRow = document.getElementById("nationality-output-row");

const langOutputRow = document.getElementById("lang-output-row");

const hobbiesOutputRow = document.getElementById("hobbies-output-row");



// Declaration Input
const declarationInputDiv = document.getElementById("declaration-input-div");

const declarationInput = document.getElementById("declaration-input");

// Declaration Output
const declarationOutputDiv = document.getElementById("declaration-output-div");

const declarationOutputHeading = document.getElementById("declaration-output-heading");

const declarationOutput = document.getElementById("declaration-output");

const nameOutputEnding = document.getElementById("name-output-ending");


// Generated Resume

const resume = document.getElementById("resume");
const resumeOutputHeading = document.getElementById("resume-output-heading");


// Buttons --->

const addEducationFieldBtn = document.getElementById("add-education-btn");
const addWorkFieldBtn = document.getElementById("add-work-btn");
const addTechFieldBtn = document.getElementById("add-tech-btn");
const generateResumeBtn = document.getElementById("generate-resume-btn");
const printBtn = document.getElementById("print-btn");
const editBtn = document.getElementById("edit-btn");



// Navbar
const editResumeNav = document.getElementById("edit-resume-nav");
const changeColorBtn = document.getElementById("change-color");
const changeFontBtn = document.getElementById("change-font");
const changeSizeBtn = document.getElementById("change-size");

const colors = document.getElementById("colors");
const fonts = document.getElementById("fonts");
const sizes = document.getElementById("text-sizes");

// Footer

const footer = document.getElementById("footer");

// Variables

let headingFontSize = 23;
let resumeHeadingFontSize = 33;

let contentFontSize = 16;

educationOutputHeading.style.display = "none";
workOutputHeading.style.display = "none";
techOutputHeading.style.display = "none";
// Functions

function addNewEducationField() {

    let newField = document.createElement("textarea");
    newField.classList.add("txt-area");
    newField.classList.add("education-txt-area");

    educationInputDiv.insertBefore(newField, addEducationFieldBtn);
}

function addNewWorkField() {

    let newField = document.createElement("textarea");
    newField.classList.add("txt-area");
    newField.classList.add("work-txt-area");

    workInputDiv.insertBefore(newField, addWorkFieldBtn);
}

function addNewTechField() {

    let newField = document.createElement("textarea");
    newField.classList.add("txt-area");
    newField.classList.add("tech-txt-area");

    techInputDiv.insertBefore(newField, addTechFieldBtn);
}

function generateResume() {
    printBtn.style.display = "block";
    editBtn.style.display = "block";
    inputForm.style.display = "none";
    resume.style.display = "block";
    editResumeNav.style.display = "block";

    if (nameInput.value) {

        nameOuput.innerHTML = nameInput.value;

        nameOutputEnding.innerHTML = nameInput.value;
    }


    if (addressInput.value) {
        addressOuput.innerHTML = addressInput.value;
    }

    if (contactNumInput.value) {
        contactNumOuput.innerHTML = "Contact Num : " + contactNumInput.value;
    }

    if (emailInput.value) {
        emailOuput.innerHTML = "e-mail : " + emailInput.value;
    }

    if (!objectiveInput.value) {
        objectiveInput.value = "To join an organization in which my hard work, sincerity & honesty will be grow along with the organization."
    }

    objectiveOutput.innerHTML = objectiveInput.value;

    // for education qualifiation

    let educationTxt = document.getElementsByClassName("education-txt-area")

    let str = "";

    for (e of educationTxt) {

        if (e.value) {
            educationOutputHeading.style.display = "block";
            str += `<li>${e.value} </li>`;
        }
    }

    educationUl.innerHTML = str;

    // for work Experience

    let workTxt = document.getElementsByClassName("work-txt-area")

    let str2 = "";

    for (e of workTxt) {
        if (e.value) {
            workOutputHeading.style.display = "block";
            str2 += `<li>${e.value} </li>`;
        }
    }

    workUl.innerHTML = str2;

    // for technical Knowledge

    let techTxt = document.getElementsByClassName("tech-txt-area")

    let str3 = "";

    for (e of techTxt) {
        if (e.value) {
            techOutputHeading.style.display = "block";
            str3 += `<li>${e.value} </li>`;
        }
    }

    techUl.innerHTML = str3;

    // for personal infromation
    let martialValue = document.querySelector('input[name = "martial-radio-btn"]:checked').value;

    martialInput.value = martialValue;

    let genderValue = document.querySelector('input[name = "gender-radio-btn"]:checked').value;

    genderInput.value = genderValue;



    if (dobInput.value || martialInput.value || genderInput.value || fatherInput.value || nationalityInput.value || langInput.value || hobbiesInput.value) {

        personalOutputDiv.style.display = "block";

        if (dobInput.value) {
            dobOutput.innerHTML = dobInput.value;
        } else {
            dobOutputRow.style.display = "none";
        }

        if (fatherInput.value) {
            fatherOutput.innerHTML = fatherInput.value;
        } else {
            fatherOutputRow.style.display = "none";
        }

        genderOutput.innerHTML = genderValue;
        martialOutput.innerHTML = martialValue;

        if (nationalityInput.value) {
            nationalityOutput.innerHTML = nationalityInput.value;
        } else {
            nationalityOutputRow.style.display = "none";
        }
        if (langInput.value) {
            langOutput.innerHTML = langInput.value;

        } else {
            langOutputRow.style.display = "none";
        }
        if (hobbiesInput.value) {
            hobbiesOutput.innerHTML = hobbiesInput.value;

        } else {
            hobbiesOutputRow.style.display = "none";
        }

    } else {
        personalOutputDiv.style.display = "none";
    }


    // For Declaration

    if (!declarationInput.value) {
        declarationInput.value = "I hereby declare that all the information given by me is true to the best of my knowledge and belief."
    };

    declarationOutput.innerHTML = declarationInput.value;

}

function printResume() {
    // let password = prompt("Please enter the password !")

    // if (password === "mrtznw") {



    // } else {
    //     alert("Wrong password ! Contact Developer for your password!")
    // }

    header.style.display = "none";
    resume.style.boxShadow = "none";
    resume.style.width = "100%";
    printBtn.style.display = "none";
    editResumeNav.style.display = "none";
    footer.style.display = "none";
    editBtn.style.display = "none";
    window.print();

    setTimeout(() => {
        header.style.display = "flex";
        resume.style.boxShadow = "2px 2px 20px rgba(0, 0, 0, 0.4), -2px -2px 20px rgba(0, 0, 0, 0.4)";

        if (window.screen.width * window.devicePixelRatio > Number(1170)) {
            resume.style.width = "70vw";

        } else {
            resume.style.width = "95vw";
        }
        printBtn.style.display = "block";
        editResumeNav.style.display = "block";
        footer.style.display = "flex";
        editBtn.style.display = "block";
    }, 1000);


}

function editResume() {

    header.style.display = "flex";
    resume.style.boxShadow = "2px 2px 20px rgba(0, 0, 0, 0.4), -2px -2px 20px rgba(0, 0, 0, 0.4)";
    resume.style.width = "70vw";
    printBtn.style.display = "none";
    editResumeNav.style.display = "none";
    inputForm.style.display = "flex";
    resume.style.display = "none";
    editBtn.style.display = "none";
    footer.style.display = "flex";

}


function showColors() {

    colors.style.display = "flex";
    changeColorBtn.classList.add("active");
}

function showFonts() {

    fonts.style.display = "flex";
    changeFontBtn.classList.add("active");

}

function showSizes() {

    sizes.style.display = "flex";
    changeSizeBtn.classList.add("active");

}

function changeColor1() {

    changeResumeColor("red");

}

function changeColor2() {

    changeResumeColor("blue");

}

function changeColor3() {

    changeResumeColor("green");

}

function changeColor4() {

    changeResumeColor("orangered");

}

function changeColor5() {

    changeResumeColor("#df4859");

}

function changeColor6() {

    changeResumeColor("#5086d9");

}

function changeColorCustom() {
    let color = document.getElementById("custom-color").value;

    changeResumeColor(color);
}

function changeResumeColor(color) {
    objectiveOutputHeading.style.color = color;
    educationOutputHeading.style.color = color;
    workOutputHeading.style.color = color;
    techOutputHeading.style.color = color;
    personalOutputHeading.style.color = color;
    declarationOutputHeading.style.color = color;
    nameOuput.style.color = color;
    resumeOutputHeading.style.color = color;

    objectiveOutputHeading.style.borderBottomColor = personalOutputHeading.style.borderBottomColor = educationOutputHeading.style.borderBottomColor = workOutputHeading.style.borderBottomColor = techOutputHeading.style.borderBottomColor = declarationOutputHeading.style.borderBottomColor = color;


}

function changeResumeFonts(font) {

    if (document.getElementById("change-headings-font").checked == true) {
        objectiveOutputHeading.style.fontFamily = personalOutputHeading.style.fontFamily = educationOutputHeading.style.fontFamily = workOutputHeading.style.fontFamily = techOutputHeading.style.fontFamily = declarationOutputHeading.style.fontFamily = resumeOutputHeading.style.fontFamily = font;
    }

    if (document.getElementById("change-content-font").checked == true) {
        resume.style.fontFamily = font;


    }

}

function changeFont1() {


    changeResumeFonts("'Roboto', sans-serif");
}

function changeFont2() {
    changeResumeFonts("'Koulen', cursive");
}

function changeFont3() {
    changeResumeFonts("'Source Serif 4', serif");
}

function changeFont4() {
    changeResumeFonts("'DM Serif Display', serif");
}

function changeFont5() {
    changeResumeFonts(" 'Baloo 2', cursive");
}

function increaseFontSize() {

    if (document.getElementById("change-headings-size").checked == true) {
        headingFontSize += 2;
        resumeHeadingFontSize += 2;
        let hfont = headingFontSize + "px";

        objectiveOutputHeading.style.fontSize = personalOutputHeading.style.fontSize = educationOutputHeading.style.fontSize = workOutputHeading.style.fontSize = techOutputHeading.style.fontSize = declarationOutputHeading.style.fontSize = hfont;

        hfont = resumeHeadingFontSize + "px";

        resumeOutputHeading.style.fontSize = hfont;
    }

    if (document.getElementById("change-content-size").checked == true) {
        contentFontSize += 1;
        let cfont = contentFontSize + "px";
        resume.style.fontSize = cfont;
    }

}

function decreaseFontSize() {

    if (document.getElementById("change-headings-size").checked == true) {

        headingFontSize -= 2;
        resumeHeadingFontSize -= 2;
        let hfont = headingFontSize + "px";


        objectiveOutputHeading.style.fontSize = personalOutputHeading.style.fontSize = educationOutputHeading.style.fontSize = workOutputHeading.style.fontSize = techOutputHeading.style.fontSize = declarationOutputHeading.style.fontSize = hfont;
        hfont = resumeHeadingFontSize + "px";
        resumeOutputHeading.style.fontSize = hfont;

    }

    if (document.getElementById("change-content-size").checked == true) {
        contentFontSize -= 1;
        let cfont = contentFontSize + "px";
        resume.style.fontSize = cfont;

    }

}