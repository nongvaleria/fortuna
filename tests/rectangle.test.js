import { getRectangleArea, getRectangleInfo, getRectanglePerimeter } from "../js/rectangle";

test('should output rectangle perimeter', () => {
    const output = getRectanglePerimeter(15, 2);
    expect(output).toBe(34);
});

test('should output rectangle area', () => {
    const output = getRectangleArea(15, 2);
    expect(output).toBe(30);
});

test('should output rectangle info', () => {
const output = getRectangleInfo (15, 2);
expect(output).toBe(console.log('The perimeter of a rectangle is 34 and the area is 30'));
});




