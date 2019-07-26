import { db } from './firebase-init';

const getColRef = () => {
	return db.collection('positions');
};

const getDocRef = positionId => {
	const colRef = getColRef();
	return colRef.doc(positionId);
};

export const addPosition = async (x, y) => {
	const docRef = await getColRef().add({
		x,
		y
	});
	return docRef.id;
};

export const onPositionsSnapshot = (handler, errorHandler) => {
	return getColRef().onSnapshot(
		querySnap => {
			const positions = querySnap.docs.map(doc => ({
				id: doc.id,
				...doc.data()
			}));
			handler(positions);
		},
		err => {
			console.error(err);
			errorHandler && errorHandler(err);
		}
	);
};
