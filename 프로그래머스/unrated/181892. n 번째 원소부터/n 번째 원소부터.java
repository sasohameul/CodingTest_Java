import java.util.Arrays;
class Solution {
    public int[] solution(int[] num_list, int n) {
         num_list = Arrays.copyOfRange(num_list, n-1, num_list.length);
        
        return num_list;
    }
}