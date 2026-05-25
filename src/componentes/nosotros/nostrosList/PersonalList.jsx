import { NosotrosCard } from "../nosotrosCard/NosotrosCard";


export function PersonalList({personal}){
    return(
        <>
            {personal.map(pers => (
                <NosotrosCard key={pers.id}{...pers}/>
            ))}
        </>
    );
}