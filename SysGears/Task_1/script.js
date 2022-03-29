const obj = {
  distance: { unit: "m", value: 0.5 },
  convert_to: "ft",
};

function converted(obj) {
  let unit = obj.distance.unit; // начальная единица измерения
  let value = obj.distance.value; // значение
  let convTo = obj.convert_to; // конечная единица измерения
  let convValue = 0; // промежуточная переменная конечного значения

  if (unit === convTo) {
    return { unit: convTo, value };
  }

  switch (unit) {
    case "mm": //Преобразование из mm в другие измерения
      return mmTo();
    case "cm": //Преобразование из см в другие измерения
      return cmTo();
    case "m": // Преобразование из метров в другие измерения
      return mTo();
    case "km": //Преобразование из километров в другие измерения
      return kmTo();
    case "ft": // Преобразовать из футов в другие измерения
      return ftTo();

    case "in": //Преобразование из дюймов в другие измерения
      return inTo();

    case "yd": //Преобразовать с ярдов в другие измерения
      return ydTo();
    default:
      return null;
  }

  function mmTo() {
    if (convTo === "m") {
      convValue = (value / 1000).toFixed(2);
      return { unit: convTo, value: convValue };
    }
    if (convTo === "in") {
      convValue = (value * 0.03937).toFixed(2);
      return { unit: convTo, value: convValue };
    }
    if (convTo === "ft") {
      convValue = (value * 0.0032808).toFixed(2);
      return { unit: convTo, value: convValue };
    }
    if (convTo === "cm") {
      convValue = (value / 10).toFixed(2);
      return { unit: convTo, value: convValue };
    }

    if (convTo === "km") {
      convValue = (value / 1000000).toFixed(2);
      return { unit: convTo, value: convValue };
    }
    if (convTo === "yd") {
      convValue = (value * 0.0010936).toFixed(2);
      return { unit: convTo, value: convValue };
    }
  }

  function mTo() {
    if (convTo === "ft") {
      convValue = (value * 3.281).toFixed(2);

      return { unit: convTo, value: convValue };
    }
    if (convTo === "cm") {
      convValue = (value * 100).toFixed(2);
      return { unit: convTo, value: convValue };
    }
    if (convTo === "in") {
      convValue = (value * 39.37).toFixed(2);
      return { unit: convTo, value: convValue };
    }
    if (convTo === "mm") {
      convValue = (value * 1000).toFixed(2);
      return { unit: convTo, value: convValue };
    }

    if (convTo === "km") {
      convValue = (value / 1000).toFixed(2);
      return { unit: convTo, value: convValue };
    }
    if (convTo === "yd") {
      convValue = (value * 39.37).toFixed(2);
      return { unit: convTo, value: convValue };
    }
  }
  function ftTo() {
    if (convTo === "m") {
      convValue = (value / 3.281).toFixed(2);
      return { unit: convTo, value: convValue };
    }
    if (convTo === "cm") {
      convValue = (value / 3.281 / 100).toFixed(2);
      return { unit: convTo, value: convValue };
    }
    if (convTo === "in") {
      convValue = (value * 12).toFixed(2);
      return { unit: convTo, value: convValue };
    }

    if (convTo === "mm") {
      convValue = (value / 3.281 / 100).toFixed(2);
      return { unit: convTo, value: convValue };
    }

    if (convTo === "km") {
      convValue = (value / 3280.8).toFixed(2);
      return { unit: convTo, value: convValue };
    }
    if (convTo === "yd") {
      convValue = (value * 0.33333).toFixed(2);
      return { unit: convTo, value: convValue };
    }
  }
  function inTo() {
    if (convTo === "m") {
      convValue = (value / 39.37).toFixed(2);
      return { unit: convTo, value: convValue };
    }
    if (convTo === "cm") {
      convValue = (value / 39.37 / 100).toFixed(2);
      return { unit: convTo, value: convValue };
    }
    if (convTo === "ft") {
      convValue = (value / 12).toFixed(2);
      return { unit: convTo, value: convValue };
    }
    if (convTo === "mm") {
      convValue = (value / 39.37 / 1000).toFixed(2);
      return { unit: convTo, value: convValue };
    }

    if (convTo === "km") {
      convValue = (value / 39370).toFixed(2);
      return { unit: convTo, value: convValue };
    }
    if (convTo === "yd") {
      convValue = (value * 0.027778).toFixed(2);
      return { unit: convTo, value: convValue };
    }
  }
  function cmTo() {
    if (convTo === "m") {
      convValue = (value / 100).toFixed(2);
      return { unit: convTo, value: convValue };
    }
    if (convTo === "in") {
      convValue = (value * 0.3937).toFixed(2);
      return { unit: convTo, value: convValue };
    }
    if (convTo === "ft") {
      convValue = (value * 0.032808).toFixed(2);
      return { unit: convTo, value: convValue };
    }
    if (convTo === "mm") {
      convValue = (value / 1000).toFixed(2);
      return { unit: convTo, value: convValue };
    }

    if (convTo === "km") {
      convValue = (value / 100000).toFixed(2);
      return { unit: convTo, value: convValue };
    }
    if (convTo === "yd") {
      convValue = (value * 0.010936).toFixed(2);
      return { unit: convTo, value: convValue };
    }
  }
  function kmTo() {
    if (convTo === "m") {
      convValue = (value / 100).toFixed(2);
      return { unit: convTo, value: convValue };
    }
    if (convTo === "in") {
      convValue = (value * 0.3937).toFixed(2);
      return { unit: convTo, value: convValue };
    }
    if (convTo === "ft") {
      convValue = (value * 0.032808).toFixed(2);
      return { unit: convTo, value: convValue };
    }
    if (convTo === "mm") {
      convValue = (value / 1000).toFixed(2);
      return { unit: convTo, value: convValue };
    }

    if (convTo === "cm") {
      convValue = (value / 100000).toFixed(2);
      return { unit: convTo, value: convValue };
    }
    if (convTo === "yd") {
      convValue = (value * 0.010936).toFixed(2);
      return { unit: convTo, value: convValue };
    }
  }
  function ydTo() {
    if (convTo === "m") {
      convValue = (value / 1.0936).toFixed(2);
      return { unit: convTo, value: convValue };
    }
    if (convTo === "in") {
      convValue = (value * 36).toFixed(2);
      return { unit: convTo, value: convValue };
    }
    if (convTo === "ft") {
      convValue = (value * 3).toFixed(2);
      return { unit: convTo, value: convValue };
    }
    if (convTo === "mm") {
      convValue = (value / 0.10936).toFixed(2);
      return { unit: convTo, value: convValue };
    }

    if (convTo === "cm") {
      convValue = (value / 0.010936).toFixed(2);
      return { unit: convTo, value: convValue };
    }
    if (convTo === "km") {
      convValue = (value / 1093.6).toFixed(2);
      return { unit: convTo, value: convValue };
    }
  }
}

// console.log(JSON.stringify(converted(obj)));
// console.log(converted(obj));

//*******************************************************
// Получение DOM-элементов
let refs = {
  form: document.querySelector(".form"),

  formLeft: document.querySelector(".form__left"),
  formInputIn: document.querySelector(".form__inputIn"),
  formSelectIn: document.querySelector(".selectIn"),

  formRight: document.querySelector(".form__right"),
  formInputTo: document.querySelector(".form__inputTo"),
  formSelectTo: document.querySelector(".selectTo"),
};

refs.form.addEventListener("click", (event) => {
  handleClick();
});

function handleClick() {
  let convInValue = refs.formInputIn.value;
  let convInVariable = refs.formSelectIn.value;
  let convToValue = refs.formInputTo.value;
  let convToVariable = refs.formSelectTo.value;

  // Работа с исходной величиной
  refs.formSelectIn.addEventListener("change", (e) => {
    convInVariable = e.target.value;
    convertedInForm();
  });

  refs.formInputIn.addEventListener("input", (e) => {
    convInValue = e.target.value;
    convertedInForm();
  });

  //*********************************

  refs.formSelectTo.addEventListener("change", (e) => {
    convToVariable = e.target.value;
    convertedInForm();
  });

  function convertedInForm() {
    //процес конвертации внутри формы (с выводом результата в HTML-разметку)
    let obj = {
      distance: { unit: convInVariable, value: convInValue },
      convert_to: convToVariable,
    };

    convToValue = converted(obj);
    if (convInValue === "") {
      refs.formInputTo.value = "";
    } else {
      refs.formInputTo.value = convToValue.value;
    }
  }
}

const selectedObj = [
  { unit: "m", name: "Метры" },
  { unit: "cm", name: "Сантиметры" },
  { unit: "mm", name: "Миллиметры" },
  { unit: "km", name: "Киллометры" },
  { unit: "in", name: "Дюймы" },
  { unit: "ft", name: "Футы" },
  { unit: "yd", name: "Ярды" },
];

function addSelected(arrayOptions) {
  arrayOptions.forEach((item) => {
    let text = `<option value=${item.unit}>${item.name}</option>`;
    let textActive = `<option value=${item.unit} selected>${item.name}</option>`;
    if (item.unit === "m") {
      refs.formSelectIn.insertAdjacentHTML("beforeend", textActive);
      refs.formSelectTo.insertAdjacentHTML("beforeend", text);
      return;
    }
    if (item.unit === "yd") {
      refs.formSelectIn.insertAdjacentHTML("beforeend", text);
      refs.formSelectTo.insertAdjacentHTML("beforeend", textActive);
      return;
    }
    refs.formSelectIn.insertAdjacentHTML("beforeend", text);
    refs.formSelectTo.insertAdjacentHTML("beforeend", text);
  });
}

addSelected(selectedObj);
