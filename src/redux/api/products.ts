import { Blush, Bronzer, Eyeliner, Product, Eyeshadow, Foundation, Lipliner, Mascara } from "../../types/auth";
import { api } from "./index";

const productsApi = api.injectEndpoints({
    endpoints: (build) => ({
        getProducts: build.query<Product[], undefined>({
            query: () => ({
                url: "/products.json",
            }),
            providesTags: ["PRODUCTS"]
        }),
        getProductsBlush: build.query<Blush[], undefined>({
            query: () => ({
                url: "/products.json?product_category=powder&product_type=blush",
                params: {
                    category: "makeup"
                }
            }),
            providesTags: ["PRODUCTS"]
        }),
        getProductsBronzer: build.query<Bronzer[], undefined>({
            query: () => ({
                url: "/products.json?product_category=powder&product_type=bronzer",
                params: {
                    category: "makeup"
                }
            }),
            providesTags: ["PRODUCTS"]
        }),
        getProductsEyeLiner: build.query<Eyeliner[], undefined>({
            query: () => ({
                url: "/products.json?product_category=liquid&product_type=eyeliner",
                params: {
                    category: "makeup"
                }
            }),
            providesTags: ["PRODUCTS"]
        }),
        getProductsEyeshadow: build.query<Eyeshadow[], undefined>({
            query: () => ({
                url: "/products.json?product_category=palette&product_type=eyeshadow",
                params: {
                    category: "makeup"
                }
            }),
            providesTags: ["PRODUCTS"]
        }),
        getProductsFoundation: build.query<Foundation[], undefined>({
            query: () => ({
                url: "/products.json?product_category=concealer&product_type=foundation",
                params: {
                    category: "makeup"
                }
            }),
            providesTags: ["PRODUCTS"]
        }),
        getProductsLipliner: build.query<Lipliner[], undefined>({
            query: () => ({
                url: "/products.json?product_category=lipstick&product_type=lipstick",
                params: {
                    category: "makeup"
                }
            }),
            providesTags: ["PRODUCTS"]
        }),
        getProductsMascara: build.query<Mascara[], undefined>({
            query: () => ({
                url: "/products.json?product_category=&product_type=mascara",
                params: {
                    category: "makeup"
                }
            }),
            providesTags: ["PRODUCTS"]
        })
    })
})



export const {
    useGetProductsQuery,
    useGetProductsBlushQuery,
    useGetProductsBronzerQuery,
    useGetProductsEyeLinerQuery,
    useGetProductsEyeshadowQuery,
    useGetProductsFoundationQuery ,
    useGetProductsLiplinerQuery,
    useGetProductsMascaraQuery

} = productsApi;