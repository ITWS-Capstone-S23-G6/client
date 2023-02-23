import "./App.css";
import { useQuery, gql } from "@apollo/client";

const GET_SpaceCats = gql`
  query GetSpaceCats {
    spaceCats {
      id
      age
      missions {
        name
        description
      }
      name
      title
    }
  }
`;

const GET_Tracks = gql`
  query GetTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      author {
        name
        photo
      }
    }
  }
`;

// component
const DisplaySpaceCats = () => {
  const { loading, error, data } = useQuery(GET_SpaceCats);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <h1>Space Cats</h1>
      {data.spaceCats.map((spaceCat) => (
        <div key={spaceCat.id}>
          <h3>Name: {spaceCat.name}</h3>
          <h4>Age: {spaceCat.age}</h4>
          <h4>Title: {spaceCat.title}</h4>
          <b>About this spacecat's missions:</b>
          {spaceCat.missions.map((mission) => (
              <div className="missions" key={mission.id}>
                <h5>Missions: {mission.name}</h5>
                <p>Description: {mission.description}</p>
              </div>
              )
            )
          }
        <br />
        </div>
      ))}
    </>
  )
}

// component
const DisplayTracks = () => {
  const { loading, error, data } = useQuery(GET_Tracks);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
  <>
    <h1>Tracks For Home</h1>
    {data.tracksForHome.map((track) => (
      <div key={track.id}>
        <h3>Title: {track.title}</h3>
        <b>About this track:</b>
        <h4>Thumbnail</h4>
        <img src={track.thumbnail} alt="" className="photo"></img>
        <h4>Length: {track.length}</h4>
        <h4>Author: </h4>
        <p key={track.author.id}>
          {track.author.name}
        </p>
        <img src={track.author.photo} alt="" className="photo"></img>
      </div>
    ))}
  </>
  )
}

// app
const App = () => {
  return (
    <div className="App">
      <div>
        <h2>My first Apollo app 🚀</h2>
        <br />
        { /* better way to do this?
         https://www.apollographql.com/docs/technotes/TN0034-react-context/ */
        }
        <DisplaySpaceCats />
        <DisplayTracks />
      </div>
    </div>
  );
}

export default App;
