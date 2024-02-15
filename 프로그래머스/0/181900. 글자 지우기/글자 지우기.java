import java.util.Arrays;
class Solution {
    public String solution(String my_string, int[] indices) {
       String answer = "";
        
        Arrays.sort(indices);
        
        char[] ch = my_string.toCharArray();	
        for(int i = 0 ; i < indices.length; i++) {
        	
        	ch[indices[i]] = 65;
        	
        }
        
        for(char c : ch) {
        	
        	if(c != 65) answer+= c;
        	
        }
        
        return answer;
    }
}