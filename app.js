// Inputs --->

const form = document.querySelector("#form");
const userName = document.querySelector("#name-input");
const userAddress = document.querySelector("#address-input");
const userContactNum = document.querySelector("#contact-num-input");
const userEmail = document.querySelector("#e-mail-input");
const objective = document.querySelector("#objective-input");
const education = document.querySelector("#education-input");
const workExp = document.querySelector("#work-input");
const tech = document.querySelector("#technical-knowledge-input");
const dob = document.querySelector("#dob-input");
const fatherName = document.querySelector("#father-input");
const martialStatus = document.querySelector("#martial-input");
const nationality = document.querySelector("#nationality-input");
const lang = document.querySelector("#lang-input");
const hobby = document.querySelector("#hobby-input");
const declaration = document.querySelector("#declaration-input");

// Buttons --->

const addEducationBtn = document.querySelector("#add-education-btn");
const addWorkExpBtn = document.querySelector("#add-work-btn");
const addTechBtn = document.querySelector("#add-technical-btn");
const viewResumeBtn = document.querySelector("#view-resume-btn");


function addNewEducationField() {

    let newField = document.createElement("textarea");
    newField.classList.add("txt-area");

    let educationContainer = document.getElementById("education");

    educationContainer.insertBefore(newField, addEducationBtn);
}

function addNewWorkField() {

    let newField = document.createElement("textarea");
    newField.classList.add("txt-area");

    let workContainer = document.getElementById("work");

    workContainer.insertBefore(newField, addWorkExpBtn);
}

function addNewTechField() {

    let newField = document.createElement("textarea");
    newField.classList.add("txt-area");

    let techContainer = document.getElementById("tech");

    techContainer.insertBefore(newField, addTechBtn);
}