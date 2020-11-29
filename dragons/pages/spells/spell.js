import Link from 'next/link'
import Head from 'next/head'

export default function Spell() {
    return (
        <>
            <Head>
                <title>Spell</title>
                <h2>
                    <Link href="/">
                        <a>Back to Home</a>
                    </Link>
                </h2>
            </Head>
        </>
    )
}