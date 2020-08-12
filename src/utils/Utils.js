import ImagePicker from 'react-native-image-picker';

const getFileNameFromUri = (uri) => {
  let getFilename = uri.split("/");
  return getFilename[getFilename.length - 1];
}
  
const showImagePicker = (title) => {
  const options = {
    title,
    mediaType: 'photo',
    allowsEditing: true,
    storageOptions: {
      skipBackup: true,
      path: 'images',
      cameraRoll: true,
      waitUntilSaved: true,
    },
  };
  return new Promise(((resolve, reject) => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        reject('User cancelled image picker');
      } else if (response.error) {
        reject('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        reject('User tapped custom button: ', response.customButton);
      } else {
        let res = response;
        if (res.fileName == null) {
          res.fileName = getFileNameFromUri(response.uri);
        }
        resolve(res);
      }
    });
  }))
}

const showVideoPicker = (title) => {
  const options = {
    title,
    takePhotoButtonTitle: 'Take a Video',
    mediaType: 'video',
    allowsEditing: true,
    durationLimit: 60,
    storageOptions: {
      skipBackup: true,
      path: 'videos',
      cameraRoll: true,
      waitUntilSaved: true,
    },
  };
  return new Promise(((resolve, reject) => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        reject('User cancelled image picker');
      } else if (response.error) {
        reject('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        reject('User tapped custom button: ', response.customButton);
      } else {
        let res = response;
        if (res.fileName == null) {
          res.fileName = getFileNameFromUri(response.uri);
        }
        if (res.type == null) {
          res.type = 'video';
        }
        resolve(res);
      }
    });
  }));
}

export default {
  showImagePicker,
  showVideoPicker,
};