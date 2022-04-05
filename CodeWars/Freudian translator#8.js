// You probably know the 42 number as "The answer to life, the universe and everything" according to Douglas Adams' "The Hitchhiker's Guide to the Galaxy". For Freud, the answer was quite different.

// In the society he lived in, people-women in particular- had to repress their sexual needs and desires. This was simply how the society was at the time. Freud then wanted to study the illnesses created by this, and so he digged to the root of their desires. This led to some of the most important psychoanalytic theories to this day, Freud being the father of psychoanalysis.

// Now, basically, when a person hears about Freud, s/he hears "sex" because for Freud, everything was basically related to, and explained by sex.

// In this kata, the toFreud() function will take a string as its argument, and return a string with every word replaced by the explanation to everything, according to Freud. Note that an empty string, or no arguments, should result in the ouput being ""(empty string).

// Вы, вероятно, знаете число 42 как «Ответ на жизнь, вселенную и все остальное» согласно «Автостопом по Галактике» Дугласа Адамса. Для Фрейда ответ был совсем другим. В обществе, в котором он жил, людям, особенно женщинам, приходилось подавлять свои сексуальные потребности и желания. Таково было общество того времени. Затем Фрейд захотел изучить болезни, вызванные этим, и поэтому он докопался до корня их желаний. Это привело к появлению некоторых из наиболее важных психоаналитических теорий по сей день, причем Фрейд был отцом психоанализа. Теперь, в основном, когда человек слышит о Фрейде, он/она слышит слово «секс», потому что для Фрейда все в основном было связано с сексом и объяснялось им. В этом ката функция toFreud() принимает строку в качестве аргумента и возвращает строку, в которой каждое слово заменено объяснением всего, согласно Фрейду. Обратите внимание, что пустая строка или отсутствие аргументов должны привести к выводу "" (пустая строка).

function toFreud(string) {
  if (string.length === 0) {
    let str = "";
    return str;
  }

  let count = string.split(" ");
  let str = "";
  for (let i = 0; i < count.length; i++) {
    str += "sex ";
  }

  return str.trim();
}

console.log(toFreud("dsfg dsfg asdg dfg g"));
