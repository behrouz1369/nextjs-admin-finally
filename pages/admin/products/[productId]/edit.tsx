
import AdminPanelLayout from "@/app/components/adminPanelLayout "
import { NextPageWithLayout } from "@/pages/_app"
import { useRouter } from "next/router"
import CreateProductForm from "@/app/form/admin/createProductForm"
import useSWR from "swr"
import { GetSingleProduct } from "@/app/services/product"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import ValidationError from "@/app/exceptions/validationError"
import EditProductForm from "@/app/form/admin/editProductForm"


const EditProduct : NextPageWithLayout = ({productId} : InferGetServerSidePropsType<typeof getServerSideProps>) => {
    // const [ showAddProduct , setShowAddProduct ] = useState(false);
    const router = useRouter()

    //Get The Product With ProductId
    const {data , error} = useSWR({url:`/admin/products/${productId}/edit`,productId} , GetSingleProduct)

    const isLoading = !data && !error

    //If The Product Is Not Exists Return 404 , Redirect To Products Admin Page
    if(error instanceof ValidationError){
        router.push('/admin/products')
        return <></>
    }

    return (
        <>
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-xl font-semibold text-gray-900">ایجاد محصول </h1>
                    </div>
                </div>
                <div className="mt-8 flex flex-col">
                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            {
                                isLoading
                                    ? <span>Loading...</span>
                                    : <EditProductForm product={data?.product}/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

EditProduct.getLayout = (page) => <AdminPanelLayout>{page}</AdminPanelLayout>

export const getServerSideProps : GetServerSideProps = async ({query}) => {

    return {
        props : {
            productId : query?.productId
        }
    }
}

export default EditProduct
