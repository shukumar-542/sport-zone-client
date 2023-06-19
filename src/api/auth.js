// saved user email in the database
export const savedUser = (user)=>{
    const currentUser = {
        email : user.email,
        name : user.displayName,
        image : user.image
    }
    fetch(`http://localhost:5000/users/${user?.email}`,{
        method : 'PUT',
        headers : {'content-type' : 'application/json'},
        body : JSON.stringify(currentUser)

    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
}

// set user to admin
export const userToAdmin = (id) =>{
    fetch(`http://localhost:5000/users/admin/${id}`,{
        method : 'PATCH',
        headers : {'content-type' : 'application/json'},
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })

}
export const userToInstructor = (id) =>{
    fetch(`http://localhost:5000/users/instructor/${id}`,{
        method : 'PATCH',
        headers : {'content-type' : 'application/json'},
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })

}

// get all user role
export const getRole = async email =>{
    const response  =await fetch(`http://localhost:5000/users/${email}`)
    const user =await response.json()
    return user?.role

}