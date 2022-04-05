// The prime numbers are not regularly spaced. For example from 2 to 3 the gap is 1. From 3 to 5 the gap is 2. From 7 to 11 it is 4. Between 2 and 50 we have the following pairs of 2-gaps primes: 3-5, 5-7, 11-13, 17-19, 29-31, 41-43

// A prime gap of length n is a run of n-1 consecutive composite numbers between two successive primes (see: http://mathworld.wolfram.com/PrimeGaps.html).

// We will write a function gap with parameters:

// g (integer >= 2) which indicates the gap we are looking for

// m (integer > 2) which gives the start of the search (m inclusive)

// n (integer >= m) which gives the end of the search (n inclusive)

// n won't go beyond 1100000.

// In the example above gap(2, 3, 50) will return [3, 5] or (3, 5) or {3, 5} which is the first pair between 3 and 50 with a 2-gap.

// So this function should return the first pair of two prime numbers spaced with a gap of g between the limits m, n if these numbers exist otherwise `nil or null or None or Nothing (or ... depending on the language).

// In C++, Lua: return in such a case {0, 0}. In F#: return [||]. In Kotlin, Dart and Prolog: return []. In Pascal: return Type TGap (0, 0).

// Examples:
// gap(2, 5, 7) --> [5, 7] or (5, 7) or {5, 7}

// gap(2, 5, 5) --> nil. In C++ {0, 0}. In F# [||]. In Kotlin, Dart and Prolog return []`

// gap(4, 130, 200) --> [163, 167] or (163, 167) or {163, 167}

// ([193, 197] is also such a 4-gap primes between 130 and 200 but it's not the first pair)

// gap(6,100,110) --> nil or {0, 0} or ... : between 100 and 110 we have 101, 103, 107, 109 but 101-107is not a 6-gap because there is 103in between and 103-109is not a 6-gap because there is 107in between.

// You can see more examples of return in Sample Tests.

// Note for Go
// For Go: nil slice is expected when there are no gap between m and n. Example: gap(11,30000,100000) --> nil

// Ref
// https://en.wikipedia.org/wiki/Prime_gap

//!
// Простые числа не расположены равномерно. Например, от 2 до 3 пробел равен 1. От 3 до 5 пробел равен 2. От 7 до 11 это 4. Между 2 и 50 у нас есть следующие пары простых чисел с двумя пробелами: 3-5, 5-7 , 11-13, 17-19, 29-31, 41-43 Промежуток между простыми числами длиной n - это последовательность n-1 последовательных составных чисел между двумя последовательными простыми числами (см. Http://mathworld.wolfram.com/PrimeGaps.html). Напишем функциональный пробел с параметрами: g (целое число> = 2), что указывает на пробел, который мы ищем. m (целое число> 2), что дает начало поиска (m включительно) n (целое число> = m), которое дает конец поиска (n включительно) n не выйдет за пределы 1100000.

// В приведенном выше примере пробел (2, 3, 50) вернет [3, 5] или (3, 5) или {3, 5}, который является первой парой между 3 и 50 с пробелом 2. Таким образом, эта функция должна возвращать первую пару из двух простых чисел, разделенных промежутком g между пределами m, n, если эти числа существуют, иначе `nil или null или None или Nothing (или ... в зависимости от языка). В C ++ Lua: в таком случае вернуть {0, 0}. В F #: return [||]. В Котлине, Дарт и Прологе: return []. В Паскале: вернуть тип TGap (0, 0). Примеры:

// пробел (2, 5, 7) -> [5, 7] или (5, 7) или {5, 7} пробел (2, 5, 5) -> ноль. На C ++ {0, 0}. В F # [||]. В Котлине Дарт и Пролог возвращают [] ` разрыв (4, 130, 200) -> [163, 167] или (163, 167) или {163, 167} ([193, 197] тоже такое простое число с четырьмя пробелами между 130 и 200, но это не первая пара) пробел (6,100,110) -> nil или {0, 0} или ...: между 100 и 110 у нас есть 101, 103, 107, 109, но 101-107 - это не 6-пробел, потому что между 103-109 и есть 103-109 а не 6-й промежуток, потому что между ними 107 дюймов. Вы можете увидеть больше примеров возврата в Образцах тестов.

// ([193, 197] is also such a 4-gap primes between 130 and 200 but it's not the first pair)

// gap(6,100,110) --> nil or {0, 0} or ... : between 100 and 110 we have 101, 103, 107, 109 but 101-107is not a 6-gap because there is 103in between and 103-109is not a 6-gap because there is 107in between.

// You can see more examples of return in Sample Tests.

// Note for Go
// For Go: nil slice is expected when there are no gap between m and n. Example: gap(11,30000,100000) --> nil

// Ref
