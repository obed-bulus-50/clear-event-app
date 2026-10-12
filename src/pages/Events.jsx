/*import React, { useState } from "react";
import Button from "../components/ui/Button";
import { Plus } from "lucide-react";
import EventCard from "../components/events/EventCard";
import { events } from "../data"
import { useNavigate } from "react-router";
import { useEventStore } from "../store/useEvent.store";

const Events = () => {
  const [filter, setFilter] = useState({
    searchTerm: "",
    category: "all",
    status: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const onSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Filter submitted:", filter);
  };

  const routeToNewEvent = () => {
    // import useNavigate from react-router and use it to navigate to the new event page
    
  };

  const navigate =useNavigate()

  return (
    <div className="p-4">*/
      {/* header */}
      /*<div className="flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-white">All Events</h1>
        <Button onClick={() => navigate('/events/new')}>
          <Plus className="w-5 h-5" /> New Event
        </Button>
      </div>*/

      {/* filter section */}
      /*<form
        onSubmit={onSubmit}
        method="GET"
        action=""
        className="flex items-center gap-4 my-6"
      >
        <input
          type="search"
          name="searchTerm"
          id="searchTerm"
          placeholder="Search events..."
          onChange={handleFilterChange}
          className="flex-1 bg-gray-800 text-white border border-gray-600 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          name="category"
          id="category"
          onChange={handleFilterChange}
          className="bg-gray-800 text-white border border-gray-600 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Categories</option>
          <option value="work">WorkSpace</option>
          <option value="conference">Conference</option>
          <option value="meetup">Meetup</option>
          <option value="webinar">Webinar</option>
          <option value="others">others</option>
        </select>

        <select
          name="status"
          id="status"
          onChange={handleFilterChange}
          className="bg-gray-800 text-white border border-gray-600 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Status</option>
          <option value="upcoming">Upcoming</option>
          <option value="completed">Completed</option>
        </select>
      </form>*/

      {/* events list */}
      /*<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;*/








// {
//       "id": "507f1f77bcf86cd799439011",
//       "userId": "507f1f77bcf86cd799439012",
//       "name": "Tech Meetup",
//       "description": "Discuss upcoming platform improvements and launch plans.",
//       "date": "2026-08-20T18:00:00.000Z",
//       "location": "Nairobi, Kenya",
//       "attendees": 55,
//       "thunmailUrl": "https://example.com/thumbnail.jpg",
//       "createdAt": "2026-08-01T12:00:00.000Z",
//       "updatedAt": "2026-08-01T12:00:00.000Z"
//     }


 import React, { useState } from "react";
import { useNavigate } from 'react-router'
import { Plus } from "lucide-react";
 //import { useEvent } from "../hook/useEvent";
import { useEventStore } from "../store/useEvent.store";
import Button from "../components/ui/Button";
import EventCard from "../components/events/EventCard";


const Events = () => {
 // const { events } = useEvent();
  const events = useEventStore((s) => s.events);
  const navigate = useNavigate()
  const [filter, setFilter] = useState({
    searchTerm: "",
    category: "all",
    status: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Filter submitted:", filter);
  };

  const routeToNewEvent = () => {
    navigate('/events/new')
    // import useNavigate from react-router and use it to navigate to the new event page
  };

  if (events.length === 0) {
    return (
      <div className="p-4 h-screen flex flex-col justify-center items-center">
        <p className="text-white">No events found.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      {/* header */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-white">All Events</h1>
        <Button onClick={routeToNewEvent}>
          <Plus className="w-5 h-5" /> New Event
        </Button>
      </div>

      {/* filter section */}
      <form
        onSubmit={onSubmit}
        method="GET"
        action=""
        className="flex flex-col md:flex-row items-center gap-4 my-6"
      >
        <input
          type="search"
          name="searchTerm"
          id="searchTerm"
          placeholder="Search events..."
          onChange={handleFilterChange}
          className="w-full flex-1 bg-gray-800 text-white border border-gray-600 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <div className="flex gap-2">
          <select
            name="category"
            id="category"
            onChange={handleFilterChange}
            className="w-full bg-gray-800 text-white border border-gray-600 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Categories</option>
            <option value="work">WorkSpace</option>
            <option value="conference">Conference</option>
            <option value="meetup">Meetup</option>
            <option value="webinar">Webinar</option>
            <option value="others">others</option>
          </select>

          <select
            name="status"
            id="status"
            onChange={handleFilterChange}
            className="w-full bg-gray-800 text-white border border-gray-600 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Status</option>
            <option value="upcoming">Upcoming</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </form>

      {/* events list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;