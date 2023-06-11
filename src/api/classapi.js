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

// update class status
export const updateClassStatus = async (id) =>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/classes/update/${id}`,{
        method : 'PATCH',
    })
    const data = await response.json()
    return data
}
export const updateClassStatusDeny = async (id) =>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/classes/deny/${id}`,{
        method : 'PATCH',
    })
    const data = await response.json()
    return data
}

export const feedback = async (id, feedbackData)=>{

    const response = await fetch(`${import.meta.env.VITE_API_URL}/classes/feedback/${id}`, {
        method: 'PATCH',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(feedbackData)
    })
    const data = await response.json()
    return data;
}

export const paymentHistory = async(email) =>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/payment/${email}`)
    const data = await response.json();
    return data;
}