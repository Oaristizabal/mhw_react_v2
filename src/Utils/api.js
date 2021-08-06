// All react components require React and frequently utilize the various "useSomeName" library hooks that come with React
import { useContext, useEffect } from "react"

// We use Axios to make RESTful calls to our backend server. This API.js file is intended to contain all calls to the backend in
// one conveinent place, however note that File Uploads are an exception and contain an API call in their architecture
import axios from "axios"

function handleName() {
  axios
    .get(`https://maps.googleapis.com/maps/api/directions/json?origin=25.8088329,-80.318059&destination=28.3809823,-81.5442194&key=${process.env.REACT_APP_API_KEY}=true`, {
      headers: {"Access-Control-Allow-Origin": '*'},
    })
    .then((response) => { })
    .catch((error) => console.log(error))
}



