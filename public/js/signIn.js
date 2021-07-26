const signInButton = document.querySelector(".button")
signInButton.addEventListener("click", () => {
    console.log("Clicked!")
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider).then(result => {
        const user = result.user
        
        console.log("Login Success", user)
    })
    .catch(error => {
        console.log("login failed", error)
    })
})
    