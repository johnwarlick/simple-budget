import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>Simple Budget</title>
        <meta name="description" content="A little more than a spreadsheet, a little less than the rest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css" media="all" />
      </Head>

      <header role="banner">
        <h1>Simple Budget</h1>
        <nav role="navigation">
        </nav>
      </header>
      <main role="main">
        <section>
            <h2>Monthly Budget</h2>
            <table id="monthly-budget">
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Income</th>
                        <th>Expenses</th>
                    </tr>    
                </thead>
                <tbody>
                </tbody>
            </table>                
        </section>
      </main>
      <footer>
        <small>Copyright &copy; <time>{new Date().getFullYear()}</time> <a href="https://johnathanwarlick.me">Johnathan Warlick</a></small>
      </footer>
    </>
  )
}
