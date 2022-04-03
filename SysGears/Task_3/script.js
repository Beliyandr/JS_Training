const questions = [
  { "What is your marital status?": ["Single", "Married"] },
  { "Are you planning on getting married next year?": ["Yes", "No"] },
  {
    "How long have you been married?": ["Less than a year", "More than a year"],
  },
  { "Have you celebrated your one year anniversary?": ["Yes", "No"] },
];

function questionnaire(arrayQuestions) {
  let list;
  let tempList = [];
  let tempList2 = [];
  let tempList3 = [];
  let questionNow, answer;
  let result;

  arrayQuestions.forEach((question, i) => {
    questionNow = Object.keys(question)[0];
    answer = Object.values(question)[0];

    let variable1 = (questionNow, answer) => {
      if (answer[0] == "Single") {
        tempList.push({ [questionNow]: answer[0] });
        return;
      }
      if (answer[0] == "Yes" && answer[1] == "No" && i == 1) {
        tempList.push({ [questionNow]: `${answer[0]}/${answer[1]}` });
        return;
      }

      return tempList;
    };

    let variable2 = (questionNow, answer) => {
      if (tempList2.length < 2) {
        if (answer[1] == "Married") {
          tempList2.push({ [questionNow]: answer[1] });
          return;
        }
        if (answer[0] == "Less than a year") {
          tempList2.push({ [questionNow]: `${answer[0]}` });
          return;
        }
      }
      return tempList2;
    };

    let variable3 = (questionNow, answer) => {
      if (answer[1] == "Married") {
        tempList3.push({ [questionNow]: answer[1] });
        return;
      }
      if (answer[1] == "More than a year") {
        tempList3.push({ [questionNow]: `${answer[1]}` });
        return;
      }
      if (answer[0] == "Yes" && i !== 1) {
        tempList3.push({ [questionNow]: `${answer[0]}/${answer[1]}` });
        return;
      }
      return tempList3;
    };

    variable1(questionNow, answer);
    variable2(questionNow, answer);
    variable3(questionNow, answer);
  });

  list = [tempList, tempList2, tempList3];
  result = { paths: { number: list.length, list } };
  return result;
}

console.log(questionnaire(questions));
