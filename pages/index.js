import Landing from "../components/Landing";
import { useState } from "react";
import { gpl, useQuery } from "@apollo/client";
import EventCard from "../components/EventCard";
import { id } from "ethers/lib/utils";

const UPCOMING_EVENTS = gpl`
query Event($currentTimestamp:String) {
  events(where:{eventTimestamp_gt: $currentTimestamp}) {
    id
    name
    eventTimestamp
    imageURL

  }
}`;

export default function Home() {
  const [currentTimestamp,setEventTimestamp] = useState(
    new Date().getTime().toString()
  );
  const {loading,error, data}=useQuery(UPCOMING_EVENTS,{
    variables:{ currentTimestamp},
  })
  if(loading)
    return(
       <Landing>
        <p>Loading...</p>
       </Landing>
    )
  if(error)
    return(
       <Landing>
        <p>`Error! ${error.message}`</p>
       </Landing>
    )
  return (
    <Landing>
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      ></ul>
    </Landing>
  );
}
