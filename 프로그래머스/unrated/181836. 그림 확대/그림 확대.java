class Solution {
    public String[] solution(String[] picture, int k) {
       String[] answer = new String[picture.length];
		
		for(int i = 0 ; i < picture.length; i++) {
			
			for(int j = 0; j < picture[i].length(); j++) {
				
				for(int l = 0; l < k; l++ ) {
					if(answer[i] == null) {
						
						answer[i] = "" + picture[i].charAt(j);
						
					} else {
						
						answer[i] += picture[i].charAt(j);
						
					}
					
				}
				
			}
		}
        String[] answer2 = new String[answer.length*k];
		
		for(int i = 0,idx =0; i < answer.length; i++) {
			
			for(int j = 0; j < k; j++) {
				
				answer2[idx++] = answer[i];
				
			}
		}
		
		return answer2;
    }
}