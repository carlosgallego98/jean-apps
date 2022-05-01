import React, { Component } from 'react'
import { MapContainer, TileLayer, Marker, Popup, CircleMarker } from 'react-leaflet'
import Location from '../../core/types/Location';


export default function Map(location: Location) {
    const { lat, lng, city } = location;
    return (
        <MapContainer center={[lat, lng]} zoom={17} scrollWheelZoom={true} className="absolute left-0 right-0 top-0 bottom-0">
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <CircleMarker center={[lat, lng]}  pathOptions={{ color: 'gray' }} radius={50}>
                <Popup>Popup in CircleMarker</Popup>
            </CircleMarker>
            <Marker position={[lat, lng]}>
                <Popup>
                    Ubicación aproximada: <b>{city}</b>
                </Popup>
            </Marker>
        </MapContainer>
    )
}

