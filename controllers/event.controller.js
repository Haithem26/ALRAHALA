const EventModel = require("../models/event.model");
const ObjectID = require("mongoose").Types.ObjectId;
const fs = require("fs"); // bibilio node pour creer des fichier
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline);
const { uploadErrors } = require("../utils/errors.utils");

module.exports.createEvent = async (req, res) => {
  let fileName;

  if (req.file !== null) {
    try {
      if (
        req.file.detectedMimeType != "image/jpg" &&
        req.file.detectedMimeType != "image/png" &&
        req.file.detectedMimeType != "image/jpeg"
      )
        throw Error("invalid file");

      if (req.file.size > 5000000000000) throw Error("max size");
    } catch (err) {
      const errors = uploadErrors(err);
      return res.status(201).json({ errors });
    }
    fileName = req.file.originalName;

    await pipeline(
      req.file.stream,
      fs.createWriteStream(`${__dirname}/../client/public/uploads/${fileName}`)
    );
  }

  const newEvent = new EventModel({
    title: req.body.title,
    place: req.body.place,
    description: req.body.description,
    typeEvent: req.body.typeEvent,
    urlEvent: req.body.urlEvent,
    price: req.body.price,
    nbrPlace: req.body.nbrPlace,
    startEvent: req.body.startEvent,
    endEvent: req.body.endEvent,
    picture: req.file !== null ? "/uploads/" + fileName : "",
  });
  try {
    const event = await newEvent.save();
    return res.status(201).json(event);
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports.readEvent = async (req, res) => {
  console.log("req", req.params);
  EventModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to get data:" + err);
  }).sort({ createdAt: -1 }); //affichage des post de plus recent au plus ancien
};
module.exports.readOneEvent = async (req, res) => {
  EventModel.findById(req.params.id, (err, docs) => {
    /// findOne{_id: req.params.id}
    if (!err) res.send(docs);
    else console.log("Error to get data:" + err);
  });
};

module.exports.updateEvent = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    //tester si l'id est connue dans la base de donnee
    return res.status(400).send("ID unknow:" + req.params.id);
  await pipeline(
    req.file.stream,
    fs.createWriteStream(
      `${__dirname}/../client/public/uploads/${req.file.originalName}`
    )
  );
  const updateRecord = {
    title: req.body.title,
    place: req.body.place,
    description: req.body.description,
    typeEvent: req.body.typeEvent,
    urlEvent: req.body.urlEvent,
    price: req.body.price,
    nbrPlace: req.body.nbrPlace,
    startEvent: req.body.startEvent,
    endEvent: req.body.endEvent,
    picture: req.file !== null ? "/uploads/" + req.file.originalName : "",
  };

  EventModel.findByIdAndUpdate(
    req.params.id,
    { $set: updateRecord },
    //{ new: true },
    { new: true, upsert: true, setDefaultsOnInsert: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else return res.status(500).send({ message: err });
      //else console.log("Update error : " + err);
    }
  );
};

module.exports.deleteEvent = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    //tester si l'id est connue dans la base de donnee
    return res.status(400).send("ID unknow:" + req.params.id);
  EventModel.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("delete error : " + err);
  });
};
