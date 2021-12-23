import React from 'react'
import DefaultLayout from './layouts/default'
import Nav from './components/Nav'

function addbreed() {
    return (
        <DefaultLayout title="About Page">
            <Nav />
            Cat breed
        </DefaultLayout>
    )
}

module.exports = addbreed;
