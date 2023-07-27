//put a function to add things in test function

import React, { useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
const Calendar = ({ notes }) => {
  const cal = useRef();
  const dateRef = useRef();
  function prevMonth() {
    const api = cal.current.getApi();
    api.prev();
  }
  function nextMonth() {
    const api = cal.current.getApi();
    api.next();
  }
  function addEvent() {
    const api = cal.current.getApi();
    console.log(dateRef.current.value);
    api.addEvent({ title: "event 3", date: dateRef.current.value });
  }
  function test(arg) {
    const date = Date.parse(arg.dateStr);
    const argD = Date.parse(arg.dateStr);
    const parsed = new Date(date);
    alert(`${arg.dateStr},${date.toString()}, ${date}, ${argD}, ${parsed}`);
  }
  if (notes) {
    console.log("testttt,", notes);
  }
  return (
    <div>
      <button
        onClick={() => {
          prevMonth();
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          nextMonth();
        }}
      >
        next
      </button>
      <button
        onClick={() => {
          addEvent();
        }}
      >
        Add
      </button>
      <input ref={dateRef} type={"date"}></input>
      {/* will need to figure out why the date is wrongly translated */}
      <FullCalendar
        ref={cal}
        plugins={[dayGridPlugin, interactionPlugin]}
        dateClick={(arg) => {
          test(arg);
        }}
        initialView="dayGridMonth"
        events={
          notes &&
          notes.map((note) => {
            // const date = new Date(note.date);
            const time = note.date.slice(0, 10);
            // console.log(note.date.slice(0, 10));
            // console.log(date);
            // console.log(date.toDateString());
            // console.log(
            //   `${date.getFullYear()}-${date
            //     .getMonth()
            //     .toString()
            //     .padStart(2, "0")}-${date.getDay().toString().padStart(2, "0")}`
            // );
            return {
              // date: `${date.getFullYear()}-${date
              //   .getMonth()
              //   .toString()
              //   .padStart(2, "0")}-${date
              //   .getDay()
              //   .toString()
              //   .padStart(2, "0")}`,
              date: time,
              title: note.foods,
            };
          })
        }
        description={"notes && notes.comments"}
      />
      HI
    </div>
  );
};

export default Calendar;
