<<<<<<< HEAD
// const mongoose = require("mongoose");
=======

// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/traveljornal", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
//   .then(() => {
//     console.log("MongoDB connected");
//   })
//   .catch((err) => {
//     console.error("Failed to connect to MongoDB", err);
//   });

// // Schema for Customer
// const CustomerSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   phone: {
//     type: [String],  // Allow multiple phone numbers
//     required: true
//   },
//   city: {
//     type: String,
//     required: true
//   }
// });

// // Schema for Travel Agent
// const AgentSchema = new mongoose.Schema({
//   agentName: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   phone: {
//     type: [String],  // Allow multiple phone numbers
//     required: true
//   },
//   city: {
//     type: String,
//     required: true
//   },
//   agentId: {
//     type: String,
//     required: true,  // Unique ID for agents
//     unique:true
//   }
// });

// // Creating models for Customer and Travel Agent
// const Customer = mongoose.model("Customer", CustomerSchema);
// const Agent = mongoose.model("Agent", AgentSchema);
// // 
// // Export the models
// module.exports = {
//   Customer,
//   Agent
// };
const mongoose = require("mongoose");
>>>>>>> f0dc4c6cb9a8cd227f9d9997c7dac0b0781bbe57

// mongoose.connect("mongodb://localhost:27017/traveljornal", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
//   .then(() => {
//     console.log("MongoDB connected");
//   })
//   .catch((err) => {
//     console.error("Failed to connect to MongoDB", err);
//   });

// // Schema for Customer
// const CustomerSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   phone: {
//     type: [String],  // Allow multiple phone numbers
//     required: true
//   },
//   city: {
//     type: String,
//     required: true
//   }
// });

// // Schema for Travel Agent
// const AgentSchema = new mongoose.Schema({
//   agentName: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   phone: {
//     type: [String],  // Allow multiple phone numbers
//     required: true
//   },
//   city: {
//     type: String,
//     required: true
//   },
//   agentId: {
//     type: String,
//     required: true,  // Unique ID for agents
//     unique:true
//   }
// });

<<<<<<< HEAD
// // Creating models for Customer and Travel Agent
// const Customer = mongoose.model("Customer", CustomerSchema);
// const Agent = mongoose.model("Agent", AgentSchema);
// // 
// // Export the models
// module.exports = {
//   Customer,
//   Agent
// };
=======
// Creating models for Customer and Travel Agent
const Customer = mongoose.model("Customer", CustomerSchema);
const Agent = mongoose.model("Agent", AgentSchema);

// Export the models
module.exports = {
  Customer,
  Agent
};


>>>>>>> f0dc4c6cb9a8cd227f9d9997c7dac0b0781bbe57
