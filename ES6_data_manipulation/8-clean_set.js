/* eslint-disable */
export default function cleanSet(set, startString) {
    let result = [];
  
    for (let item of set) {
      if (item.startsWith(startString) && startString !== '') {
        result.push(item.slice(startString.length));
      }
    }
    
    return result.join('-');
  }