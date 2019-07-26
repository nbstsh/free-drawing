import React, { useState, useRef } from 'react';
import { Stage, Layer, Text } from 'react-konva';
import Konva from 'konva';

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

const useDrawing = () => {
	const lineRef = useRef(null);
	const layerRef = useRef(null);
	const [isDrawing, setIsDrawing] = useState(false);

	const initLine = () => {
		lineRef.current = new Konva.Line({
			x: 0,
			y: 0,
			points: [],
			stroke: 'red',
			tension: 1
		});
	};

	const addLineToLayer = () => {
		if (!layerRef.current || !lineRef.current) return;

		layerRef.current.add(lineRef.current);
	};

	const onStartDrawing = () => {
		setIsDrawing(true);
		initLine();
		addLineToLayer();
	};

	const onDrawing = e => {
		if (!isDrawing || !e.target.getPointerPosition) return;

		const line = lineRef.current;
		if (!line) return;

		const { x, y } = e.target.getPointerPosition();
		line.points(line.points().concat([x, y]));
		line.draw();
	};

	const onFinishDrawing = () => {
		setIsDrawing(false);
	};

	return {
		lineRef,
		layerRef,
		onStartDrawing,
		onDrawing,
		onFinishDrawing
	};
};

export default Palette;
