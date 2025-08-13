import { gql } from "@apollo/client";

export const GET_VENDOR_PRODUCTS = gql`
  query GetVendorProducts($sellerId: ID!, $search: String, $pageSize: Int = 12, $currentPage: Int = 1, $sort: ProductAttributeSortInput) {
    products(
      search: $search
      pageSize: $pageSize
      currentPage: $currentPage
      sort: $sort
      filter: { seller_id: { eq: $sellerId } }
    ) {
      items {
        id
        sku
        name
        small_image { url }
        price_range { minimum_price { regular_price { value currency } } }
      }
      total_count
      page_info { current_page page_size }
    }
  }
`;

export const CREATE_VENDOR_PRODUCT = gql`
  mutation CreateVendorProduct($input: ProductInput!) {
    createVendorProduct(input: $input) {
      success
      message
      product { id sku name }
    }
  }
`;
