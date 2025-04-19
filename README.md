# LabelSort
An O(n^2) sorting algorithm made by me.
## Explanation
Label Sort assigns labels to each element and sorts the elements by their labels using any distribution sort (preferably Pigeonhole sort), and repetitively does this until you can't do it anymore.
___
* Set a variable c to the unsorted array.
* Until c = array:
  * Set a variable l to 0.
  * Set c to the array.
  * Assign label l to the first element.
  * Set variables min and max to 0.
  * For each next element:
   * If the previous item is greater than this one:
      * Decrease l by one.
      * Assign label l to this element.
      * If l is less than min:
        * Set min to l.
    * If the previous item is less than this one:
      * Increase l by one.
      * Assign label l to this element.
      * If l is greater than max:
        * Set max to l.
    * Otherwise:
      * Assign label l to this element.
  * For i goes from min to max, create a bucket for i labeled-numbers.
  * Put each element into each bucket based on label numbers.
  * For i goes from min to max, insert bucket i into the original array.

Once you can't do the process anymore, you should have your sorted array.
