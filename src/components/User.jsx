// import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const user = () => {

  // const [seeUser, setSeeuserPro] = useState(userPro)

  const handleDelete = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/users/${_id}`,
      {
        method: 'DELETE',
        // headers: {
        //   'Content-Type': 'application/json'
        // },
      }
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert('successfully')
          // const remaining = seeUser._id.filter(singleuser._id !== _id)
          // setSeeuserPro(remaining)
        }
      })


  }

  const userPro = useLoaderData()
  return (
    <div>
      <h2>userPro:{userPro.length}</h2>
      {
        userPro.map(singleuser => <p key={singleuser._id}>{singleuser.name} : {singleuser.email} {singleuser._id} <button
          onClick={() => handleDelete(singleuser._id)}
        >Delete</button> </p>)
      }
    </div>
  );
};

export default user;