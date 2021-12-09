// A rectangle can be split up into a grid of 1x1 squares, the amount of which being equal to the product of the two dimensions of the rectangle. Depending on the size of the rectangle, that grid of 1x1 squares can also be split up into larger squares, for example a 3x2 rectangle has a total of 8 squares, as there are 6 distinct 1x1 squares, and two possible 2x2 squares. A 4x3 rectangle contains 20 squares.

// Your task is to write a function `findSquares` that returns the total number of squares for any given rectangle, the dimensions of which being given as two integers with the first always being equal to or greater than the second.

// Прямоугольник можно разделить на сетку из квадратов 1x1, размер которых равен произведению двух измерений прямоугольника. В зависимости от размера прямоугольника, эта сетка из квадратов 1x1 также может быть разделена на более крупные квадраты, например, прямоугольник 3x2 имеет всего 8 квадратов, так как есть 6 различных квадратов 1x1 и два возможных квадрата 2x2. Прямоугольник 4x3 содержит 20 квадратов. Ваша задача - написать функцию `findSquares`, которая возвращает общее количество квадратов для любого заданного прямоугольника, размеры которого заданы как два целых числа, причем первое всегда равно или больше второго.

// describe('Basic Tests', function(){
//   it("Test 3,2", function(){
//     Test.assertEquals(findSquares(3,2), 8);
//   });
//   it("Test 4,3", function(){
//     Test.assertEquals(findSquares(4,3), 20);
//   });
//   it("Test 11,4", function(){
//     Test.assertEquals(findSquares(11,4), 100);
//   });
// });


function findSquares(x,y){
  let sum = 0;
  for (let i =0; i<=x; i++ ){
    if(i <= y){
      sum += i*i;
    }else if(x <=i){
      sum+=i
    }
  }
  return sum;
}

console.log(findSquares(11,4));

