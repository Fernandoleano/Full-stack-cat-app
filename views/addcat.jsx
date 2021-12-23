import React from 'react'
import DefaultLayout from './layouts/default'
import Nav from './components/Nav'

function addcat() {
    return (
        <DefaultLayout title="About Page">
            <Nav />
            Cat
        </DefaultLayout>
    )
}

module.exports = addcat;
