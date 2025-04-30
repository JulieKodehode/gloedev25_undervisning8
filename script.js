function buisnessCard() {
    console.log("Hei fra inni en funksjon");

    // Variabler som henter element øverst
    const h2Title = document.getElementById("title");
    console.log(h2Title);
    const pDescription = document.querySelector("#description");
    console.log(pDescription);
    const imgImage = document.querySelector("#image");
    console.log(imgImage);

    // Variabler som lagrer data i midten
    // Sett opp variabler for navn og tittel
    const firstName = "Julie";
    const lastName = "Isobelle";
    const fullName = firstName + " " + lastName;
    console.log(fullName);
    const description = "Kurs veileder";
    console.log(`${firstName} ${lastName}, ${description}.`)
    const image = "https://images.unsplash.com/photo-1745770998338-eb50b0c89b16?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    // Manipulerer variablene sammen
    h2Title.textContent = fullName;
    pDescription.textContent = description;
    imgImage.src = image;
    imgImage.alt = "A person walks a street in sunlight";
    imgImage.style.width = "100%";
    // imgImage.classList.add = "buisnessCardImage"

}
//buisnessCard();

const button = document.querySelector("#button");
console.log(button);
button.addEventListener("click", buisnessCard);
