import { useQuery } from '@apollo/client';
import {GET_CHARACTERS} from '../Shared/gql_Queries';

const useCharacters = () => {
    const { data, error, loading } = useQuery(GET_CHARACTERS);
    return {
        data,
        error,
        loading
    }
}

export default useCharacters;