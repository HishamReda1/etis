import { type NextPageIntlayer, IntlayerClientProvider } from "next-intlayer";
import { IntlayerServerProvider } from "next-intlayer/server";
import Home from "../page";

const Page: NextPageIntlayer = async ({ params }) => {
    const { locale } = await params;

    return (
        <IntlayerServerProvider locale={locale}>
            <IntlayerClientProvider locale={locale}><Home/></IntlayerClientProvider>
        </IntlayerServerProvider>
    );

}

export default Page;