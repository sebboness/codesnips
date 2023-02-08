using System;
using System.Collections.Generic;
using System.Linq;

namespace Codesnips
{
    public class Demo
    {
        public static void Main(string[] args)
        {
            // Initializing array with values
            int[] integers = new int[] { 0, 1, 2, 3, 4 };

            // Initializing array with size without any values
            String[] strings = new String[3];
            strings[0] = "a";
            strings[1] = "b";
            strings[2] = "c";

            // Initializing list without values
            IList<int> listOfInts = new List<int>();
            listOfInts.Add(1);
            listOfInts.Add(2);
            listOfInts.Add(3);

            // Initializing list with values
            IList<char> listOfChars = new List<char> { 'a', 'b', 'c' };

            // Initialize map and add values
            IDictionary<int, string> map1 = new Dictionary<int, string>();
            map1.Add(1, "a");
            map1.Add(2, "b");
            map1.Add(3, "c");

            // Initialize map with values
            IDictionary<int, string> map2 = new Dictionary<int, string> {
                { 1, "a" },
                { 2, "b" },
                { 3, "c" }
            };

            // Initialize set with values
            HashSet<int> set1 = new HashSet<int> { 1, 2, 3 };

            // Initialize set without values
            HashSet<int> set2 = new HashSet<int>();
            set2.Add(1);
            set2.Add(2);
            set2.Add(3);

            // Print array
            Console.WriteLine(string.Join(", ", integers));

            // Another way to print array
            strings.ToList().ForEach(Console.Write);
            // Or...
            Array.ForEach(strings, Console.Write);

            // Print dictionary
            Console.WriteLine(string.Join(", ", map1.Select(pair => $"{pair.Key}: {pair.Value}")));
        }
    }
}