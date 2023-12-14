class Solution {
    public int solution(int[] numbers) {
         int answer = 0;
	        for(int i = 0 ; i < numbers.length; i++) {
	        	
	        	if(numbers[i] > answer) {
	        		
	        		answer = numbers[i];
	        	}
	        }
	        
	        int max = 0;
	        for(int i = 0 ; i < numbers.length; i++) {
	        	
	        	if(numbers[i] == answer) continue;
	        	if(numbers[i] > max) max = numbers[i];
	        }
	         if(max == 0) max = answer;
	        return answer*max;
    }
}