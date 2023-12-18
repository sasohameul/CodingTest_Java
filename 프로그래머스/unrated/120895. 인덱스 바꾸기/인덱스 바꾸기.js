const solution = (my_string, num1, num2) =>{

  let answer = my_string.split('').reduce((prev,cur,idx,arr)=>{

      if(idx == num1) prev+=arr[num2];
      else if(idx == num2) prev+=arr[num1];
      else prev+=cur;

      return prev;

    },'')


    return answer;
}