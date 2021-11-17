const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    eventId: {
      type: String,
    },
    picture: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    place: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      trim: true,
      require: true,
    },
    typeEvent: {
      type: String,
      require: true,
    },
    urlEvent: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    nbrPlace: {
      type: Number,
      require: true,
    },
    startEvent: {
      type: Date,
      require: true,
    },
    endEvent: {
      type: Date,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("event", EventSchema);
