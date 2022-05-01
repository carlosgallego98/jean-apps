import React from "react";
import Loader from "./components/Loader/index";
import { useQuery } from 'react-query';
import { API_KEY } from "./constants";
import axios from "axios";
import MapCard from "./components/MapCard/Map";
import Geodata from "./core/types/Geodata";
import LocationDetails from "./components/LocationDetails";
import { Card, Footer } from "@janca/components";

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
      <Card className="py-6 mx-auto bg-indigo-800/30 max-w-xl w-full">
        {geodata ? (
          <div className="flex flex-col gap-4">
            <Card className="bg-white/5">
              <div className="transition text-white duration-150 ease-in-out my-4">
                <p className="">Tu dirección IP es</p>
                <h4 className="lg:text-5xl text-3xl font-bold">{userIp}</h4>
              </div>
            </Card>
            <Card className={`h-96 bg-white/5 lg:row-span-1 row-auto relative map-container`}>
              <MapCard {...geodata?.location} />
            </Card>
            <Card className="bg-white/5">
              <LocationDetails {...geodata} />
            </Card>
          </div>
        ) : error ? <div>{`${error}`}</div> : <Loader />
        }
        <Footer />
      </Card >
    </div >
  )
}
