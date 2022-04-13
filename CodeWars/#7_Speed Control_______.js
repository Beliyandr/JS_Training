// In John's car the GPS records every s seconds the distance travelled from an origin (distances are measured in an arbitrary but consistent unit). For example, below is part of a record with s = 15:

// x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]
// The sections are:

// 0.0-0.19, 0.19-0.5, 0.5-0.75, 0.75-1.0, 1.0-1.25, 1.25-1.50, 1.5-1.75, 1.75-2.0, 2.0-2.25
// We can calculate John's average hourly speed on every section and we get:

// [45.6, 74.4, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0]
// Given s and x the task is to return as an integer the *floor* of the maximum average speed per hour obtained on the sections of x. If x length is less than or equal to 1 return 0 since the car didn't move.

// Example:
// with the above data your function gps(s, x)should return 74

// Note
// With floats it can happen that results depends on the operations order. To calculate hourly speed you can use:

// (3600 * delta_distance) / s.

// В машине Джона GPS каждые s секунд записывает расстояние, пройденное от исходной точки (расстояния измеряются в произвольных, но согласованных единицах). Например, ниже часть записи с s = 15: х = [0,0, 0,19, 0,5, 0,75, 1,0, 1,25, 1,5, 1,75, 2,0, 2,25] Разделы: 0,0-0,19, 0,19-0,5, 0,5-0,75, 0,75-1,0, 1,0-1,25, 1,25-1,50, 1,5-1,75, 1,75-2,0, 2,0-2,25 Мы можем рассчитать среднюю часовую скорость Джона на каждом участке, и мы получим: [45,6, 74,4, 60,0, 60,0, 60,0, 60,0, 60,0, 60,0, 60,0] При заданных s и x задача состоит в том, чтобы вернуть в виде целого числа *пол* максимальной средней скорости в час, полученной на участках x. Если длина x меньше или равна 1, вернуть 0, так как машина не двигалась. Пример: с приведенными выше данными ваша функция gps(s, x) должна возвращать 74 Примечание С поплавками может случиться так, что результаты зависят от порядка операций. Для расчета часовой скорости вы можете использовать: (3600 * delta_distance)/с.
