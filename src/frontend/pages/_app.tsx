import React from 'react'
import App, { Container } from 'next/app'
import Header from '../components/Header';
import SearchComponent from '../components/SearchComponent';



interface IInitialProp {
    Component: any,
    ctx: any
}

class MyApp extends App {
    static async getInitialProps({ Component, ctx }: IInitialProp) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render() {
        const { Component, pageProps } = this.props

        return (
            <Container>
                <div id="app" className="bg-gray-200 antialiased">
                    <Header {...pageProps} />
                    <SearchComponent {...pageProps} />
                <main className="px-4 py-6">
                    <Component {...pageProps} />
                </main>
                </div>
            </Container>
        )
    }
}

export default MyApp
