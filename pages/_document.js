import Document, { Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
    render() {
        return (
            <html lang="en">
                <Head />
                <body>
                    <script async custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js" />
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
