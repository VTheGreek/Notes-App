const title = document.getElementById("note-title");
const content = document.getElementById("note-content");
const noteBtn = document.getElementById("add-note-btn");
const saved = document.getElementById("notes-list");

noteBtn.addEventListener("click", () => {
    const noteTitle = title.value;
    const noteContent = content.value;

    console.log(noteTitle);
    console.log(noteContent);
    
    // Validation
    if(noteTitle.trim().length === 0 || noteContent.trim().length === 0) {
        console.log("Title or content is empty")
        return;
    }
    
    // Note creation
    const noteDiv = document.createElement("div");
    noteDiv.classList.add("note");

    const noteH3 = document.createElement("h3");
    noteH3.textContent = noteTitle;

    const noteP = document.createElement("p");
    noteP.textContent = noteContent;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    // Αppend the elements into the div
    noteDiv.appendChild(noteH3);
    noteDiv.appendChild(noteP);
    noteDiv.appendChild(deleteBtn);

    // Add div to notes list
    saved.appendChild(noteDiv);

    // Clear the inputs
    title.value = "";
    content.value = "";
})

