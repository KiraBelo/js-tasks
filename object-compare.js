// Реализуйте и экспортируйте по умолчанию функцию, которая сравнивает объекты по совпадению данных, а не по ссылкам. Эта функция принимает на вход две компании и возвращает true, если их структура одинаковая, и false в обратном случае. Проверка должна проходить по свойствам name, state, we
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const is = (x, y) => {
  let objectsAreSame = true;
  for (const propertyName in x) {
    if (x[propertyName] !== y[propertyName]) objectsAreSame = false;
    break;
  }
  return objectsAreSame;
};
export default is;
