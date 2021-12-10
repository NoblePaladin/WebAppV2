import { Layout, ContentLayout } from '../components/common/common.layout';
import { Sidebar } from "../components/common/common.sidebar";
import{ Connect } from '../components/common/common.connect';
import { IndexHeading } from '../components/index/index.heading';
import { IndexTokens } from '../components/index/index.tokens';

export default function Index() {
    return(
        <Layout>
            <Sidebar tab="dashboard"/>
            <Connect/>
            <ContentLayout>
                <IndexHeading/>
                <IndexTokens/>
            </ContentLayout>
        </Layout>
    )
}