import { gql } from "@apollo/client";

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

export const GET_CHARACTERS = gql`
query {
  characters{
    results {
      id,
      name,
      image,
      gender
    }
}
}
`