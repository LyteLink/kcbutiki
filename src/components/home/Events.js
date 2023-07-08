import React from "react";

const Events = () => {
  const eventList = [
    {
      name: "Event 1",
      venue: "Venue 1",
      date: "2023-07-15",
      time: "10:00 AM",
      isCompleted: false,
    },
    {
      name: "Event 2",
      venue: "Venue 2",
      date: "2023-07-20",
      time: "2:30 PM",
      isCompleted: false,
    },
    // Add more event objects as needed
  ];

  return (
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center border-2 border-green-500 shadow shadow-green-500.40 p-2">
        Events
      </h2>
      <div className="mt-5 border rounded-lg">
        {eventList.map((event, index) => (
          <div
            key={index}
            className={`flex-center-between gap-x-4 p-3 border-b ${
              index === eventList.length - 1 && "!border-b-0"
            } ${event.isCompleted ? "opacity-60" : ""}`}
          >
            <div className="">
              <h3 className="text-2xl font-bold mb-2">{event.name}</h3>
              <div className="flex-align-center gap-x-3">
                <p className="text-slate-300">
                  <span className="font-bold"></span> {event.venue}
                </p>
                <p>-</p>
                <p className="text-slate-300">
                  <span className="font-bold"></span> {event.time}
                </p>
              </div>
            </div>
            <div className="p-3 flex-center-center bg-green-600 text-white">
              {new Date(event.date).toDateString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
