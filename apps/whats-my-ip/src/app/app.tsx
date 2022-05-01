import React from "react";
import Loader from "./components/Loader/index";
import Card from "./components/Card";
import { useQuery } from 'react-query';
import { API_KEY } from "./constants";
import axios from "axios";
import MapCard from "./components/MapCard/Map";
import Geodata from "./core/types/Geodata";
import LocationDetails from "./components/LocationDetails";
import { Footer } from "@janca/components";

export default function App() {
  const { data: userIp } = useQuery('user-ip', () => axios("https://api.ipify.org").then(res =>
    res.data
  ));
  const { data: geodata, error } = useQuery<Geodata>(
    ['geodata', userIp],
    () => axios("https://geo.ipify.org/api/v1", {
      method: 'GET',
      params: {
        apiKey: API_KEY, ipAddress: userIp
      }
    }).then(res => res.data), { enabled: !!userIp });

  return (
    <div className="flex mx-auto items-center place-content-center h-screen container">
      <Card className="py-6 mx-auto" inner={false}>
        {geodata ? (
          <div className="flex flex-col gap-4">
            <Card inner={true}>
              <div className="transition text-white duration-150 ease-in-out my-4">
                <p className="">Tu dirección IP es</p>
                <h4 className="lg:text-5xl text-3xl font-bold">{userIp}</h4>
              </div>
            </Card>
            <Card inner={true} className={`h-96 lg:row-span-1 row-auto relative map-container`}>
              <MapCard {...geodata?.location} />
            </Card>
            <LocationDetails {...geodata} />
          </div>
        ) : error ? <div>{`${error}`}</div> : <Loader />}

        <Footer />
      </Card>
    </div>
  )
}
