import React, {useState, useEffect} from 'react';
import './style.css';
import TinderCard from 'react-tinder-card'
import axios from "./../axios"

function Index() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchPerson() {
            const req = await axios.get('/tinder/cards');
            setPeople(req.data);
        }

        fetchPerson();
    }, [])

    const swiped = (direction, nameOfDelete) => {
        console.log('Removing: ' + nameOfDelete);
        // setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen');
    }

    return (
        <div className='tinder__cards'>
            <div className="tinder__cards__container">
                {people.map((person) => (
                    <TinderCard
                        className='swipe'
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div className='card' style={{backgroundImage: `url(${person.imageUrl})`}}>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>))}
            </div>
        </div>
    );
}

export default Index;