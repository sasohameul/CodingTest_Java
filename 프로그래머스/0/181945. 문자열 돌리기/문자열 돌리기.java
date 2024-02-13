import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
        String a = sc.next();
        
        String[] clock = a.split("");
        
        for(int i = 0; i < clock.length; i++) {
        	
        	System.out.println(clock[i]);
        }
		
    }
}