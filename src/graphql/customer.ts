import { gql } from "@apollo/client";

// Customer-related queries/mutations
export const GET_CUSTOMER = gql`
  query GetCustomer {
    customer {
      id
      firstname
      lastname
      email
    }
  }
`;

export const GET_CUSTOMER_ORDERS = gql`
  query GetCustomerOrders($pageSize: Int = 10, $currentPage: Int = 1) {
    customerOrders(pageSize: $pageSize, currentPage: $currentPage) {
      items {
        id
        number
        order_date
        status
        total {
          grand_total { value currency }
        }
      }
      total_count
    }
  }
`;

export const UPDATE_CUSTOMER = gql`
  mutation UpdateCustomer($input: CustomerUpdateInput!) {
    updateCustomerV2(input: $input) {
      customer { id firstname lastname email }
    }
  }
`;
