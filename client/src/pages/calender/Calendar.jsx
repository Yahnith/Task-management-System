import React, { useState } from 'react';
import './calendar.css'

const Calendar = () => {
    const [date, setDate] = useState(new Date());

    const daysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const firstDayOfMonth = (year, month) => {
        return new Date(year, month, 1).getDay();
    };

    const generateCalendar = () => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const totalDays = daysInMonth(year, month);
        const startingDay = firstDayOfMonth(year, month);

        const calendar = [];
        let day = 1;

        for (let i = 0; i < 6; i++) {
            const week = [];
            for (let j = 0; j < 7; j++) {
                if ((i === 0 && j < startingDay) || day > totalDays) {
                    week.push(<td key={`${i}-${j}`} />);
                } else {
                    week.push(<td key={`${i}-${j}`}>{day}</td>);
                    day++;
                }
            }
            calendar.push(<tr key={i}>{week}</tr>);
            if (day > totalDays) break;
        }

        return calendar;
    };

    const prevMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() - 1));
    };

    const nextMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() + 1));
    };

    return (
        <div className="calendar">
            <div className="calendar-header">
                <button onClick={prevMonth}>&lt;</button>
                <h2>{new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(date)}</h2>
                <button onClick={nextMonth}>&gt;</button>
            </div>
            <table className="calendar-table">
                <thead>
                    <tr>
                        <th>Sun</th>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                    </tr>
                </thead>
                <tbody>
                    {generateCalendar()}
                </tbody>
            </table>
        </div>
    );
};

export default Calendar;
