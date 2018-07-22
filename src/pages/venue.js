import React from 'react';
import styled from 'styled-components';

import mahaweliCentre from '../assets/images/mahaweli_centre.jpg';
import royalCollegeUnionSkillsCentre from '../assets/images/royal_college_union_skills_centre.jpg';

const VenueWrapper = styled.div`
  margin-bottom: 50px;
`;

const SectionTitle = styled.h2`
  font-family: Noto Sans ExtraCondensed;
  font-weight: bold;
  font-style: italic;
  font-size: 1.9rem;
  margin-top: 53px;
`;

const VenuePhoto = styled.img`
  margin-bottom: 11px;
`;

const VenueDetails = styled.p``;

const VenueAddress = styled.p`
  font-weight: bold;
`;

const Venue = () => (
  <VenueWrapper>
    <SectionTitle>Mahaweli Centre</SectionTitle>

    <VenuePhoto src={mahaweliCentre} alt="Mahaweli Centre" />

    <VenueDetails>
      The main event of the conference will be held at <strong>Mahaweli Centre</strong> which is 5
      minutes away from the Colombo Public Library.
    </VenueDetails>

    <VenueDetails>
      All presentations made by our distingushed guest speaker <strong>Martin Majoor</strong> will
      take place at this venue.
    </VenueDetails>

    <VenueAddress>
      Mahaweli Centre Auditorium, <br />
      69, Ananda Cumaraswamy Mawatha (Nelum Pokuna Mawatha), <br />
      Colombo 07
    </VenueAddress>

    <iframe
      title="Mahaweli Centre Map"
      src={
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8276000319242!2d79.85811' +
        '941550699!3d6.911206920450223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259' +
        '6f07ae4617%3A0xbea87d71600f559!2sMahaweli+Center!5e0!3m2!1sen!2suk!4v1532238597764'
      }
      width="100%"
      height="400"
      frameBorder="0"
      style={{ border: 0 }}
      allowFullScreen
    />

    <SectionTitle>Royal College Union Skills Centre</SectionTitle>

    <VenuePhoto src={royalCollegeUnionSkillsCentre} alt="Royal College Union Skills Centre" />

    <VenueDetails>
      The AkuruCon <u>workshops</u> will be held at{' '}
      <strong>Royal College Union Skills Centre</strong> which is just 15 minutes walk from the{' '}
      <strong>Mahaweli Centre</strong>, where the main event will take place.
    </VenueDetails>

    <VenueAddress>
      RCU Skills Centre <br />
      Royal College Union <br />
      Rajakeeya Mawatha <br />
      Colombo 07
    </VenueAddress>

    <iframe
      title="Royal College Union Skills Centre Map"
      src={
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8763136718508!2d79.8573067' +
        '1550705!3d6.905390920519818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae' +
        '25964915d8f8b%3A0xa9e49e4362db4c87!2sRCU+Skills+Centre!5e0!3m2!1sen!2suk!4v1532239208320'
      }
      width="100%"
      height="400"
      frameBorder="0"
      style={{ border: 0 }}
      allowFullScreen
    />
  </VenueWrapper>
);

export default Venue;
