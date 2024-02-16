import java.util.*;
class Solution {
    public int[] solution(int[] arr, boolean[] flag) {
        List<Integer> list = new ArrayList<>();

		for (int i = 0; i < arr.length; i++) {

			if (flag[i] == true) {

				for (int j = 0; j < arr[i]*2; j++) {

					list.add(arr[i]);

				}

			} else {
				int idx = list.size()-1;
				int limit = list.size() - arr[i];

				while (list.size() > limit) {

					list.remove(idx--);

				}
			}
		}

		return list.stream().mapToInt(Integer::intValue).toArray();
    }
}