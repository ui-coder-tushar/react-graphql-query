import {useQuery} from '@apollo/client';
import {GET_CHARACTER} from '../Shared/gql_Queries';

export const useCharacter = (id:string|undefined) =>{
    const { error, data, loading } = useQuery(GET_CHARACTER,{
        variables:{
            id
        }
    })
    return {
        error, data, loading
    }
}