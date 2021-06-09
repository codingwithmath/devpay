async function search() {
  const tech = getInputValue()

  await searchUserByTech(tech)
}

function getInputValue () {
  const input = document.getElementById("tech").value;

  return input
}

async function searchUserByTech(tech) {
  const response = await fetch(`http://localhost:3333/users/tech?tech=${tech}`)

  if (response.status === 204) {
    alert("Nenhum usuário encontrado")

    return
  }

  const jsonResponse = await response.json()

  const users = jsonResponse.data

  showUsers(users)
}

function showUsers(usersList) {
  document.getElementById("users").innerHTML = `
    <li className="dev-item">
      ${
        usersList.map(user => {
          return `
            <header>
              <img src=${user.avatarUrl} alt=${user.username}></img>
              <div className="user-info">
                <strong>${user.name}</strong>
                <span>${user.techs.join(', ')}</span>
              </div>
            </header>
            <p>${user.bio}</p>
            <a href=https://github.com/${user.username}>GitHub profile</a>          
          `
        })
      }
    </li>
  `
}