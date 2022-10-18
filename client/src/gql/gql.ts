import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  query GET_CATEGORIES {
    allCategories {
      id
      name
      foods {
        id
        name
        imgUrl
        basePrice
      }
    }
  }
`;

export const GET_OPTIONS = gql`
  query GET_OPTIONS($optionId: ID!) {
    option(id: $optionId) {
      temperature {
        c
        h
      }
      size {
        s
        m
        l
      }
    }
  }
`;

export const POST_ORDER = gql`
  mutation POST_ORDER {
    postOrder {
      orderNumber
    }
  }
`;
