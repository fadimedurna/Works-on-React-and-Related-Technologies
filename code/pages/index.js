import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup!",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.all_meetups} />;
}

//"Server-Side Rendering (SSR)" approach is preventing the not pre-rendering the page based datas we assigned which useState and useEffect cause of.Difference between SSG and SSR is that SSG is pre-rendering the page based datas at build time and SSR is pre-rendering the page based datas at request time.
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

//The next.js feature of, "data fetching for static pages" or "Static Site Generation SSG" approach is preventing the not pre-rendering the page based datas we assigned which useState and useEffect cause of.
export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      all_meetups: DUMMY_MEETUPS,
    },
    revalidate: 10, //revalidate means that the page will be regenerated after 10 seconds if there is a new request to the page.
  };
}

export default HomePage;

//deneme
