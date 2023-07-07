import React from "react";
import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import Head from "next/head";
import { Fragment } from "react";
require("dotenv").config();

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name='description' content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const uri = process.env.MONGODB_URI;
  const client = await MongoClient.connect(uri);
  const db = client.db();

  const meetupsCollection = db.collection("all-meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: "blocking", //if fallback true that means some of the pages are not pre-generated and they will be generated on the fly. Only most visited pages will be pre-generated. If the fallback is false, that means all pages will be pre-generated. "blocking" means that the page will be generated on the fly but it will be pre-generated for the next request.
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

//SSG runs in built time.
export async function getStaticProps(context) {
  //fetch data for a single meetup

  const meetupId = context.params.meetupId;

  const uri = process.env.MONGODB_URI;
  const client = await MongoClient.connect(uri);
  const db = client.db();

  const meetupsCollection = db.collection("all-meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        image: selectedMeetup.image,
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
