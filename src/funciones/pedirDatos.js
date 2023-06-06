import { MOCK } from "../data/mock";

export const pedirDatos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(MOCK);
        }, 900);
    });
};