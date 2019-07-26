import { auth } from './firebase-init';

export const getCurrentUser = () => {
	return auth.currentUser;
};

export const signIn = async () => {
	return await auth.signInAnonymously();
};
