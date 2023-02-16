import cloudinary from '../config/cloudinary'
export const uploadImage = async (file: any) => {
  let cloudinaryImage
  try {
    cloudinaryImage = await cloudinary.uploader.upload(file.path, {
      folder: 'TeamImages',
      use_filename: true
    })
  } catch (error) {
    return {
      statusCode: 400,
      message: 'cannot upload Image'
    }
  }

  return {
    statusCode: 201,
    data: cloudinaryImage
  }
}
export const uploadlicense = async (file: any) => {
  let cloudinaryImage1
  try {
    cloudinaryImage1 = await cloudinary.uploader.upload(file.path, {
      folder: 'TeamImages',
      use_filename: true
    })
  } catch (error) {
    return {
      statusCode1: 400,
      message: 'cannot upload Image'
    }
  }

  return {
    statusCode1: 201,
    data: cloudinaryImage1
  }
}
