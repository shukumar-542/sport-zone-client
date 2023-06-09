export const imageUpload = async image => {
    const image_hosting_token = import.meta.env.VITE_image_upload_token
    const formData = new FormData();
    formData.append('image', image)
    const image_Hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`
    const response = await fetch(image_Hosting_url, {
        method : 'POST',
        body : formData
    })
    const data = await response.json()
    return data;

}