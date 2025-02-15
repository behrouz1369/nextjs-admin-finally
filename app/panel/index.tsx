
import UserInfo from "@/app/components/panel/userInfo";
import { NextPageWithLayout } from "../_app";
import UserPanelLayout from "@/app/components/userPanelLayout";


const Panel : NextPageWithLayout = () => {


    return (
        <>
            <div>
                <h2>Page User Panel</h2>

                <UserInfo />
            </div>
        </>
    )
}

Panel.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>

export default Panel
