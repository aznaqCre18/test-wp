import React, { useEffect, useState } from 'react';

import { titleSection } from './../../constant/titleSections';
import { API_URL, AUTHORIZATION } from '../../config';

const Trips = () => {
  const [tripsData, setTripsData] = useState([]);

  useEffect(() => {
    _handleGetTrips();
  }, [])

  const _handleGetTrips = () => {
    fetch(API_URL, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": AUTHORIZATION,
      },
      body: JSON.stringify({
        query: `
          query QueryType {
            trips {
              id
              data {
                thumbnail {
                    file_name
                    id
                    url
                }
                title
              }
            }
          }
        `
      })
    })
    .then(res => res.json())
    .then(data => {
        setTripsData(data.data.trips);
    })
  }

  return (
    <div className="trips-container">
      <div className="title-wrapper">
          <h1 className="title">{titleSection.tripsTitle}</h1>
      </div>
      <div className="grid-wrapper">
        {
          tripsData.length > 0 && tripsData.map((item, idx) => {
            return (
              <div className={`list trip-list-${idx}`} key={idx}>
                  <img src={item && item.data && item.data.thumbnail && item.data.thumbnail.url} alt={item && item.data && item.data.thumbnail && item.data.thumbnail.file_name} className="trip-img" />
                  <h3>{item && item.data && item.data.title}</h3>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Trips;
