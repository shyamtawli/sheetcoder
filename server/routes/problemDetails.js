import ProblemDetails from "../models/ProblemDetails.js";

export const problemDetails = async (req, res) => {
  try {
    const problemId = req.params.id;

    const details = await ProblemDetails.findOne({ id: problemId }).lean();
    if (details) {
      res.status(200).json(details);
    } else {
      res.status(404).json({ message: "Problem not found" });
    }
  } catch (error) {
    res.status(404).json({ message: "Fetching Failed", error: error.message });
  }
};
