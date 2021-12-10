import { Layout, ContentLayout } from '../components/common/common.layout';
import { Sidebar } from "../components/common/common.sidebar";
import { Connect } from '../components/common/common.connect';
import { BondsCard } from '../components/bonds/bonds.card';
import { BondPopup } from '../components/bonds/bond.popup';

export default function Bonds() {
    return(
        <Layout>
            <Sidebar tab="bonds"/>
            <Connect/>
            <ContentLayout>
                <BondsCard/>
                <BondPopup/>
            </ContentLayout>
        </Layout>
    )
}