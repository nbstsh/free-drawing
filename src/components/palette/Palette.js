import React from 'react';
import { Stage, Layer } from 'react-konva';

import { useDrawing } from '../../utils/lines';

const Palette = () => {
	const { layerRef, onStartDrawing, onDrawing, onFinishDrawing } = useDrawing(
		true
	);

	return (
		<Stage
			width={window.innerWidth}
			height={window.innerHeight}
			onMouseDown={onStartDrawing}
			onTouchStart={onStartDrawing}
			onMouseMove={onDrawing}
			onTouchMove={onDrawing}
			onMouseUp={onFinishDrawing}
			onTouchEnd={onFinishDrawing}
			onMouseLeave={onFinishDrawing}
		>
			<Layer ref={layerRef} />
		</Stage>
	);
};

export default Palette;
