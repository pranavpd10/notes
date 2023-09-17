// model element
let body = document.getElementsByTagName("body")[0];
let modelEle = document.getElementById("model");
let addButton = document.getElementById("add-note-button");
let noNotesEle = document.getElementById("no-notes");
let buttSaveNote = document.getElementById("save-note");
let buttResetNote = document.getElementById("reset-note");
let noteContent = document.getElementById("note-content");
let noteTitle = document.getElementById("note-title");
// let closeNote = document.getElementById("close-note");

// notes saved wrapper div
let notesWrapper = document.getElementById("notes-wrapper");

function displayNoNotes() {
    let noOfNotes = notesWrapper.childElementCount;
    console.log(" no of ele ", noOfNotes);
    if (1 <= noOfNotes) {
        noNotesEle.style.display = "none";
    } else {
        noNotesEle.style.display = "block";
    }
}

document.body.onload = function () {
    console.log("loaded onload data");
    displayNoNotes();
}


console.log("body " + body);
// reset note data 

function resetNote() {
    noteTitle.value = "";
    noteContent.value = "";
}


// model cancel logic
let modelCancel = document.getElementById("model-cancel");
function closeModel() {
    // modelEle.style.display = 'none';
    // modelEle.classList.toggle("closed");
    modelEle.style.animation = "pop-close .3s ease-out";
    setTimeout(() => {
        modelEle.style.display = "none";
        resetNote();
    }, 240);
}

function openModel() {
    // modelEle.style.display = 'block';
    // modelEle.classList.toggle("closed");
    modelEle.style.animation = "pop-up .25s ease-out";
    modelEle.style.display = "block";
}

notesWrapper.addEventListener("click", (e) => {
    if(e.target.id == "close-note"){
        console.log("clicked closed button ", e.target.parentNode.remove());
        displayNoNotes();
    }
});

buttSaveNote.addEventListener("click", (e) => {
    let noteSavedDiv = document.createElement("div");
    let noteSavedH3 = document.createElement("h3");
    let noteSavedp = document.createElement("p");
    let noteSavedCloseButton = document.createElement("button");
    let noteSavedResetButton = document.createElement("button");

    noteSavedDiv.classList.add("note-saved", "center-page" ,"debBor" ,"width-90");
    noteSavedH3.classList.add("margin-5");
    noteSavedp.classList.add("margin-5");
    noteSavedCloseButton.classList.add("note-saved-button");
    noteSavedResetButton.classList.add("note-saved-button");

    noteSavedCloseButton.setAttribute("id","close-note");
    noteSavedResetButton.setAttribute("id","edit-note");

    
    noteSavedH3.innerText = document.getElementById("note-title").value;
    noteSavedp.innerText = document.getElementById("note-content").value;

    noteSavedCloseButton.innerHTML = "Mark and close";
    noteSavedResetButton.innerHTML = "Reset";

    noteSavedDiv.append(noteSavedH3,noteSavedp,noteSavedCloseButton,noteSavedResetButton);

    notesWrapper.append(noteSavedDiv);

    closeModel();
});


buttResetNote.addEventListener("click", resetNote);


