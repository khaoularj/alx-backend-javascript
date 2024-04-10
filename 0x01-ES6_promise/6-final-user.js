import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [
    signUpUser(firstName, lastName).then((value) => ({ status: 'fulfilled', value })),
    uploadPhoto(fileName).then((error) => ({ status: 'rejected', value: error })),
  ];

  return Promise.all(promises).catch((error) => {
    console.error('Error occurred during profile signup:', error);
    throw error;
  });
}
