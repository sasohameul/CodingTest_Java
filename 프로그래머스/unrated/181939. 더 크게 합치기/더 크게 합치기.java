class Solution {
    public int solution(int a, int b) {
        
        int answer = 0;       
				
		String ab="";
		String ba="";
				
		ab +=a;
		ab +=b;
		
		ba+=b;
		ba+=a;
		
		if(Integer.valueOf(ab) >= Integer.valueOf(ba)) {
			
			answer = Integer.valueOf(ab);
			
		} else {
						
			answer = Integer.valueOf(ba);
		}
			
		return answer;
    }
}