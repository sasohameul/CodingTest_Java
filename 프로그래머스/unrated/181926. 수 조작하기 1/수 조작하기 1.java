class Solution {
   public int solution(int n, String control) {
		
		int answer =0;
		
		String[] arr = control.split("");
		
		for(String s : arr) {
			
			if(s.equals("w")) {
				
				n = n+1;
				
			}else if(s.equals("s")){
				
				n = n-1;
				
				
			} else if(s.equals("d")) {
				
				n = n+10;
				
				
			} else if(s.equals("a")) {
				
				n = n-10;
			}
            
            
			
}
       answer = n;
       return answer;
   }
}