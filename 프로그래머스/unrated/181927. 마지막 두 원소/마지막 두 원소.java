import java.util.*;
class Solution {
    public int[] solution(int[] num_list) {
       int[] answer = Arrays.copyOf(num_list, num_list.length+1);
	        
	        int last = num_list.length-1;
	        int before = num_list.length-2;
	        
	        answer[answer.length-1] = 
	        		num_list[last] > num_list[before] ? 
	        				num_list[last]-num_list[before] : num_list[last]*2;
	        
	        return answer;
    }
}