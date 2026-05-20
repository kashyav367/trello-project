import mongoose from "mongoose";

const orgSchema = new mongoose.Schema({
  orgName: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  member: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ]
}, { timestamps: true });

const orgModel = mongoose.model("organisations", orgSchema);
console.log(orgModel)

export default orgModel;