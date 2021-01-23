import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  Stack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Head from "next/head";
import Header from "components/header";

export default function Pokemon({ pokemons }) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Box mt={{ base: "60px", md: "120px" }} mb="60px">
          <Container maxWidth="1200px">
            <Heading>{pokemons[0].name}</Heading>
          </Container>
        </Box>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = [];

  for (let i=0; i<898; i++) {
    paths.push({
      params: {
        pokemon: i.toString()
      }
    });
  }

  return {
    paths,
    fallback: false, // See the "fallback" section below
  };
}

export async function getStaticProps({ params }) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("http://localhost:8080/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: "{ pokenum(num: "+params.pokemon+") {num name primType secType image}}",
    }),
  });
  const { pokenum } = (await res.json()).data;

  return {
    props: {
      pokemons: pokenum,
    },
  };
}
