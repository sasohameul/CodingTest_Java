class Solution {
    public int solution(int[] array, int height) {
        int answer = 0;
        
        for(int i = 0; i < array.length; i++){
            
            answer = array[i] > height ? answer+1 : answer;
        }
        
        return answer;
    }
}