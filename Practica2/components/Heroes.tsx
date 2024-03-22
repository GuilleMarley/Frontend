import {FunctionalComponent} from 'preact';
import {Hero, HeroesResponse} from '../heroes.ts';
import HeroeSimple from "./HeroeSimple.tsx";

const Heroes: FunctionalComponent<HeroesResponse> = (props) => {
    const {heroes} = props;
    return (
        <div>
            {heroes.map((h)=><HeroeSimple name = {h.name} image ={h.image} sound = {h.sound}/>)}
        </div>
    )
}

export default Heroes;