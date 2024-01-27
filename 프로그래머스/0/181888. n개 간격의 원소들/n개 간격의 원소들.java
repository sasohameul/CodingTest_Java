class Solution {
    public int[] solution(int[] num_list, int n) {
        double len = num_list.length%n == 0 ? (int) Math.floor(num_list.length/n) : (int) Math.floor(num_list.length/n)+1;
	        int[] answer = new int[(int)len];
	        
	        for(int i= 0,idx = 0; idx < answer.length; i+=n) {
	        	
	        	answer[idx++] = num_list[i];
	        	
	        }
	        return answer;
    }
}