const { request, response } = require("express");
const Event = require("../models/Event.model");

const getEvents = async (req = request, res = response) => {
  const events = await Event
    .find()
    .populate("user", "name");

  res.status(200).json({
    ok: true,
    events,
  });
};

const createEvent = async (req = request, res = response) => {
  // console.log(req.body)

  try {
    const event = new Event(req.body);
    event.user = req.uid;
    const eventSaved = await event.save();

    res.status(201).json({
      ok: true,
      event: eventSaved,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Please, contact Admin",
    });
  }
};

const updateEvent = async (req = request, res = response) => {

  const eventId = req.params.id
  const uid = req.uid

  try {
    const event = await Event.findById(eventId)

    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: "Event not found"
      })
    }

    if (event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: 'User can not update this event'
      })
    }

    const newEvent = {
      ...req.body,
      user: uid
    }
    const updateEvent = await Event.findByIdAndUpdate(eventId, newEvent, {new: true})

    res.status(200).json({
      ok: true,
      event: updateEvent
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: "Please, contact Admin"
    })
  }

};

const deleteEvent = async (req = request, res = response) => {
  const eventId = req.params.id
  const uid = req.uid

  try {
    const event = await Event.findById(eventId)

    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: "Event not found"
      })
    }

    if (event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: 'User can not delete this event'
      })
    }

    const deletedEvent = await Event.findByIdAndDelete(eventId)
    // console.log(deletedEvent)

    res.status(200).json({
      ok: true,
      event: deletedEvent
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: "Please, contact Admin"
    })
  }
};

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
};
