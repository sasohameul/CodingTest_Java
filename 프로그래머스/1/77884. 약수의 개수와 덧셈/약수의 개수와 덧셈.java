class Solution {
    public int solution(int left, int right) {
            
	        int answer = 0;
	        int[] num = new int[right-left+1];
	        
	        for(int i = 0; i < num.length; i++) {
	        	
	        	num[i] = left++;
	        	
	        }
	        
	        int cnt = 0;
	        
	        for(int i = 0; i < num.length; i++) {
	        	
	        	for(int j = 1; j < num[i]; j++) {
	        		
	        		if(num[i] % j == 0) cnt++;
	        		
	        	}
	        	
	        	if(cnt % 2 == 0) answer += num[i];
	        	else answer -= num[i];
	        	cnt = 0;
	        	
	        }
	        
	        return Math.abs(answer);
    }
}