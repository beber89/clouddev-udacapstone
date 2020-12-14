import app from './app';

  const port = process.env.PORT || 8081;
  // Start the Server
  app.listen( port, () => {
    console.log( `server running ${port}` );
    console.log( `press CTRL+C to stop server` );
  } );