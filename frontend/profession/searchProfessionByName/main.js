async function search() {
  const profession = getInputValue()

  alert(profession)

  await searchProfessionByName(profession)
}

function getInputValue () {
  const input = document.getElementById("profession").value;

  alert(input)

  return input
}

async function searchProfessionByName(profession) {
  const response = await fetch(`http://localhost:3333/professions/profession?name=${encodeURIComponent(profession.trim())}`)

  if (response.status === 204) {
    alert("Nenhuma profissão encontrada")

    return
  }

  const jsonResponse = await response.json()

  const professionBody = jsonResponse.data

  showProfession(professionBody)
}

function showProfession(profession) {
  document.getElementById("profession-element").innerHTML = `
  <div>
    <header>
      <div className="user-info">
        <strong>${profession.name}</strong>
        <span>${profession.salary}</span>
      </div>
    </header>
    <p>${profession.description}</p>
    <a href=https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(profession.name.trim())} target="_blank">Vagas no Linkedin</a>
  </div>
    `
}