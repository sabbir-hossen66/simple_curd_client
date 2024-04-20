
import './App.css'

function App() {
  const handleAddUser = (e) => {
    e.preventDefault()
    const nameInput = e.target.name;
    const emailInput = e.target.email;

    const name = nameInput.value;
    const email = emailInput.value;
    const user = { name, email };
    console.log(user);

    fetch('http://localhost:5000/users',
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          alert('successfully added')
          nameInput.value = '';
          emailInput.value = '';
        }
      })
  }

  return (
    <div>
      <h1>Hello mama</h1>
      <form onSubmit={handleAddUser}>
        <input type="name" name='name' id='name' placeholder='name' />
        <input type="email" name='email' id='email' placeholder='email' required />
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default App
