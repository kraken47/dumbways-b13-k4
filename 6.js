const data = [["a", "c", "b", "e", "d"], ["g", "e", "f"]];
const datalain = [
  ["g", "h", "i", "j"],
  ["a", "c", "b", "e", "d"],
  ["g", "e", "f"]
];

function sort_array(array) {
  let sort_huruf = [];
  for (let i = 0; i < array.length; i++) {
    sort_huruf.push(array[i].sort());
  }

  let result = sort_huruf.sort(function(a, b) {
    return a.length - b.length;
  });

  console.log(result);
}

sort_array(data);
sort_array(datalain);