import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const user = () => {
  const userPro = useLoaderData()
  const [seeUser, setSeeuser] = useState(userPro)

  const handleDelete = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/users/${_id}`,
      {
        method: 'DELETE',

      }
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert('successfully')
          const remaining = seeUser.filter(singleuser => singleuser._id !== _id);
          setSeeuser(remaining)

        }
      })


  }


  return (
    <div>
      <h2>userPro:{userPro.length}</h2>
      {
        userPro.map(singleuser => <p key={singleuser._id}>{singleuser.name} : {singleuser.email} {singleuser._id}
          <Link to={`/update/${singleuser._id}`}>Update</Link>
          <button
            onClick={() => handleDelete(singleuser._id)}
          >Delete</button> </p>)
      }
    </div>
  );
};

export default user;