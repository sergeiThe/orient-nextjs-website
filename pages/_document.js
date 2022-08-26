import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="no">
                <Head />
                <body>

                    <div id="mobile-menu"></div>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument