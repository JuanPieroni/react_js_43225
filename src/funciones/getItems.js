import { MOCK } from "../data/mock";
 
export const getItems = (indice) => {
  return new Promise((resolve , reject) => {
    setTimeout(() => {
      if (indice >= 0 && indice < MOCK.length) {
        resolve(MOCK[indice]);
      } else {
        reject(new Error("Índice fuera de rango"));
      }
    }, 800);
  });
};

