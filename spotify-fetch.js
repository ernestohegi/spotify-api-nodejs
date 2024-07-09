require('dotenv').config()

const token = process.env.TOKEN;

const fetchWebApi = async (endpoint, method, body) => {
  console.log(`https://api.spotify.com/${endpoint}`);

  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });

  console.log(res.status);

  if (res.status === 401) {
    console.log('Need to reauthenticate.')
  }

  return await res.json();
}

const getTopTracks = async () => {
  const topTracks = await fetchWebApi(
    'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
  );

  return topTracks.items;
}

const getPlaylists = async () => {
  const playlists = await fetchWebApi(
    'v1/me/playlists', 'GET'
  );

  return playlists.items;
}

const getSavedTracks = async () => {
  const tracks = await fetchWebApi(
    'v1/me/tracks?offset=0&limit=50', 'GET'
  );

  return tracks.items;
}

const runTopTracks = async () => {
  const topTracks = await getTopTracks();

  topTracks && console.log(
    topTracks?.map(
      ({name, artists}) =>
        `${name} by ${artists.map(({ name }) => name).join(', ')}`
    )
  );
}

const runPlaylists = async () => {
  const playlists = await getPlaylists();

  playlists && console.log(
    playlists?.map((({ name }) => name))
  );
}

const runSavedTracks = async () => {
  const tracks = await getSavedTracks();

  tracks && console.log(
    tracks.map(({ track}) => {
      const { name, artists } = track;

      return `${artists[0].name} - ${name}`;
    })
  );
}

console.log('Running Spotify script');

runSavedTracks();
