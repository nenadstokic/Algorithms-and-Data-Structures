console.log('yello');

const niz = [1,2,3,4,5,6];
const nth = 2;

const svakinti = niz.filter((element, indeks) => {
  return (indeks % nth === nth - 1);
})

console.log(svakinti);
