async function getProfessions() {
  const response = await fetch("http://localhost:3333/professions")

  const jsonResponse = await response.json()
  createProfessions(jsonResponse.data)
}

getProfessions()

async function createProfessions(professionsList) {
  document.getElementById("professions").innerHTML = `
    <li className="profession-item">
      ${
        professionsList.map(profession => {
          return `
            <header>
              <div className="user-info">
                <strong>${profession.name}</strong>
                <span>${profession.salary}</span>
              </div>
            </header>
            <p>${profession.description}</p>
            <a href={https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(profession.name.trim())}} target="_blank">Vagas no Linkedin</a>          
          `
        })
      }
    </li>
  `
}