// This is a table of recommendations
// module.exports = function(sequelize, DataTypes) {
//     var Recommend = sequelize.define('Recommend', {
//       email: DataTypes.STRING,
//       recommendation: DataTypes.STRING,
//       category: DataTypes.STRING,
//     });
//     return Recommend;
//   };
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecommendationSchema = new Schema({
  email: { type: String, required: true },
  Rec: { type: String, required: true },
  category: { type: String, required: true }
});

const Recommendation = mongoose.model("Recommendation", RecommendationSchema);

module.exports = Recommendation;