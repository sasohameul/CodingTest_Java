const solution = (before, after) => {

        let compare = after.split('');

    const result = before.split('').map((str,idx,arr) => {

      if(compare.indexOf(str) != -1) compare.splice(compare.indexOf(str),1);
    });

    
    return compare.length == 0 ? 1 : 0;
}

