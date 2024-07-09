Very rudimental Spotify interface.

- Set up your dev app and get your tokens.
- Copy `.env.example` into `.env` with those tokens.
- Run a server to get an authentication token with `node index.js`, it should go through the authentication flow and display your access token (`TOKEN` on the `.env` file) in the same place where you executed the node command.
- Use `node spotify-fetch.js` to get stuff from the Spotify API.
