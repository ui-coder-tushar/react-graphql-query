import React, { useEffect } from "react";

import './CharacterList.css';
import useCharacters from "../Hooks/useCharacters";
import { Link } from "react-router";

export const CharactersList = () => {
    const { data, error, loading } = useCharacters();//useQuery<ItemsData>(GET_CHARACTERS);
   // const [data, error] = useQuery<ItemsData>(GET_CHARACTERS);

    useEffect(()=>{
        console.log(data);
    },[]);

    if(loading) return <div> LOADING...</div>
    if(error) return <div>SOMETHING WENT WRONG..</div>

   

    return <div className="characterList">
        {
            data?.characters?.results.map((character: {id:number, image: string | undefined; name: unknown; })=>{
                return <Link to={`${character?.id}`}>
                    <img src={character.image}/>
                    <div>{character.name}</div>
                </Link>
            })
        }
    </div>
 }