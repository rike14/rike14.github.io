export default function stateShare() {
  const data = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    OUTROS: 19849.53,
  };
  const list = document.getElementById('resultShare');

  let sum = 0;
  Object.values(data).forEach((value) => (sum += value));

  let percentages = {};
  Object.entries(data).forEach(([state, value]) => {
    percentages[state] = ((value / sum) * 100).toFixed(2);
  });

  list.children[0].innerText += percentages.SP;
  list.children[1].innerText += percentages.RJ;
  list.children[2].innerText += percentages.MG;
  list.children[3].innerText += percentages.ES;
  list.children[4].innerText += percentages.OUTROS;
}
