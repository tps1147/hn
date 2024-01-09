"use client"
import React, { useState, useEffect } from 'react';
import { Calendar as AntdCalendar, theme } from 'antd';
import styles from '../styles/calendar.module.css';

const Calendar = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Event 1',
      date: '2023-12-01'
    },
    {
      id: 2,
      title: 'Event 2',
      date: '2023-12-02'
    },
    {
      id: 3,
      title: 'Event 3',
      date: '2023-12-03'
    }
  ]);

  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
    backgroundColor: 'black',
  };

//   useEffect(() => {
//     const fetchEvents = async () => {
//       const res = await axios.get('http://your-server-url/api/events');
//       setEvents(res.data);
//     };

//     fetchEvents();
//   }, []);

  const dateCellRender = (value) => {
    const listData = events.filter(event => event.date === value.format('YYYY-MM-DD'));

    return (
      <ul >
        {listData.map(item => (
          <li className={styles.event} key={item.id}>
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={styles.mainCalendar}>
      <AntdCalendar fullscreen={false} cellRender={dateCellRender} />
    </div>
  );
};

export default Calendar;

