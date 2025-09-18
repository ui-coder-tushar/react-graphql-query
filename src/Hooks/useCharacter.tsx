import {gql, useQuery} from '@apollo/client';

export const GET_CHARACTER = gql `
query getCharacter($id:ID!){
 character(id:$id){
 id 
 name
 image
 episode {
   name
   episode
 }
 }
}
`
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