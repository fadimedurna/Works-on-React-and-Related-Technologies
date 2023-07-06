import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";
import { Fragment } from "react";

function NewMeetupPage() {
  const router = useRouter(); //useRouter is a hook is used to get access to the router object. We can use this object to redirect the user to a different page.
  async function addMeetupHandler(enteredMeetupData) {
    //console.log(enteredMeetupData); // send this data to API

    //POST /api/new-meetup
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData), //converts enteredMeetupData to JSON
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = response.json();

    console.log(data);

    //redirect the user to the home page
    router.push("/"); //difference between redirect and push is that push is adding the page to the stack and redirect is replacing the page in the stack.
  }

  return (
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name='description'
          content='Add your own meetups and create amazing networking opportunities.'
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetupPage;
