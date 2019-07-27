import { db } from './firebase-init';
import { getCurrentUser } from './users';

const getColRef = () => {
	return db.collection('points');
};

const getDocRef = pointId => {
	const colRef = getColRef();
	return colRef.doc(pointId);
};

export const uploadPoints = async (id, x, y, color) => {
	if (!id) throw new Error('Id must be provided.');

	const isValidPositions = typeof x === 'number' && typeof y === 'number';
	if (!isValidPositions) return;

	const user = getCurrentUser();
	if (!user) throw new Error('User is not logged in.');

	const docRef = getDocRef(id);
	await docRef.set({
		userId: user.uid,
		x,
		y,
		color
	});
};

export const onPointsSnapshot = (handler, errorHandler) => {
	const user = getCurrentUser();
	if (!user) throw new Error('User is not logged in.');

	return getColRef().onSnapshot(
		querySnap => {
			const documents = querySnap.docs
				.map(doc => ({
					id: doc.id,
					...doc.data()
				}))
				.filter(doc => doc.userId !== user.uid);

			handler(documents);
		},
		err => {
			console.error(err);
			errorHandler && errorHandler(err);
		}
	);
};
