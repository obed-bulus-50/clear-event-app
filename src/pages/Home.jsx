import React from "react";
import { Plus } from "lucide-react";
import { Link, useNavigate } from "react-router";
import StartCard from "../components/StartCard";
import Button from "../components/ui/Button";

const state = [
  { title: "total events", value: 0, color: "blue" },
  { title: "upcoming events", value: 0, color: "gray" },
  { title: "completed events", value: 0, color: "green" },
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="p-4">
      <div>
        <h1 className="text-2xl md:text-4xl font-bold text-white pb-3">
          welcom to Event app
        </h1>
        <p> create,manange,and track your events-all store locally</p>
        <div className="flex items-center justify-center mt-4">
          <Button onClick={() => navigate("/events/new")}>
            <Plus className="w-5 h-5 text-white" />
            Creat new event
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {state.map((stat, index) => (
          <StartCard
            key={index}
            title={stat.title}
            value={stat.value}
            color={stat.color}
            // color={stat.color}
          />
        ))}
      </div>
      <div className="flex justify-center item-center mt-4">
        <Link
          to="/events"
          className="flex items-center gap-3 text-indigo-500 hover:text-indigo-400 hover:underline"
        >
          Browser all events
        </Link>
      </div>
    </div>
  );
};

export default Home;
