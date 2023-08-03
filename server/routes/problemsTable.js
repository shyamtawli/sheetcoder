import Problems from "../models/ProblemsTable.js";

export const problemsTable = async (req, res) => {
  try {
    const problems = await Problems.find().select(
      "id title difficult category order"
    );
    res.status(200).send({ data: problems });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};
