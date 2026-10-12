/*import React from 'react'
import EventForm from '../components/events/EventForm'


const NewEvent = () => {
  return (
    <div>NewEvent
      <h1 className="text-2xl font-bold mb-4 text-left">Create New Event</h1>
      <EventForm/>
    </div>
  )
}

export default NewEvent;*/

/*import React from "react";
import EventForm from "../components/events/EventForm";

const NewEvent = () => {

  const handleSubmit = (data) => {
    console.log("Form submitted");
    console.log(data);
  }
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create New Event</h1>

      <EventForm onSubmit={handleSubmit} />
    </div>
  );
};

export default NewEvent;*/

import React from "react";
import EventForm from "../components/events/EventForm";
 //import { useEvent } from "../hook/useEvent";
import { toast } from "react-toastify";
import { useEventStore } from "../store/useEvent.store";

const NewEvent = () => {
   //const { createEvent } = useEvent();
  const createEvent = useEventStore((s) => s.createEvent);

  const handleSubmit = (data) => {
    const result = createEvent(data);
    if (result.success) {
      console.log("Event created successfully:", result.data);
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create New Event</h1>

      <EventForm onSubmit={handleSubmit} />
    </div>
  );
};

export default NewEvent;