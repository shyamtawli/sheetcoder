import mongoose from "mongoose";

const problemDetailsSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  title: {
    type: String,
  },
  difficult: {
    type: String,
  },
  category: {
    type: String,
  },
  order: {
    type: Number,
  },
  description: {
    type: String,
  },
  examples: {
    type: Array,
  },
  constraints: {
    type: Array,
  },
});

const ProblemDetails = mongoose.model("ProblemDetails", problemDetailsSchema);
export default ProblemDetails;
