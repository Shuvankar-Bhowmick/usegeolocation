import { useState } from "react";

function useGeoLocation() {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function getGeoLocation() {
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      pos => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      error => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }

  return {
    isLoading,
    error,
    getGeoLocation,
    position,
  };
}

export default useGeoLocation;
