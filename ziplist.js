const l1 = [1, 2, 3];
const l2 = ['a', 'b', 'c'];

function zipList(list1, list2) {
  const list = [];
  for (let i = 0; i < list1.length; i++) {
    list.push(list1[i]);
    list.push(list2[i]);
  }
  return list;
}

console.log(zipList(l1, l2));

function zipListTheSimpleWay(list1, list2) {
  const list = _.zip(list1, list2);
  return _.flatten(list);
}

console.log(zipListTheSimpleWay(l1, l2));
