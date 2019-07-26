
import React, { useState, useRef, useEffect } from 'react';
import Konva from 'konva';
import uuidv4 from 'uuidv4';

const LINE_OPTION = {
	x: 0,
	y: 0,
	points: [],
	stroke: 'red',
	tension: 0
};

const lines = {};

const generateLine = () => {
	return new Konva.Line(LINE_OPTION);
};

const findLine = id => {
	const line = lines[id];
	if (!line) throw new Error('Line with given id was not found.');

	return line;
};

const addLine = (id, line) => {
	lines[id] = line;
};

const drawLine = (id, points) => {
	const line = findLine(id);
	line.points(points);
	line.draw();
};

const addPoints = (id, x, y) => {
	const line = findLine(id);

	const isValidPositions = typeof x === 'number' && typeof y === 'number';
	if (!isValidPositions) return;

	line.points(line.points().concat([x, y]));
	line.draw();
};

export const useDrawing = () => {
  const drawingLineIdRef = useRef(null);
	const layerRef = useRef(null);
	const [isDrawing, setIsDrawing] = useState(false);

  const getDrawingLine = () => {
    return findLine(drawingLineIdRef.current);
  }

	const initLine = () => {
		const line = generateLine();
		const id = uuidv4();
		addLine(id, line);
    drawingLineIdRef.current = id;
	};

	const addLineToLayer = () => {
		if (!layerRef.current) return;

		layerRef.current.add(getDrawingLine());
	};

	const onStartDrawing = () => {
		setIsDrawing(true);
		initLine();
		addLineToLayer();
	};

	const onDrawing = e => {
		if (!isDrawing || !e.target.getPointerPosition) return;
		if (!getDrawingLine()) return;

		const { x, y } = e.target.getPointerPosition();
    addPoints(drawingLineIdRef.current, x, y);
	}

	const onFinishDrawing = () => {
		setIsDrawing(false);
	};

	return {
		layerRef,
		onStartDrawing,
		onDrawing,
		onFinishDrawing
	};
};
