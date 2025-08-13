import { gql } from "@apollo/client";

// Marketplace seller queries/mutations (names are illustrative and may vary per module)
export const GET_SELLER_BY_CUSTOMER = gql`
  query GetSellerByCustomer {
    sellerByCustomer {
      id
      shop_display_name
      shop_url
      email
      phone
      city
      country
      is_verified
      products_count
      rating_percent
    }
  }
`;

export const UPDATE_SELLER_PROFILE = gql`
  mutation UpdateSellerProfile($input: SellerProfileInput!) {
    updateSellerProfile(input: $input) {
      success
      message
      seller { id shop_display_name shop_url }
    }
  }
`;

export const REQUEST_PAYOUT = gql`
  mutation RequestPayout($amount: Float!) {
    requestSellerPayout(amount: $amount) {
      success
      message
    }
  }
`;
