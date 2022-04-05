// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

// Graph

// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

// Завершите функцию, которая вычисляет площадь красного квадрата, когда в качестве входных данных задана длина дуги окружности A. Возвращает результат, округленный до двух знаков после запятой. Примечание: используйте значение π, указанное на вашем языке (Math::PI, M_PI, math.pi и т. д.)

// Formula = (4 * A) ^ (2 / PI) ^ 2;

function squareArea(A) {
  let square = (4 * Math.pow(A, 2)) / Math.pow(Math.PI, 2);

  return Number(square.toFixed(2));
}
