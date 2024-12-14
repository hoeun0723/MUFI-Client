import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./CalendarStyles.css";

const CalendarComponent = () => {
  const [events, setEvents] = useState([
    {
      title: "항공대 행사",
      start: "2024-12-05",
      end: "2024-12-05",
    },
    {
      title: "팝업 행사",
      start: "2024-12-10",
      end: "2024-12-10",
    },
    {
      title: "휴무",
      start: "2024-12-15",
      end: "2024-12-15",
    },
    {
      title: "고양시 행사",
      start: "2024-12-25",
      end: "2024-12-25",
    },
  ]);

  // useEffect(() => {
  //   fetch("/api/google-calendar/events?calendarId=primary") // API 호출
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const formattedEvents = data.map((event) => ({
  //         title: event.summary,
  //         start: event.start.dateTime || event.start.date,
  //         end: event.end.dateTime || event.end.date,
  //       }));
  //       setEvents(formattedEvents);
  //     })
  //     .catch((error) => console.error("Error fetching events:", error));
  // }, []);

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={events}
    />
  );
};

export default CalendarComponent;
