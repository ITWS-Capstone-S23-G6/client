import { gql } from '@apollo/client'


export const SKILL = gql`
    query GET_SKILL {
        skills {
            name
            category
        }
    }
`

export const PROJECT = gql`
    query GET_PROJECT {
        projects {
            name
        }
    }
`

export const PERSON = gql`
    query GET_PERSON($options: SkillOptions) {
        people {
            name
            hasSkills(options: $options) 
            {
                name
            }
        }
    }
`
