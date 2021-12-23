import React from 'react'
import DefaultLayout from './layouts/default'
import Nav from './components/Nav'
import Footer from './components/Footer'
function Home(props) {
    return (
        <DefaultLayout title="Home Page">
            <Nav />
            <main>
        <section class="cats">
            <ul> {props.data.pets.map(pet => (
                <li>
                    <img src={pet.img} alt="" />
                    <h3>{pet.name}</h3>
                    <p><span>Breed: </span>{pet.breed}</p>
                    <p><span>Description: </span>{pet.description}</p>
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
module.exports = Home
