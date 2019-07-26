import React, { useState, useRef } from 'react';
import { Stage, Layer, Text } from 'react-konva';
import Konva from 'konva';

import { useDrawing } from '../../utils/lines';

const Palette = () => {
	const {
		layerRef,
		onStartDrawing,
		onDrawing,
		onFinishDrawing
	} = useDrawing();

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
			<Layer ref={layerRef}>
				<Text text='this is sample text' />
			</Layer>
		</Stage>
	);
};

export default Palette;
