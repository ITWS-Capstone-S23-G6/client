import { gql } from "@apollo/client";

export const GET_SKILL = gql`
  query GET_SKILL {
    skills {
      name
      category
    }
  }
`;

export const GET_PROJECT = gql`
  query GET_PROJECT {
    projects {
      name
    }
  }
`;

export const GET_PEOPLE = gql`
  query GET_PEOPLE($person_options: PersonOptions, $skill_options: SkillOptions) {
    people(options: $person_options) {
      name
      type
      skills(options: $skill_options) {
        name
      }
    }
  }
`;


export const ADD_PERSON_SKILLS = gql`
  mutation Add_Person_Skills($input: [PersonCreateInput!]!) {
    createPeople(input: $input) {
      people {
        name
        type
        skillsConnection {
          edges {
            node {
              name
            }
          }
        }
      }
      info {
        nodesCreated
        relationshipsCreated
      }
    }
  }
`;
