const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    eventId: {
      type: String,
    },
    picture: {
      type: String,
    },
    title: {
      type: String,
    },
    place: {
      type: String,
    },
    description: {
      type: String,
      trim: true,
    },
    typeEvent: {
      type: String,
    },
    urlEvent: {
      type: String,
    },
    price: {
      type: Number,
    },
    nbrPlace: {
      type: Number,
    },
    startEvent: {
      type: Date,
    },
    endEvent: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("event", EventSchema);
