const API = 'http://gateway.marvel.com/v1/public/comics'

// const content = null || document.getElementById('content')

const options = {
	method: 'GET',
  Params: {
    "apikey": "key798c2900bb33abcb76ff736113d3bcea",
  },
  Headers: {
    Accept: "f0fbae65eb2f8f28bdeea0a29be8749a4e67acb3"
  },
};

async function fetchData(urlApi){
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API);
    let view = videos.items.map(video =>
      console.log(video.datañ));
  } catch (error) {
    
  }
})();
