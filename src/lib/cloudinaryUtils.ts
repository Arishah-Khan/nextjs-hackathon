const uploadImageToCloudinary = async (file: File) => {
    const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`;
    const CLOUDINARY_UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  
    // Check if the upload preset is defined
    if (!CLOUDINARY_UPLOAD_PRESET) {
      throw new Error("Cloudinary upload preset is not defined");
    }
  
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET); // Using the preset from environment
  
    try {
      const response = await fetch(CLOUDINARY_URL, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      
      // Returning the URL of the uploaded image
      return data.secure_url;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw new Error("Image upload failed");
    }
  };
  

  export default uploadImageToCloudinary