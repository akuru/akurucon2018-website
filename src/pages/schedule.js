import React from 'react';
import styled from 'styled-components';

import { schedules } from '../data';

const PageTitle = styled.h2`
  font-family: Noto Sans ExtraCondensed;
  font-weight: bold;
  font-style: italic;
  font-size: 1.9rem;
  margin-top: 53px;
  border-bottom: 3px solid #351544;
  padding-bottom: 15px;
`;

const Event = styled.div`
  display: grid;
  grid-template-columns: 95px 0.7fr 1fr 0.8fr;
  font-family: Noto Sans Condensed;
  grid-column-gap: 20px;
  margin-bottom: 45px;

  &.new-event-group:not(:first-of-type) {
    margin-top: 111px;
  }
`;

const EventDate = styled.div`
  .event-day-container {
    display: grid;
    grid-template-columns: 40px 55px;
  }

  .event-day {
    grid-row: span 2;
    font-weight: bold;
    font-size: 2.2rem;
    grid-row: span 2;
    font-weight: bold;
    font-size: 38px;
    display: flex;
    height: 42px;
    margin-top: -8px;
  }

  .event-month {
    font-weight: bold;
  }

  .event-day-of-week {
    margin-top: -5px;
  }
`;

const EventTime = styled.div`
  font-weight: bold;
`;

const EventInfo = styled.div``;

const SpecialEventInfo = styled.span`
  font-weight: bold;
  color: #eb682e;
`;

const EventVenue = styled.div`
  text-align: right;
`;

const renderEvent = (schedule, event, index) => (
  <Event className={index === 0 ? 'new-event-group' : ''}>
    <EventDate>
      {index === 0 && (
        <div className="event-day-container">
          <div className="event-day">{schedule.day}</div>
          <div className="event-month">{schedule.month}</div>
          <div className="event-day-of-week">{schedule.dayOfWeek}</div>
        </div>
      )}
    </EventDate>
    <EventTime>{event.time}</EventTime>
    <EventInfo>
      {event.specialEventTitle ? (
        <SpecialEventInfo>{event.specialEventTitle}</SpecialEventInfo>
      ) : (
        <span>
          <strong>
            {event.type}
            {event.title ? ':' : ''}
          </strong>{' '}
          {event.title}
          <br /> by <strong>{event.speaker}</strong>
        </span>
      )}
    </EventInfo>
    <EventVenue>
      <strong>@{event.venue}</strong>
    </EventVenue>
  </Event>
);

const Schedule = () => (
  <div>
    <PageTitle>Event Schedule</PageTitle>

    <div>
      {schedules.map(schedule =>
        schedule.events.map((event, index) => renderEvent(schedule, event, index))
      )}
    </div>
  </div>
);

export default Schedule;
