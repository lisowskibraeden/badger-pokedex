import { Box, Button, Container, Heading, Link, Stack, Wrap, WrapItem } from "@chakra-ui/react";
import Head from "next/head";
import Header from "components/header";
import PokeTile from "components/poke-tile";

const generations = [
  {
    start: 1,
    end: 151
  },
  {
    start: 152,
    end: 251
  },
  {
    start: 252,
    end: 386
  },
  {
    start: 387,
    end: 493
  },
  {
    start: 494,
    end: 649
  },
  {
    start: 650,
    end: 721
  },
  {
    start: 722,
    end: 809
  },
  {
    start: 810,
    end: 898
  }
];

export default function Home({ pokemons }) {
  return (
    <div className="container">
      <Head>
        <title>Badger Pokedex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Box mt={{ base: "60px", md: "120px" }} mb="60px">
          <Container maxWidth="1200px">
            <Stack mb={{ base: "-40px" }}>
              <Wrap spacing="20px">
                {generations.map((gen, index) => (
                  <WrapItem key={"#gen" + (index + 1)}>
                    <Link
                      key={"#gen" + (index + 1)}
                      href={"#gen" + (index + 1)}
                    >
                      <Button>Generation {index + 1}</Button>
                    </Link>
                  </WrapItem>
                ))}
              </Wrap>
            </Stack>
            <Stack spacing={8}>
              {generations.map((gen, index) => (
                <Stack key={index}>
                  <Heading
                    size="lg"
                    id={"gen" + (index + 1)}
                    pt={{ base: "40px", md: "100px" }}
                  >
                    Generation {index + 1}
                  </Heading>
                  <Wrap spacing="0px">
                    {pokemons.slice(gen.start - 1, gen.end).map((p) => (
                      <WrapItem key={p.num} width="12.5%" minWidth="145px">
                        <PokeTile {...p} />
                      </WrapItem>
                    ))}
                  </Wrap>
                </Stack>
              ))}
            </Stack>
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

      <style jsx global>{`
        .pokeTile {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 5px;
          cursor: pointer;
          font-weight: 700;
          text-align: center;
        }

        .pokeTile span {
          opacity: 0.7;
          font-size: 0.8em;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://pokemon.winans.codes/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: "{ allpokenoalt {num name primType secType image}}",
    }),
  });
  const { allpokenoalt } = (await res.json()).data;

  return {
    props: {
      pokemons: allpokenoalt,
    },
  };
}
