class Solution {
    public int solution(int angle) {
        int answer = angle > 0 && angle < 90 ? 1 : angle ==90? 2 : 90 < angle && angle < 180 ? 3 : angle == 180 ? 4 : 0;
        return answer;
    }
}