import './Main.scss'
import './MediaQuery.scss'
import AnimalList from './AnimalList'
import animals from '../../data/animaldb';

const Main = () => {
    return ( 
        <main>
            <AnimalList animalArr={animals}/>
        </main>
    );
}

export default Main;