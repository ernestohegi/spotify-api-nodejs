Very rudimental Spotify interface.

- Set up your dev app and get your client tokens.
- Copy `.env.example` into `.env` and add the client tokens you just got.
- Run the server to get an authentication token with `node index.js`, visit `http://localhost:8888` and it should go through the authentication flow and display your access token (`TOKEN` on the `.env` file) in the same place where you executed the node command.
- Use `node spotify-fetch.js` to get stuff from the Spotify API.
