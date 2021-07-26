let googleUser = null

console.log("writeNote.js")
window.onLoad = () => {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            //this code runs if the user is logged in
            console.log("logged in as", user.displayName)
            googleUser = user
        } else {
            //this code runs if the user is not logged in
            console.log("not logged in")
        }
    })

    const createNoteButton = document.querySelector("#createNoteButton")
    console.log(createNoteButton)
    createNoteButton.addEventListener("click", () => {
        const noteTitle = document.querySelector("#noteTitle").value
        const noteText = document.querySelector("#noteText").value
        console.log(noteTitle, noteText)

        //write these values to the database
        firebase.database().ref(`/users/${googleUser.uid}`).push({
            title: noteTitle,
            text: noteText
        }).catch(error => {
            console.log("error writing new note: ", error)
        })
    })
}