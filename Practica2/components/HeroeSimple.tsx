import {FunctionalComponent} from 'preact';
import {Hero, HeroesResponse} from '../heroes.ts';

const HeroeSimple: FunctionalComponent<Hero> = (props) => {
    const {name, image, sound} = props;
    return (
        <div>
            <p>{name}</p>
            <image src={image}></image>
            <audio controls> <source src={sound}/> </audio>
        </div>
    )
}

export default HeroeSimple;