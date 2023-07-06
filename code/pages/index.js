import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";
require("dotenv").config();

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Meetup App</title>
        <meta
          name='description'
          content='Celebrate Connections: Your Ultimate Meetup App! Find Meetups so you can do more of what matters to you. Or create your own group and meet people near you who share your interests. (Next.js, React.js, MongoDB, Node.js)'
        />
      </Head>
      <MeetupList meetups={props.all_meetups} />
    </Fragment>
  );
}

//"Server-Side Rendering (SSR)" approach is preventing the not pre-rendering the page based datas we assigned which useState and useEffect cause of. Difference between SSG and SSR is that SSG is pre-rendering the page based datas at build time and SSR is pre-rendering the page based datas at request time.
/* export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;

  // fetch data from an API
  return {
    props: {
      all_meetups: DUMMY_MEETUPS,
    },
  };
} */

//The next.js feature of, "data fetching for static pages" or "Static Site Generation SSG" approach is preventing the not pre-rendering the page based on datas we assigned which useState and useEffect cause of.
export async function getStaticProps() {
  // fetch data from an API

  const uri = process.env.MONGODB_URI;
  const client = await MongoClient.connect(uri);
  const db = client.db();

  const meetupsCollection = db.collection("all-meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      all_meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1, //revalidate means that the page will be regenerated after 10 seconds if there is a new request to the page.
  };
}

export default HomePage;
