import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [
    signUpUser((firstName, lastName) => ({ status: 'fulfilled', value: { firstName, lastName } })),
    uploadPhoto(fileName).then((error) => ({ status: 'rejected', value: error })),
  ];

  return Promise.all(promises)
    .then((results) => results)
    .catch(() => Promise.resolve());
}
