import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
const Calendar = () => {
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: "event 1", date: "2023-07-01" },
          { title: "event 2", date: "2023-07-02" },
        ]}
      />
      HI
    </div>
  );
};

export default Calendar;
