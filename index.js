function compare(a, b) {
  const totalMark_a = a.biology + a.chemistry;
  const totalMark_b = b.biology + b.chemistry;
  if (totalMark_a < totalMark_b) {
    return 1;
  }
  if (totalMark_a > totalMark_b) {
    return -1;
  }
  return compareBio(a, b);
}

function compareBio(a, b) {
  if (a.biology < b.biology) {
    return 1;
  }
  if (a.biology > b.biology) {
    return -1;
  }
  return compareChem(a, b);
}
function compareChem(a, b) {
  if (a.chemistry < b.chemistry) {
    return 1;
  }
  if (a.chemistry > b.chemistry) {
    return -1;
  }
  return compareData;
}

function compareData(a, b) {
  let date1 = a.dob;
  let date2 = b.dob;
  let d1 = new Date(date1);
  let d2 = new Date(date2);

  if (d1 < d2) {
    return 1;
  }
  if (d1 > d2) {
    return -1;
  }
  return 0;
}

let testCase1 = [
  {
    name: 'Leo Messi',
    dob: '31-12-1995',
    biology: 100,
    chemistry: 80,
  },
  {
    name: 'Cristiano Ronaldo',
    dob: '31-05-1992',
    biology: 80,
    chemistry: 100,
  },
  {
    name: 'Virat Kohli',
    dob: '31-12-1995',
    biology: 30,
    chemistry: 40,
  },
  {
    name: 'Rohit Sharma',
    dob: '31-12-1995',
    biology: 40,
    chemistry: 30,
  },
  {
    name: 'Viswanathan Anand',
    dob: '12-12-1994',
    biology: 99,
    chemistry: 10,
  },
];

function sortArr(arr) {
  return arr.sort(compare);
}

console.log(sortArr(testCase1));
