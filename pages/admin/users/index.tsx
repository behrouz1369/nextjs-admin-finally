import AdminPanelLayout from "@/app/components/adminPanelLayout "
import { NextPageWithLayout } from "@/pages/_app"


const UsersPage : NextPageWithLayout = () => {


    return (
        <>
            <h2>welcome to page Users</h2>
        </>
    )
}

UsersPage.getLayout = (page) => <AdminPanelLayout>{page}</AdminPanelLayout>

export default UsersPage
