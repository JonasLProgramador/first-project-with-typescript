import { Negociacao } from "./models/negociacao.js";
const negociacao = new Negociacao(new Date(), 3000, 400);
console.log(negociacao);
console.log(negociacao.valor);
