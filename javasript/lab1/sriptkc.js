function showName(name) {
    console.log("Ім'я студента: " + name)
}

function handleClick() {

    let element = document.getElementsByClassName("hello")[0]

    let studentName = "Саня Маха"

    element.innerText = studentName

    showName(studentName)
}



