/*метры (m),
сантиметры (cm),
дюймы (in) Inches
футы (ft),

миллиметров (mm)
ярдов (yd)
  километров (km)
*/

const obj = {
  distance: { unit: "m", value: 0.5 },
  convert_to: "ft",
};

const obj2 = {
  distance: { unit: "m", value: 0.5 },
  convert_to: "cm",
};

const obj3 = {
  distance: { unit: "in", value: 0.5 },
  convert_to: "in",
};

const converted = (obj) => {
  let unit = obj.distance.unit; // начальная единица измерения
  let value = obj.distance.value; // значение
  let convTo = obj.convert_to; // конечная единица измерения
  let convValue = 0; // промежуточная переменная конечного значения

  if (unit === convTo) {
    return { unit: convTo, value };
  }

  switch (unit) {
    case "m": // Преобразование из метров в другие измерения
      return mTo();
    case "ft": // Преобразовать из футов в другие измерения
      return ftTo();

    case "in": //Преобразование из дюймов в другие измерения
      return inTo();

    case "cm": //Преобразование из см в другие измерения
      return cmTo();
    case "km": //Преобразование из километров в другие измерения
      return kmTo();
    case "yd": //Преобразовать с ярдов в другие измерения
      return ydTo();
    default:
      return null;
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
};

// console.log(JSON.stringify(converted(obj)));
// console.log(converted(obj2));
// console.log(converted(obj3));

//*******************************************************

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
  let convInValue = "";
  let convInVariable = refs.formSelectIn.value;
  let convToValue = "";
  let convToVariable = refs.formSelectTo.value;

  refs.formSelectIn.addEventListener("change", (e) => {
    convInVariable = e.target.value;
  });

  refs.formInputIn.addEventListener("input", (e) => {
    convInValue = e.target.value;

    let obj = {
      distance: { unit: convInVariable, value: convInValue },
      convert_to: convToVariable,
    };

    convToValue = converted(obj);
    convertedInForm(convToValue, refs.formInputTo);
  });

  refs.formSelectTo.addEventListener("change", (e) => {
    convToVariable = e.target.value;
  });

  function convertedInForm(convValueObj, InputTo) {
    if (convInValue === "") {
      InputTo.value = "";
    } else {
      InputTo.value = convToValue.value;
    }
  }
});
