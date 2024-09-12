import { v2 as cloudinary } from 'cloudinary';

const fileUploader = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream({ resource_type: "auto" }, (error, result) => {
      if (error) {
        reject(error);  // Reject the promise if there's an error
      } else {
        resolve(result); // Resolve the promise with the result (uploaded image details)
      }
    });
    uploadStream.end(fileBuffer); // Pass the buffer to the upload stream
  });
};

export default fileUploader;
