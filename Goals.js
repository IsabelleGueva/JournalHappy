const goalGrid = document.getElementById("goalGrid");
function openForm(){
    document.getElementById("goalForm").style.display = "block";
}
function submit() {
    // Step 1: Create a new magical post-it (newPostit)
    const newPostit = document.createElement("div");
    const deleteButton = document.createElement("button");
    newPostit.className = "newPostit"; // Give it the same class as the old post-it
    deleteButton.className = "deleteButton";


    // Step 2: Add the stickyNote.png image to our post-it
    const img = document.createElement("img");
    img.src = "stickyNote.png"; // Our magical sticker
    newPostit.appendChild(img); // Stick the image on the post-it
    newPostit.appendChild(deleteButton);
    deleteButton.addEventListener("click", function () {
    newPostit.remove();
    newPostit.style.display="none";})

    // Step 3: Change the secret message (individualGoal) based on user input
    const userTitle = document.getElementById("input-title").value; // Get the user's goal title
    const individualGoal = document.createElement("div");
    individualGoal.className = "individualGoal"; // Give it the same class as the old goal
    individualGoal.textContent = userTitle; // Show the user's goal title

    // Put the goal inside our post-it
    newPostit.appendChild(individualGoal);
    newPostit.appendChild(deleteButton);

    // Step 4: Place our new post-it on the goal grid
    const goalGrid = document.getElementById("goalGrid");
    goalGrid.appendChild(newPostit);
    //event.preventDefault();
    document.getElementById("goalForm").style.display = "none";
    saveGoal();
}

function saveGoal(){
    localStorage.setItem("goals", goalGrid.innerHTML);
}
function showGoal(){
    goalGrid.innerHTML = localStorage.getItem("goals");
}

showGoal();
