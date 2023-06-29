import { getEnvironments } from "./getEnvironments";

export const fileUpload = async (file) => {
  
  const { VITE_CLOUD_NAME, VITE_PRESET_NAME } = getEnvironments();

  // if (!file) throw new Error('No file found')
  if (!file) return null;

  // const cloudUrl = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/upload`
  const cloudUrl = `https://api.cloudinary.com/v1_1/${VITE_CLOUD_NAME}/upload`;

  const formData = new FormData();
  // formData.append('upload_preset',`${import.meta.env.VITE_PRESET_NAME}`)
  formData.append("upload_preset", VITE_PRESET_NAME);
  formData.append("file", file);

  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });

    if (!resp.ok) throw new Error("Error when trying to upload image");

    const cloudResp = await resp.json();

    return cloudResp.secure_url;
  } catch (error) {
    // console.log(error)
    // throw new Error(error.message)
    return null;
  }
};
