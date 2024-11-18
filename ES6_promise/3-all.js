/* eslint-enable */
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
    return Promise.all([uploadPhoto(), createUser()])
    .then((userResponse) => {
        const [photo , user] = userResponse;
        console.log(`${photo.body}, ${user.firstName}, ${user.lastName}`);
    })
    .catch(() => {
        console.log('Signup system offline');
    });
}
