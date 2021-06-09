async function getUsers() {
  const response = await fetch("http://localhost:3333/users")

  const jsonResponse = await response.json()
  createUsers(jsonResponse.data)
}

getUsers()

async function createUsers(usersList) {
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