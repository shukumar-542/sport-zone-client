export const classapi = async (classData) => {
    // console.log(classData);
    const response = await fetch(`${import.meta.env.VITE_API_URL}/add-class`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(classData)
    })
    const data = await response.json()
    return data;
}

export const getAllClasses = async ()=>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/classes`)
    const data = await response.json()
    return data;
}


export const getClassByEmail = async (email) =>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/classes/${email}`)
    const data = await response.json();
    return data;
}