import java.util.Arrays;
class Solution {
    public int[] solution(int[] num_list, int n) {
         int[] first = Arrays.copyOfRange(num_list, n, num_list.length);
	        int[] second = Arrays.copyOfRange(num_list, 0, n);
	        int[] answer = new int[num_list.length];
	       
	        int idx = 0;
	        for(int i = 0; i < answer.length; i++) {
	        	
	        	if(i<first.length) {
	        		
	        		answer[i]=first[i];
	        	} else {
	        		
	        		answer[i] = second[idx++];
	        	}
	        	
	        }
	        
	        return answer;
    }
}