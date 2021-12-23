import React from 'react'

function DefaultLayout(props) {
    return (
<html>
        <head>
            <title> {props.title}</title>
        
            <meta charSet="utf-8" />
            <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="https://use.fontawesome.com/releases/v5.0.7/css/all.css" rel="stylesheet" />
            <link rel="stylesheet" href="../../content/styles/site.css" />
            <link rel="shortcut icon" type="image/png" href="../../content/images/pawprint.ico"/>
             <link rel='stylesheet' href="css/style.css" />
        </head>
        
        <body>
        {props.children}
        </body>
        </html>
        
    )
}

export default DefaultLayout
