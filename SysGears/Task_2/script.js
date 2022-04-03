//******************************************************************* */
const data = [
  { name: "John", email: "john2@mail.com" },
  { name: "John", email: "john1@mail.com" },
  { name: "Jane", email: "jane@mail.com" },
];

function filterObj(obj, filterValue, value, sortBy) {
  // obj, - наш объект по которому будем проводить поиск и сортировку
  // filterValue - поле в объекте по которому будте проходить фильтр
  // value - значение по которому фильтруем
  // sortBy - поле по которому будет происходить сортировка (в алфавитном порядке)

  let newData = obj
    .filter((item) => {
      return item[filterValue] == value;
    })
    .sort((a, b) => {
      return a[sortBy].localeCompare(b[sortBy]);
    });
  return newData;
}
console.log("Вариант_1 >", filterObj(data, "name", "John", "email"));

//************************************************************ */
const data1 = [
  { name: "John", email: "john2@mail.com" },
  { name: "John", email: "john1@mail.com" },
  { name: "Jane", email: "jane@mail.com" },
];
const condition1 = { include: [{ name: "John" }], sort_by: ["email"] };

const data2 = [
  { user: "mike@mail.com", rating: 20, disabled: false },
  { user: "greg@mail.com", rating: 14, disabled: false },
  { user: "john@mail.com", rating: 25, disabled: true },
];
const condition2 = { exclude: [{ disabled: true }], sort_by: ["rating"] };

function newFilter(obj, condition) {
  let key = "",
    value = "",
    sortBy = "";

  if (condition.include) {
    // Условие со сравнением
    key = Object.keys(...condition.include);
    value = Object.values(...condition.include);
    sortBy = Object.values(condition.sort_by);
    let newData = obj
      .filter((item) => {
        return item[key] == value;
      })
      .sort((a, b) => {
        return a[sortBy].localeCompare(b[sortBy]);
      });
    return newData;
    // Условие с исключением
  } else if (condition.exclude) {
    key = Object.keys(...condition.exclude);
    value = Object.values(...condition.exclude)[0];
    sortBy = Object.values(condition.sort_by);
    let newData = obj
      .filter((item) => {
        return item[key] != value;
      })
      .sort((a, b) => {
        return a.rating - b.rating;
      });
    return newData;
  }
}

console.log("Вариант_2_со сравнением >", newFilter(data1, condition1));
console.log("Вариант_2_с исключением >", newFilter(data2, condition2));
