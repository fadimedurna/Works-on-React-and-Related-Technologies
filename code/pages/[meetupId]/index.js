import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/DC_Comics_logo.png/600px-DC_Comics_logo.png'
      title='First Meetup'
      address='Some Street 5, Some City'
      description='This is a first meetup!'
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false, //if fallback true that means some of the pages are not pre-generated and they will be generated on the fly. Only most visited pages will be pre-generated. If the fallback is false, that means all pages will be pre-generated.
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  //fetch data for a single meetup

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/DC_Comics_logo.png/600px-DC_Comics_logo.png",
        id: meetupId,
        title: "First Meetup",
        address: "Some Street 5, Some City",
        description: "This is a first meetup!",
      },
    },
  };
}

export default MeetupDetails;
