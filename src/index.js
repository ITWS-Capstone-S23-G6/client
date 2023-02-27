import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UploadFile from './UploadFile';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      # query GetSpaceCats {
      #   spaceCats {
      #     id
      #     age
      #     missions {
      #       name
      #       description
      #     }
      #     name
      #   }
      # }
      query GetTracks {
        tracks {
          id
          title
          thumbnail
          length
          modulesCount
          author {
            name
            photo
          }
        }
      }
    `,
  })
  .then((result) => console.log(result));

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
      <UploadFile />
    </ApolloProvider>,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
