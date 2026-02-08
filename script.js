// DOM elements
const title = document.getElementById("note-title");
const content = document.getElementById("note-content");
const noteBtn = document.getElementById("add-note-btn");
const saved = document.getElementById("notes-list");

// Load notes from localStorage
const notes = localStorage.getItem("notes")
  ? JSON.parse(localStorage.getItem("notes"))
  : [];

// Function to render a note
function renderNote(note) {
    const noteDiv = document.createElement("div");
    noteDiv.classList.add("note");

    const noteH3 = document.createElement("h3");
    noteH3.textContent = note.title;

    const noteP = document.createElement("p");
    noteP.textContent = note.content;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    noteDiv.append(noteH3, noteP, deleteBtn);
    saved.appendChild(noteDiv);

    // Delete functionality
    deleteBtn.addEventListener("click", () => {
        noteDiv.remove();
        const index = notes.findIndex(n => n.title === note.title && n.content === note.content);
        if (index > -1) {
            notes.splice(index, 1);
            localStorage.setItem("notes", JSON.stringify(notes));
        }
    });
}

// Render all existing notes on page load
notes.forEach(note => renderNote(note));

// Add new note
noteBtn.addEventListener("click", () => {
    const noteTitle = title.value.trim();
    const noteContent = content.value.trim();

    if (noteTitle.length === 0 || noteContent.length === 0) {
        console.log("Title or content is empty");
        return;
    }

    const newNote = { title: noteTitle, content: noteContent };

    // Save to array and localStorage
    notes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(notes));

    // Render new note
    renderNote(newNote);

    // Clear inputs
    title.value = "";
    content.value = "";
});
