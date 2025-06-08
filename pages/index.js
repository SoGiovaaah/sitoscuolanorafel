import Head from 'next/head'
import { Button, Card } from '../once-ui'

export default function Home() {
  return (
    <>
      <Head>
        <title>BiagioDelPezzoDelivery</title>
      </Head>
      <header>
        <h1>BiagioDelPezzoDelivery</h1>
        <p>Portiamo la consegna a domicilio a un altro livello</p>
      </header>
      <main>
        <Card title="Ordina subito">
          <p>Scopri la comodità di ricevere i tuoi piatti preferiti a casa.</p>
          <Button onClick={() => alert('Ordine inviato!')}>Ordina</Button>
        </Card>
      </main>
    </>
  )
}
