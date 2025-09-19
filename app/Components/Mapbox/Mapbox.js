"use client"
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { useGlobalContext } from '@/app/Context/GlobalContext';

function FlyToActiveCity({ activeCityCoords }) {
  const map = useMap();

  useEffect (() => {
    if(activeCityCoords) {
      const zoomLev = 13;
      const flyToOption = {
        duration: 2,
      }

      map.flyTo(
        [activeCityCoords.lat, activeCityCoords.lon], 
        zoomLev, 
        flyToOption
      );
    }
  }, [activeCityCoords, map])

  return null;
}

function Mapbox() {
    const { forecast } = useGlobalContext();

    const activeCityCoords = forecast?.coord;

    if (!forecast || !forecast.coord || !activeCityCoords) {
      return (
        <div>
          <h1>Loading</h1>
        </div>
      );
    }

    return (
      <div className='flex-1 basis-[50%] border col-span-3 rounded-lg'>
          <MapContainer
          center = {[activeCityCoords.lat, activeCityCoords.lon]}
          zoom = {13}
          scroolWheelZoom = {false}
          className='rounded-lg m-4'
          style = {{height: "calc(100% - 2rem)", width: "calc(100% - 2rem)"}}
          >
              <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />

              <FlyToActiveCity activeCityCoords={activeCityCoords} />
          </MapContainer>
      </div>
      
    )
}

export default Mapbox