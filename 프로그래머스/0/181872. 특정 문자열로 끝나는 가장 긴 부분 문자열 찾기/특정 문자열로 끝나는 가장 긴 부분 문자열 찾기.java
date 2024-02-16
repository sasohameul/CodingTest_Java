class Solution {
    public String solution(String myString, String pat) {
        String answer = "";
		
		int last_index = myString.lastIndexOf(pat.substring(pat.length()-1, pat.length()));
		
		if(myString.contains(pat)) {
			
			for(int i = 0; i <= last_index; i++) {
				
				answer += myString.charAt(i);
				
			}
		}
		
		return answer;
    }
}