import { CreateProductInterface } from "../contracts/admin/product"
import callApi from "../helpers/callApi"
import Product from "../models/product"


export const GetProduct = async ({page=1,per_page=2}) => {
    const res = await callApi().get(`/products?page=${page}&per_page=${per_page}`)

    return {products:res?.data?.data , total_page: res?.data?.total_page}
}

export const GetSingleProduct = async ({productId}:{productId:number}) => {
    const res = await callApi().get(`/products/${productId}`,{})

    return res?.data
}

export const CreateProduct = async (values : CreateProductInterface) => {
    return await callApi().post('/products/create' , {
        ...values,
        body:values.description,
        category:values.category_id
    } )
}

export const DeleteProduct = async (productId : number) => {
    return await callApi().post(`/products/${productId}/delete` , {} )
}

export const UpdateProduct = async (productId : number , values : CreateProductInterface) => {
    return await callApi().post(`/products/${productId}/update` , {
        ...values,
        body:values.description,
        category:values.category_id
    } )
}
