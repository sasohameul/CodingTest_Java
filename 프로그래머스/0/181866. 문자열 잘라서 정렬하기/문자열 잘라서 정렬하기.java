import java.util.*;
class Solution {
    public String[] solution(String myString) {
        String[] str = myString.split("x");
        
        List<String> list = new ArrayList<>();
        
        Arrays.sort(str);
        for(int i = 0; i < str.length; i++) {
        	
        	if(!str[i].equals("")) list.add(str[i]);
        	
        }
        
        return list.toArray(new String[0]);
    }
}