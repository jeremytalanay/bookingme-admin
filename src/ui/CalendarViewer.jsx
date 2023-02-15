import React, { useState } from "react";
import style from './CalendarViewer.module.css';

function CalendarViewer() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);

  const daysInMonth = new Date(year, month, 0).getDate();
  const firstDayOfMonth = new Date(year, month - 1, 1).getDay();

  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const prevMonth = () => {
    if (month === 1) {
      setYear(year - 1);
      setMonth(12);
    } else {
      setMonth(month - 1);
    }
  };

  const nextMonth = () => {
    if (month === 12) {
      setYear(year + 1);
      setMonth(1);
    } else {
      setMonth(month + 1);
    }
  };

  const monthName = new Date(year, month - 1).toLocaleString("default", {
    month: "long"
  });

  return (
    <div className={style.calendar}>
      <h2>{monthName} {year}</h2>
      <button className="btn btn-md btn-primary" onClick={prevMonth}>Previous</button>
      <button className="btn btn-md btn-primary" onClick={nextMonth}>Next</button>
      <table>
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
          {Array(Math.ceil((firstDayOfMonth + daysInMonth) / 7))
            .fill()
            .map((_, index) => (
              <tr key={index}>
                {Array(7)
                  .fill()
                  .map((_, index2) => {
                    const day = index * 7 + index2 - firstDayOfMonth + 1;
                    return (
                      <td key={index2}>
                        {day > 0 && day <= daysInMonth ? day : ""}
                      </td>
                    );
                  })}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default CalendarViewer;