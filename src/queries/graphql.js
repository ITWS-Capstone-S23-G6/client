import { gql } from "@apollo/client";

// ---------------- QUERIES ---------------------------------------------------
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
      useSkills {
        name
        category
      }
    }
  }
`;

export const GET_PEOPLE = gql`
  query GET_PEOPLE(
    $person_options: PersonOptions
    $skill_options: SkillOptions
  ) {
    people(options: $person_options) {
      name
      type
      skills(options: $skill_options) {
        name
      }
    }
  }
`;

export const GET_PROJECT_MATCHING_SCORE = gql`
  query Projects($peopleWhere: PersonWhere) {
    people(where: $peopleWhere) {
      name
      type
      matchProjects {
        coverage_score
        missed_skills
        similar_missed_skills
        project {
          name
        }
      }
    }
  }
`;

export const GET_PEOPLE_MATCHING_SCORE = gql`
  query Projects($where: ProjectWhere) {
    projects(where: $where) {
      name
      matchPeople {
        coverage_score
        missed_skills
        similar_missed_skills
        people {
          name
          type
        }
      }
    }
  }
`;

// ---------------- MUTATIONS -------------------------------------------------

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
