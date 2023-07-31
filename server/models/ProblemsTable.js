import mongoose, { Mongoose } from "mongoose";

const problemsSchema = new mongoose.Schema({
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
});

const Problems = mongoose.model("Problems", problemsSchema);
export default Problems;
