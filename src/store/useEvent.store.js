/*import{creat} from "zustand"
import {persist, createJSONStorage} from "zustand/middleware";
const useEventStore=creat(
    persist((set)=>({
        events:[],
    //read by id

      }),
    {name:"ao:event:store",
        storage:createJSONStorage(()=>localStorage)
    })
);*/

/*import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useEventStore = create(
  persist(
    (set,get) => ({
      events: [],
      // read by id
      eventById: (id) => {
        const event = get().events.find((event) => event.id === id);

        if (!event) {
          return {
            succes: false,
            message: "Event not found",
            data: null,
          };
        }

        return {
          succes: true,
          message: "Event found",
          data: event,
        };
      },

      // create
      createEvent: (data) => {
        // improve data validatation
        if (!data) {
          return {
            success: false,
            message: "No data provided",
          };
        }

        const newEvent = {
          id: Date.now().toString(),
          name: data.name,
          description: data.description,
          date: data.date,
          location: data.location,
          attendees: data.attendees || 0,
          thunmailUrl: "https://picsum.photos/seed/picsum/200/300" ?? data.thunmailUrl,
        }

        set(state => ({
          events: [newEvent, ...state.events]
        }))

        return {
          success: true,
          message: "Event created successfully",
          data: newEvent,
        }
      },
      // update
       
  
      editEvent:(id, data) => {
        
      const event = get().events.find((e)=>e.id.tolowercase()===id.tolowercase(),);
      // guard clause
      if (!event) {
        return {
          success: false,
          message: "Event not found",
        };
      }

      const updatedEvent = {
        ...event,
        ...data,
      };

      set((state)=>({
        events:state.events.map((e)=>e.id.tolowercase() ?updatedEvent:e)
      }))
      return {
        success: true,
        message: "Event updated successfully",
        data: updatedEvent,
      };
  },
      //end
      // delete
    }),
    {
      name: "ao:event:store",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);*/





//```jsx
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useEventStore = create(
  persist(
    (set, get) => ({
      events: [],

      // Read event by ID
      eventById: (id) => {
        const event = get().events.find(
          (event) => event.id === id
        );

        if (!event) {
          return {
            success: false,
            message: "Event not found",
            data: null,
          };
        }

        return {
          success: true,
          message: "Event found",
          data: event,
        };
      },

      // Create event
      createEvent: (data) => {
        // Validate data
        if (!data) {
          return {
            success: false,
            message: "No data provided",
          };
        }

        const newEvent = {
          id: Date.now().toString(),
          name: data.name,
          description: data.description,
          date: data.date,
          location: data.location,
          attendees: data.attendees || 0,
          thumbnailUrl:
            data.thumbnailUrl ||
            "https://picsum.photos/seed/picsum/200/300",
        };

        set((state) => ({
          events: [newEvent, ...state.events],
        }));

        return {
          success: true,
          message: "Event created successfully",
          data: newEvent,
        };
      },

      // Update event
      editEvent: (id, data) => {
        const event = get().events.find(
          (e) => e.id.toLowerCase() === id.toLowerCase()
        );

        // Guard clause
        if (!event) {
          return {
            success: false,
            message: "Event not found",
          };
        }

        const updatedEvent = {
          ...event,
          ...data,
        };

        set((state) => ({
          events: state.events.map((e) =>
            e.id.toLowerCase() === id.toLowerCase()
              ? updatedEvent
              : e
          ),
        }));

        return {
          success: true,
          message: "Event updated successfully",
          data: updatedEvent,
        };
      },

      // Delete event
      // Update event
editEvent: (id, data) => {
  const event = get().events.find(
    (e) => e.id.toLowerCase() === id.toLowerCase()
  );

  if (!event) {
    return {
      success: false,
      message: "Event not found",
    };
  }

  const updatedEvent = {
    ...event,
    ...data,
  };

  set((state) => ({
    events: state.events.map((e) =>
      e.id.toLowerCase() === id.toLowerCase()
        ? updatedEvent
        : e
    ),
  }));

  return {
    success: true,
    message: "Event updated successfully",
    data: updatedEvent,
  };
},

// Delete event
deleteEvent: (id) => {
  const event = get().events.find(
    (e) => e.id.toLowerCase() === id.toLowerCase()
  );
  
  if (!event) {
    return {
      success: false,
      message: "Event not found",
    };
  }

  set((state) => ({
    events: state.events.filter(
      (e) => e.id.toLowerCase() !== id.toLowerCase()
    ),
  }));

  return {
    success: true,
    message: "Event deleted successfully",
    data: event,
  };
},
      //end
    }),

    {
      name: "ao:event:store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
//```
