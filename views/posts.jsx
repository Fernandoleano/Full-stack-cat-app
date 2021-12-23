import React from 'react'
import DefaultLayout from './layouts/default'
import Nav from './components/Nav'
import Footer from './components/Footer'
function posts(props) {
    return (
        <DefaultLayout title="Home Page">
            <Nav />
            <main>
        <section class="cats">
            <ul> {props.data.map(post => (
                <li>
                    <h3>{post.title}</h3>
                    <p><span>Breed: </span>{post.breed}</p>
                    <p><span>Description: </span>{post.body}</p>
                <ul class="buttons">
                    <li class="btn edit"><a href="">Change Info</a></li>
                    <li class="btn delete"><a href="">New Home</a></li>
                </ul>
            </li>
            ))}
            </ul>
        </section>
    </main>
            <Footer />
        </DefaultLayout>
    )
}

//export default Home
module.exports = posts
