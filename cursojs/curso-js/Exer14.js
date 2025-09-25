// array de faturamento diario da semana
const faturamentoDiario =[1500, 2200, 1800, 3100, 2500, 4000, 3500]

// Arrray com os nomes dos dias da semana 
const diasDaSemana =['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado', 'Domingo'];

// --- 1. Calcular o faturamento total da semana ---
let faturamentoTotal = 0;
for (let i = 0; i < faturamentoDiario.length; i++) {
 faturamentoTotal += faturamentoDiario[i];
}
console.log(`faturamento total da semana:R$ ${faturamentoTotal.topFixed(2)}`)



// --- 2. Indentificar o maior faturamento e o dia em que ocorreu ---
let maiorfaturamento = 0;
let diaComMaiorFaturamento = ''; 

