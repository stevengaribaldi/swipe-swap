import * as SecureStore from 'expo-secure-store';

const key = 'authToken';
const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log('error storing auth token');
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log('error getting auth token');
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log('token not removed error');
  }
};

export default {
  storeToken,
  getToken,
  removeToken,
};