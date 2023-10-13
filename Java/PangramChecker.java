public class PangramChecker {
    public static boolean isPangram(String str) {
        str = str.toLowerCase();

        boolean[] letters = new boolean[26];
 
        for (char c : str.toCharArray()) {
            if (Character.isLetter(c)) { 
                letters[c - 'a'] = true;
            }
        }

        for (boolean letter : letters) {
            if (!letter) {
                return false; 
            }
        }

        return true; 

    public static void main(String[] args) {
        String input = "The quick brown fox jumps over the lazy dog";
        boolean isPangram = isPangram(input);

        System.out.println("Input: " + input);
        System.out.println("Is Pangram? " + isPangram);
    }
}