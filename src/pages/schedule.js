import React, { PureComponent } from 'react';
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
    margin-top: 135px;
  }

  @media screen and (max-width: 650px) {
    grid-template-columns: 0px 0.7fr 1fr 0.8fr;
    grid-column-gap: 2px;

    &.new-event-group {
      margin-top: 97px;

      &:not(:first-of-type) {
        margin-top: 155px;
      }
    }
  }
`;

const EventDate = styled.div`
  .event-day-container {
    display: grid;
    grid-template-columns: 40px 55px;

    @media screen and (max-width: 650px) {
      margin-top: -67px;

      &.extra-space {
        margin-top: -107px;
      }
    }
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

const RegisterOrFree = styled.span`
  font-weight: bold;
  color: #eb682e;
  grid-column-start: 1;
  grid-column-end: 3;
  font-size: 0.9rem;
`;

const RegisterNowButton = styled.a`
  background-color: #fbe0c8;
  padding: 4px 10px;
  text-decoration: none;
  color: #351544;
  margin-top: 4px;
  display: block;
  border-radius: 5px;
  cursor: pointer;
  font-family: Noto Sans ExtraCondensed;
  font-weight: bold;
  font-style: italic;
  text-align: center;
  transition: all 0.5s;

  &:hover {
    color: #fff;
    background-color: #351544;
  }
`;

const renderEvent = (schedule, event, index, scheduleIndex) => (
  <Event key={`${scheduleIndex}-${index}`} className={index === 0 ? 'new-event-group' : ''}>
    <EventDate>
      {index === 0 && (
        <div className={`event-day-container ${schedule.free ? '' : 'extra-space'}`}>
          <div className="event-day">{schedule.day}</div>
          <div className="event-month">{schedule.month}</div>
          <div className="event-day-of-week">{schedule.dayOfWeek}</div>

          {schedule.free ? (
            <RegisterOrFree>FREE ENTRY</RegisterOrFree>
          ) : (
            <RegisterOrFree>
              LIMITED ENTRY <br />{' '}
              <RegisterNowButton href="https://takas.lk/akurucon.html" target="_blank">
                Register Now
              </RegisterNowButton>
            </RegisterOrFree>
          )}
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

class Schedule extends PureComponent {
  componentDidMount() {
    const parallaxElements = document.getElementsByClassName('parallax-outer');
    if (parallaxElements) {
      Array.prototype.forEach.call(parallaxElements, parallaxElement => {
        parallaxElement.classList.add('parallax-to-back');
      });
    }
  }

  componentWillUnmount() {
    const parallaxElements = document.getElementsByClassName('parallax-outer');

    if (parallaxElements) {
      Array.prototype.forEach.call(parallaxElements, parallaxElement => {
        parallaxElement.classList.remove('parallax-to-back');
      });
    }
  }

  render() {
    return (
      <div className="transition-item site-page">
        <PageTitle>Event Schedule</PageTitle>

        <div>
          {schedules.map((schedule, scheduleIndex) =>
            schedule.events.map((event, index) =>
              renderEvent(schedule, event, index, scheduleIndex)
            )
          )}
        </div>
      </div>
    );
  }
}

export default Schedule;
