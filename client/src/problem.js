const ProblemDetails = {
  id: "two-sum",
  title: "Two Sum",
  difficult: "Hard",
  category: "Array",
  order: "1",
  description:
    "Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.You may assume the array is the output of JSON.parse.",
  examples: [
    {
      input: "nums = [null, {}, 30]",
      output: "3",
      explanation: "Kuch bhi de do abhi toh baad me dekh lege",
    },
    {
      input: "nums = []",
      output: "-1",
      explanation: " ek aur Kuch bhi de do abhi toh baad me dekh lege",
    },
  ],
  constraints: ["0 <= arr.length <= 1000", "1000 <= arr.length <= 5000"],
};

export default ProblemDetails;
