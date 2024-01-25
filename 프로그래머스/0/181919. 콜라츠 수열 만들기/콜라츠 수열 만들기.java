import java.util.ArrayList;
class Solution {
    public int[] solution(int n) {
		
     ArrayList<Integer> list = new ArrayList<Integer>();
        
        int x = n;
        list.add(n);
        
        while(!(x==1)) {
        	
        	if(x % 2 == 0) {
        		
        		x = x / 2;
        		list.add(x);
        		
        	} else {
        		
        		x = 3*x + 1;
        		list.add(x);
        	}
        	
        }
        int[] answer= new int[list.size()];
        
        for(int i = 0; i < list.size(); i++) {
        	
        	answer[i] = list.get(i);
        }
        
        return answer;
    }

}