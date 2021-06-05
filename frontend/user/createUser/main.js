const myForm = document.getElementById('my-form');

myForm.addEventListener('submit', async (e) => {
  e.preventDefault()

  const formData = new FormData(myForm);

  const formDataSerialized = Object.fromEntries(formData);

  formDataSerialized.admin = false
  formDataSerialized.password = null

  console.log(formDataSerialized)

  try {
    const response = await fetch('http://localhost:3333/users', {
      method: 'post',
      body: JSON.stringify( formDataSerialized),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
    if (response.status === 201) {
      console.log('sucesso')
    }

    if (response.status !== 201) {
      console.error('error')
    }
  } catch (error) {
    console.error()
    
    alert("error")
  }

  document.forms['my-form'].reset()
})