import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  Stack,
  Wrap,
  WrapItem,
  Image,
  Flex,
  Text,
  Icon,
  Table,
  Tbody,
  Progress,
  Tr,
  Td,
  Tag,
} from "@chakra-ui/react";
import Head from "next/head";
import Header from "components/header";
import NextLink from "next/link";
import { FaArrowDown } from "react-icons/fa";
import { PokemonSlugs, typeColors, typeTextColors } from "pokemon";

export default function Pokemon({ pokemons, evolutions, previous, next }) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box width="100%">
        <Header />
        <Box mt={{ base: "60px", md: "120px" }} mb="60px">
          <Container width="100%" maxWidth="1200px">
            <Stack spacing={8}>
              <Flex width="100%" justifyContent="space-between">
                {previous ? (
                  <NextLink href={"/" + previous.image}>
                    <Box cursor="pointer">
                      <Text>#{previous.num.toString().padStart(3, "0")}</Text>
                      <Text fontWeight="700" color="cyan.500" fontSize="xl">
                        {"< " + previous.name}
                      </Text>
                    </Box>
                  </NextLink>
                ) : (
                  <div />
                )}
                {next ? (
                  <NextLink href={"/" + next.image}>
                    <Box cursor="pointer" textAlign="right">
                      <Text>#{next.num.toString().padStart(3, "0")}</Text>
                      <Text fontWeight="700" color="cyan.500" fontSize="xl">
                        {next.name + " >"}
                      </Text>
                    </Box>
                  </NextLink>
                ) : (
                  <div />
                )}
              </Flex>
              <Flex wrap="wrap" alignItems="flex-start">
                <Container
                  borderRadius="lg"
                  borderWidth="1px"
                  padding="20px"
                  mb="20px"
                >
                  <Stack>
                    <Heading>
                      {pokemons[0].name}
                      <span>
                        {" "}
                        - #{pokemons[0].num.toString().padStart(3, "0")}
                      </span>
                    </Heading>
                    <Box
                      borderRadius="lg"
                      overflow="hidden"
                      background="#fff"
                      width="384px"
                    >
                      <Image
                        boxSize="384px"
                        objectFit="contain"
                        src={"/pictures/" + pokemons[0].image + ".jpg"}
                        alt={pokemons[0].name}
                        fallback={<Box width="384px" height="384px" />}
                      />
                    </Box>
                    <Heading size="md">{pokemons[0].classification}</Heading>
                    <div>
                      <Tag
                        size="lg"
                        mr="5px"
                        ml="5px"
                        bgColor={typeColors[pokemons[0].primType]}
                        color={typeTextColors[pokemons[0].primType]}
                      >
                        {pokemons[0].primType}
                      </Tag>
                      {pokemons[0].secType ? (
                        <Tag
                          size="lg"
                          bgColor={typeColors[pokemons[0].secType]}
                          color={typeTextColors[pokemons[0].secType]}
                        >
                          {pokemons[0].secType}
                        </Tag>
                      ) : null}
                    </div>
                  </Stack>
                </Container>
                <Container borderRadius="lg" borderWidth="1px" padding="20px">
                  <Heading size="md">Stats</Heading>
                  <Table>
                    <colgroup>
                      <col span="1" style={{ width: "33%" }} />
                      <col span="1" style={{ width: "23%" }} />
                      <col span="1" style={{ width: "43%" }} />
                    </colgroup>
                    <Tbody>
                      <Tr>
                        <Td>HP</Td>
                        <Td>{pokemons[0].healthStat}</Td>
                        <Td>
                          <Progress
                            value={(pokemons[0].healthStat / 255) * 100}
                          />
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>Attack</Td>
                        <Td>{pokemons[0].attackStat}</Td>
                        <Td>
                          <Progress
                            value={(pokemons[0].attackStat / 255) * 100}
                          />
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>Defense</Td>
                        <Td>{pokemons[0].defenseStat}</Td>
                        <Td>
                          <Progress
                            value={(pokemons[0].defenseStat / 255) * 100}
                          />
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>Sp. Attack</Td>
                        <Td>{pokemons[0].specialAttackStat}</Td>
                        <Td>
                          <Progress
                            value={(pokemons[0].specialAttackStat / 255) * 100}
                          />
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>Sp. Defense</Td>
                        <Td>{pokemons[0].specialDefenseStat}</Td>
                        <Td>
                          <Progress
                            value={(pokemons[0].specialDefenseStat / 255) * 100}
                          />
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>Speed</Td>
                        <Td>{pokemons[0].speedStat}</Td>
                        <Td>
                          <Progress
                            value={(pokemons[0].speedStat / 255) * 100}
                          />
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>Total</Td>
                        <Td>{pokemons[0].baseStatTotal}</Td>
                        <Td>
                          <Progress
                            width="100%"
                            value={
                              (pokemons[0].baseStatTotal / (255 * 6)) * 100
                            }
                          />
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </Container>
              </Flex>
              <Stack alignItems="center">
                {evolutions.map((stage, i) => (
                  <>
                    {i != 0 && <Icon as={FaArrowDown} />}
                    <Wrap key={stage[0].name + i}>
                      {stage
                        .filter((p) => !p.alternate)
                        .map((p) => (
                          <WrapItem key={p.name}>
                            <NextLink href={"/" + p.image}>
                              <Box
                                borderRadius="lg"
                                overflow="hidden"
                                background="#fff"
                                width="128px"
                                cursor="pointer"
                                borderWidth="5px"
                                borderColor={
                                  p.num == pokemons[0].num
                                    ? "cyan.500"
                                    : "gray.500"
                                }
                              >
                                <Image
                                  boxSize="128px"
                                  objectFit="contain"
                                  src={"/pictures/" + p.image + ".jpg"}
                                  alt={p.name}
                                  fallback={
                                    <Box width="128px" height="128px" />
                                  }
                                />
                              </Box>
                            </NextLink>
                          </WrapItem>
                        ))}
                    </Wrap>
                  </>
                ))}
              </Stack>
            </Stack>
          </Container>
        </Box>
      </Box>

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

  for (let slug of PokemonSlugs) {
    paths.push({
      params: {
        pokemon: slug,
      },
    });
  }

  return {
    paths,
    fallback: false, // See the "fallback" section below
  };
}

async function getPreEvolution(id) {
  const res = await fetch("https://pokemon.winans.codes/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query:
        "{ pokemon(id: " +
        id +
        ") {id num name preEvolutionID classification primType secType image alternate}}",
    }),
  });
  const { pokemon } = (await res.json()).data;

  return pokemon;
}

async function getEvolutions(id) {
  const res = await fetch("https://pokemon.winans.codes/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query:
        "{ evolutions(id: " +
        id +
        ") {id num name preEvolutionID classification primType secType image alternate}}",
    }),
  });
  const { evolutions } = (await res.json()).data;

  return evolutions;
}

async function getPokeNum(num) {
  const res = await fetch("https://pokemon.winans.codes/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: "{ pokenum(num: " + num + ") {id num name image}}",
    }),
  });
  const { pokenum } = (await res.json()).data;
  return pokenum;
}

export async function getStaticProps({ params }) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://pokemon.winans.codes/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query:
        '{ imagename(image: "' +
        params.pokemon +
        '") {id num name preEvolutionID classification primType secType image alternate healthStat attackStat specialAttackStat defenseStat specialDefenseStat speedStat baseStatTotal}}',
    }),
  });
  const { imagename } = (await res.json()).data;

  let evolutions = [imagename];

  let searchPreEvo = imagename[0];
  let searchEvo = await getEvolutions(imagename[0].id);

  while (searchPreEvo.preEvolutionID) {
    let preEvolution = await getPreEvolution(searchPreEvo.preEvolutionID);
    searchPreEvo = preEvolution;
    evolutions = [[searchPreEvo], ...evolutions];
  }

  while (searchEvo.length > 0) {
    evolutions = [...evolutions, searchEvo];
    searchEvo = await getEvolutions(searchEvo[0].id);
  }

  return {
    props: {
      previous: (await getPokeNum(imagename[0].num - 1))[0] || null,
      next: (await getPokeNum(imagename[0].num + 1))[0] || null,
      pokemons: imagename,
      evolutions,
    },
  };
}
