import axios from 'axios';
import constants from '../constants';

const getAnimals = () => {
  return new Promise((resolve,reject) => {
    axios.get(`${constants.firebaseConfig.databaseURL}/mashups.json`)
      .then((result) => {
        const animalsArray = [];
        if (result.data !== null) {
          Object.keys(result.data).forEach((key) => {
            result.data[key].id = key;
            animalsArray.push(result.data[key]);
          });
        };
        resolve(animalsArray);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default getAnimals;
