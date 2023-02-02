import java.util.*;
import java.util.stream.Collectors;

public class App {
    public static void main(String[] args) throws Exception {
        // Initializing array with values
        int[] integers = new int[] { 0, 1, 2, 3, 4 };

        // Initializing array with size without any values
        String[] strings = new String[3];
        strings[0] = "a";
        strings[1] = "b";
        strings[2] = "c";

        // Initializing list without values
        List<Integer> listOfInts = new ArrayList<>();
        listOfInts.add(1);
        listOfInts.add(2);
        listOfInts.add(3);

        // Initializing list with values
        List<Character> listOfChars = new ArrayList<>(List.of('a', 'b', 'c'));

        // Initialize map and add values
        Map<Integer, String> map1 = new HashMap<>();
        map1.put(1, "a");
        map1.put(2, "b");
        map1.put(3, "c");

        // Initialize map with values
        Map<Integer, String> map2 = Map.of(
                1, "a",
                2, "b",
                3, "c"
        );

        // Initialize set with values
        Set<Integer> set1 = Set.of(1, 2, 3);

        // Initialize set without values
        Set<Integer> set2 = new HashSet<>();
        set2.add(1);
        set2.add(2);
        set2.add(3);

        // Print array
        System.out.println(Arrays.toString(integers));

        // Another way to print array
        System.out.println(String.join(", ", strings));

        // Print list
        System.out.println(listOfChars.stream().map(Object::toString).collect(Collectors.joining(", ")));
    }
}
