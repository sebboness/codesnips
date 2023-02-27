package main

import "fmt"

func main() {
	// Initializing slice with values
	slice1 := []int{1, 2, 3, 4, 5}
	fmt.Println(slice1)

	// Initialize slice without values
	slice2 := []int{}
	slice2 = append(slice2, 1)
	slice2 = append(slice2, 2)
	slice2 = append(slice2, 3)

	// Intialize array of size 3
	arr1 := [3]int{}
	arr1[0] = 1
	arr1[1] = 2
	arr1[2] = 3
	fmt.Println(arr1)

	// Initialize map with values
	map1 := map[int]string{
		1: "a",
		2: "b",
		3: "c",
		4: "e",
		5: "z",
	}
	fmt.Println(map1)

	// Initialize map without values
	map2 := make(map[int]string)
	map2[0] = "a"
	map2[1] = "b"
	fmt.Println(map2)

	// Initialize dictionary
	map3 := map[string]interface{}{
		"1": map[string]interface{}{
			"field1": 123,
			"field2": "test",
			"field3": []int{4, 5, 6},
		},
		"2": 789,
		"3": "abc",
	}
	fmt.Println(map3)

	// Infinite loop with break
	idx := 0
	for {
		idx++
		if idx >= 3 {
			break
		}
	}

	// While loop
	count := 0
	for count < 3 {
		count++
	}

	// For loop
	for i := 0; i < count; i++ {
		fmt.Println(fmt.Sprintf("For[%v]", i))
	}

	// Iterate over array/slice
	for idx, val := range arr1 {
		fmt.Println(fmt.Sprintf("[%v]=%v", idx, val))
	}
}
