import { Layout, ContentLayout } from '../components/common/common.layout';
import { Sidebar } from "../components/common/common.sidebar";
import { Connect } from '../components/common/common.connect';
import { FaucetHeading } from '../components/faucet/faucet.heading';
import { FaucetTokens } from '../components/faucet/faucet.tokens';

export default function Faucet() {
    return(
        <Layout>
            <Sidebar tab="faucet"/>
            <Connect/>
            <ContentLayout>
                <FaucetHeading/>
                <FaucetTokens/>
            </ContentLayout>
        </Layout>
    )
}