// All react components require React and frequently utilize the various "useSomeName" library hooks that come with React
import { useContext, useEffect } from "react"

// We use Axios to make RESTful calls to our backend server. This API.js file is intended to contain all calls to the backend in
// one conveinent place, however note that File Uploads are an exception and contain an API call in their architecture
import axios from "axios"

function handleName() {
    axios
      .get(`${env.API_BASE_URL}/stat_run_ready/${statRunId}`, {
        headers: contextValue.getTokens(),
      })
      .then((response) => {  })
      .catch((error) => console.log(error))
  }