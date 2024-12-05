import ApiCalendar from "react-google-calendar-api";

const config = {
  clientId: "YOUR_CLIENT_ID.apps.googleusercontent.com",
  apiKey: "YOUR_API_KEY",
  scope: "https://www.googleapis.com/auth/calendar.readonly",
  discoveryDocs: [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ],
};

const apiCalendar = new ApiCalendar(config);
export default apiCalendar;
