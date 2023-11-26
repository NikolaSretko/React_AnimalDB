import { v4 as uuidv4 } from 'uuid';

const AnimalItem = (props) => {
    return ( 
        <article className='animalCard'>
            <p>{props.emoji}</p>
            <p>{props.name}</p>
            <p>Species: {props.species}</p>
            <p>Habitat: {props.habitat}</p>
            <p>Diet: {props.diet}</p>
            <p>Lifespan: {props.lifespan} years</p>

            {props.funFacts && ( //opional (error handling ) wenn props.funfact true ist führe code aus 

                <div className='funFact'>
                    <p>Fun Facts:</p>
                    <ul>
                        {props.funFacts.map((fact) => (
                            <li key={uuidv4()}>{fact}</li>
                        ))}
                    </ul>
                </div>
            )}

        </article>
     );
}
 
export default AnimalItem;