function nextPalin(str) {
  let mid = Math.floor(str.length / 2),
    newstr = "";
  mid = mid - 1;
  // str.length % 2 === 0 ? (mid = mid - 1) : mid;
  // const sorted = isSorted(0, mid);
  // if (sorted) return -1;
  for (let i = mid; i > 0; i--) {
    if (str[i - 1] < str[i]) {
      newstr = sortAndSwap(i - 1, str);
      break;
    }
  }
  console.log("reslm==", mid, newstr);
}
function sortAndSwap(idx, str) {
  let temp = str.substring(0, idx + 1),
    aux = "";
  console.log("str1", temp, idx);

  // aux = temp;
  // temp = [...temp].sort((a, b) => a.localeCompare(b)).join("");
  // temp = str.replace(aux, temp);
  // let tempArr = [...temp];
  // let val = tempArr[idx];
  // tempArr[idx] = tempArr[idx + 1];
  // tempArr[idx + 1] = val;
  // temp = tempArr.join("");
  // console.log("res==",tempArr, str, temp, aux);
  return temp;
}

// sortAndSwap(1, "12743");
nextPalin("4697557964");
