import { v4 as uuidv4 } from 'uuid';
import AnimalItem from './AnimalItem'


const AnimalList  = (props) => {
    return ( 
        <section className='animalGallery'>
            {props.animalArr.map((animal)=><AnimalItem
                key = {uuidv4()}
                name = {animal.name}
                emoji = {animal.emoji}
                species = {animal.species}
                habitat = {animal.habitat}
                diet = {animal.diet}
                lifespan = {animal.lifespan}
                funFacts = {animal.funFacts}
            />)}
        </section>
    );
}

export default AnimalList;