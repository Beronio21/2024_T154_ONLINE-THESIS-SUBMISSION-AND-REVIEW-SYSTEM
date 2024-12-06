import React, { useEffect, useState } from 'react';
import Calendar from '../components/Calendar';
import './ScheduleTable.css';

const ScheduleTable = () => {
    const [schedules, setSchedules] = useState([]);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Fetch schedules from your API or data source
        fetch("https://sheetdb.io/api/v1/59dowe84yclm3")
            .then((response) => response.json())
            .then((data) => {
                setSchedules(data);
            })
            .catch((error) => console.error('Error fetching schedule:', error));
        
        // Fetch events from your API or data source
        fetch("http://localhost:8080/api/calendar")
            .then((response) => response.json())
            .then((data) => {
                setEvents(data.data);
            })
            .catch((error) => console.error('Error fetching events:', error));
    }, []);

    return (
        <div className="schedule-table">
            <h2>Defense Schedule</h2>
            <table>
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Title</th>
                        <th>Name</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {schedules.length === 0 ? (
                        <tr>
                            <td colSpan="4" style={{ textAlign: 'center' }}>No schedules available</td>
                        </tr>
                    ) : (
                        schedules.map((schedule) => (
                            <tr key={schedule.student_id}>
                                <td>{schedule.student_id}</td>
                                <td>{schedule.Title}</td>
                                <td>{schedule.Name}</td>
                                <td>{schedule.Date}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>

            <h2>Upcoming Events</h2>
            <table>
                <thead>
                    <tr>
                        <th>Event Title</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                    </tr>
                </thead>
                <tbody>
                    {events.length === 0 ? (
                        <tr>
                            <td colSpan="3" style={{ textAlign: 'center' }}>No events available</td>
                        </tr>
                    ) : (
                        events.map((event) => (
                            <tr key={event._id}>
                                <td>{event.title}</td>
                                <td>{new Date(event.start).toLocaleString()}</td>
                                <td>{new Date(event.end).toLocaleString()}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ScheduleTable;