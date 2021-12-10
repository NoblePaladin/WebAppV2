import { Layout, ContentLayout } from '../components/common/common.layout';
import { Sidebar } from "../components/common/common.sidebar";
import { Connect } from '../components/common/common.connect';
import { StakeCard } from '../components/stake/stake.card';

export default function Stake() {
    return(
        <Layout>
            <Sidebar tab="stake"/>
            <Connect/>
            <ContentLayout>
                <StakeCard/>
            </ContentLayout>
        </Layout>
    )
}