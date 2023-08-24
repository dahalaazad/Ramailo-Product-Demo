import Toast from 'react-native-toast-message';

export const showToast = (type, title) => {
  Toast.show({
    type: type,
    text1: title,
    visibilityTime: 5000,
    autoHide: true,
  });
};
