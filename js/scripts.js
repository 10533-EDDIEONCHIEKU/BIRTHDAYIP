function getData(event) {
    event.preventdefault()
    const form = new FormData(event.target)
    const date = form.get("date")
    const gender = form.get("Gender")
    const dateObj = new Date(date)
    const dayborn = dateObj.getDay()
    const akanNameMale = ["Kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const akanNameFemale = ["Akosua", "Adwoa", "Akua", "Yaa", "Afua", "Ama"];
    let akanName = ""
    if (gender === "Male") {
        akanName = akanNameMale[dayborn]
    }
    else if (gender === "Female") {
        akanName = akanNameFemale[dayborn]
    }
    else {
        alert("invalid!")
    }
    console.log (akanName)
}   