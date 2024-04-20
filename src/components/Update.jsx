import { useLoaderData } from "react-router-dom";


const Update = () => {
  const loadedUser = useLoaderData()
  console.log(loadedUser);
  const handleUpdate = e => {
    e.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const updatedUser = { name, email }
    console.log(updatedUser);


    fetch(`http://localhost:5000/users/${loadedUser._id}`,
      {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert('updated successfully')
        }
      })
  }
  return (
    <div>
      <h2>update name :{loadedUser.name}</h2>
      <form onSubmit={handleUpdate}>
        <input type="text" name="name" /><br />
        <input type="email" name="email" /><br />
        <input type="submit" value="update" />
      </form>
    </div>
  );
};

export default Update;