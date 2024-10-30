import "./globals.css"; 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Totsies</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DynaPuff:wght@400;700&display=swap" />
      </head>
      <body>
        <div className="rootContainer">
          {children}
        </div>
      </body>
    </html>
  );
}
