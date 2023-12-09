import java.util.*;
class Solution {
    public int solution(int[] array) {
       HashMap<Integer, Integer> hm = new HashMap<>();
	       
	       int max = 0;
	       int result = -1;
	       for(int a : array) {
	    	   
	    	   hm.put(a, hm.getOrDefault(a, 0)+1);
	    	   int current = hm.get(a);
	    	   
	    	   if(current > max) {
	    		   
	    		   max = current;
	    		   result = a;
	    	   } else if(current == max) {
	    		   
	    		   result = -1;
	    	   }
	    	   
	       }
	       
	        return result;
    }
}