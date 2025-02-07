import AdminPanelLayout from "@/app/components/adminPanelLayout ";
import { NextPageWithLayout } from "../_app";



const AdminPage : NextPageWithLayout = () => {

    return(
        <>
            <div>welcome to page dashboard</div>
        </>
    )
}

AdminPage.getLayout = (page) => <AdminPanelLayout>{page}</AdminPanelLayout>

export default AdminPage
