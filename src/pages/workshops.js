import React from 'react';
import styled from 'styled-components';

import { workshops } from '../data';

const WorkshopsWrapper = styled.div`
  margin-bottom: 50px;
`;

const WorkshopTitle = styled.h2`
  font-family: Noto Sans ExtraCondensed;
  font-weight: bold;
  font-style: italic;
  font-size: 1.9rem;
  margin-top: 53px;
  margin-bottom: 0;
`;

const WorkshopSpeaker = styled.h3`
  font-family: Noto Sans ExtraCondensed;
  font-style: italic;
  font-weight: 400;
  margin-top: -1px;
  font-size: 1.5rem;
`;

const WorkshopDetails = styled.p``;

const WorkshopFooter = styled.p``;

const Workshop = (workshop, index) => (
  <WorkshopsWrapper key={`workshop_${index}`}>
    <WorkshopTitle>{workshop.title}</WorkshopTitle>
    <WorkshopSpeaker>by {workshop.speaker}</WorkshopSpeaker>

    <WorkshopDetails>{workshop.details}</WorkshopDetails>

    <WorkshopFooter>{workshop.footer}</WorkshopFooter>
  </WorkshopsWrapper>
);

const Workshops = () => <div>{workshops.map((workshop, index) => Workshop(workshop, index))} </div>;

export default Workshops;
