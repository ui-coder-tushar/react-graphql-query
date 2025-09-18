import { useParams } from "react-router";
import {useCharacter} from "../Hooks/useCharacter";
import './Character.css';

export const Character = () => {
    const {id}= useParams();
    const { data, error, loading } = useCharacter(id);

    if(loading) return <div> LOADING...</div>
    if(error) return <div>SOMETHING WENT WRONG..</div>

    return <div className="character">
            <img src={data.character.image} width={750} height={750}/>
            <div className="character-content">
                <h1>{data.character.name}</h1>
                <p>{data.character.gender}</p>
            </div>
            <div className="character-episode">
                {
                    data.character.episode.map((episode: { name: unknown;episode:unknown })=>{
                        return <div>
                            <div>{episode.name} - {episode.episode}</div>
                        </div>
                    })
                }
            </div>
    </div>
}