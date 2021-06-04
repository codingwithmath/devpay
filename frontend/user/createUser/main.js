async function createUser() {
  const myForm = document.getElementById('create-user-form');

  myForm.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(this)

    console.log(formData)

    const response = await fetch('http://localhost:3333/users', {
      method: 'post',
      body: formData
    })

    if (response.status === 201) {
      console.log('sucesso')
    }

    if (response.status !== 201) {
      console.error('error')
    }
  })
}

createUser()