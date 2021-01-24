import {
  chakra,
  Flex,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  useUpdateEffect,
} from "@chakra-ui/react";
import { useViewportScroll } from "framer-motion";
import NextLink from "next/link";
import React, { useState } from "react";
import { FaMoon, FaSun, FaSearch } from "react-icons/fa";

const GithubIcon = (props) => (
  <svg viewBox="0 0 20 20" {...props}>
    <path
      fill="currentColor"
      d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"
    />
  </svg>
);

const Logo = (props) => (
  <svg height="32px" viewBox="0 0 426 100">
    <path
      fill="currentColor"
      d="m99.68 41.65a49.699 49.699 0 0 0-6.9914-16.201l3.9192-3.9192a12.273 12.273 0 0 0 2.1431-13.896c-2.4595-5.0484-8.1138-7.4141-14.068-5.8833a34.509 34.509 0 0 0-8.3784 3.7608 46.203 46.203 0 0 1-4.6202 2.3724 56.009 56.009 0 0 0-21.684-4.0137 56.097 56.097 0 0 0-21.692 4.0102 46.325 46.325 0 0 1-4.6088-2.3676 34.508 34.508 0 0 0-8.3784-3.7607c-5.9541-1.5308-11.608 0.835-14.068 5.8833a12.273 12.273 0 0 0 2.1431 13.896l3.9107 3.9107a49.703 49.703 0 0 0-6.9962 16.208l-0.31 1.76 1.39 1.11c11.44 9.13 19.48 22.32 24.99 32.7 1.4 2.65 2.64 5.11 3.73 7.28 0.56 1.12 1.08 2.15 1.56 3.07a20.514 20.514 0 0 0 18.17 11.14h0.31a20.296 20.296 0 0 0 14.96-6.55 20.519 20.519 0 0 0 3.21-4.59c0.48-0.92 1-1.95 1.56-3.07 1.09-2.16 2.33-4.61 3.74-7.25v-0.01c5.5-10.38 13.54-23.58 24.98-32.72l1.4-1.11zm-20.431-30.911a29.547 29.547 0 0 1 6.9268-3.1768c2.519-0.64746 5.73-0.27783 7.1812 2.7002a6.2821 6.2821 0 0 1-0.9917 7.0254l-3.3009 3.3009c-0.09558-0.1128-0.18756-0.22608-0.28473-0.33863a44.752 44.752 0 0 0-9.03-8.05h-0.01q-0.70294-0.47487-1.439-0.93084c0.31716-0.17688 0.6354-0.35395 0.94839-0.53022zm-71.612 6.5501a6.2821 6.2821 0 0 1-0.9917-7.0254c1.4512-2.978 4.6621-3.3476 7.1812-2.7002a29.547 29.547 0 0 1 6.9268 3.1768c0.308 0.17352 0.62133 0.34765 0.93335 0.52179q-0.734 0.4551-1.4373 0.928a45.159 45.159 0 0 0-9.04 8.0601c-0.09533 0.11042-0.18548 0.2215-0.27923 0.3321zm-1.0277 23.751a43.805 43.805 0 0 1 7.88-15.58c5.21 8.92 11.86 23.51 12.43 40.56-5.1-8.49-11.81-17.78-20.31-24.98zm26.64 15.91a3.83 3.83 0 1 1 3.84-3.83 3.8303 3.8303 0 0 1-3.84 3.83zm27.39 31.2c-2.81-6.54-10.64-6.45-10.64-6.45s-7.84-0.09-10.65 6.45a14.363 14.363 0 0 1-2.18-3.02c4.65-15.98 8.96-43.23-1.97-73.33a53.87 53.87 0 0 1 14.8-1.93 53.848 53.848 0 0 1 14.79 1.93c-10.93 30.1-6.62 57.35-1.97 73.33a14.363 14.363 0 0 1-2.18 3.02zm6.1-31.19a3.835 3.835 0 1 1 3.84-3.84 3.8389 3.8389 0 0 1-3.84 3.84zm6.33 9.06c0.57-17.05 7.22-31.64 12.43-40.56a43.884 43.884 0 0 1 7.88 15.58c-8.5 7.2-15.2 16.49-20.31 24.98z"
    />
    <g fill="currentColor" stroke-width="1.7837" aria-label="Pokédex">
      <path d="m117.45 19.341h18.493q9.3608 0 14.041 5.0229 4.6804 5.0229 4.6804 14.726v7.8768q0 9.7032-4.6804 14.726-4.6804 5.0229-14.041 5.0229h-5.9361v32.534h-12.557zm18.493 35.959q3.0822 0 4.5662-1.7123 1.5982-1.7123 1.5982-5.8219v-9.4749q0-4.1096-1.5982-5.8219-1.484-1.7123-4.5662-1.7123h-5.9361v24.544z" />
      <path d="m179.66 100.39q-9.2466 0-14.155-5.2512-4.9087-5.2512-4.9087-14.84v-42.009q0-9.5891 4.9087-14.84 4.9087-5.2512 14.155-5.2512t14.155 5.2512q4.9087 5.2512 4.9087 14.84v42.009q0 9.5891-4.9087 14.84-4.9087 5.2512-14.155 5.2512zm0-11.416q6.5069 0 6.5069-7.8768v-43.608q0-7.8768-6.5069-7.8768t-6.5069 7.8768v43.608q0 7.8768 6.5069 7.8768z" />
      <path d="m207.17 19.341h12.557v33.676l15.982-33.676h12.557l-14.954 29.338 15.183 50.571h-13.128l-10.616-35.617-5.0228 10.16v25.457h-12.557z" />
      <path d="m254.43 19.341h34.247v11.416h-21.69v21.119h17.238v11.416h-17.238v24.544h21.69v11.416h-34.247zm18.265-18.493h13.699l-12.215 13.128h-9.4749z" />
      <path d="m295.87 19.341h19.178q9.3608 0 14.041 5.0229 4.6804 5.0229 4.6804 14.726v40.411q0 9.7032-4.6804 14.726-4.6804 5.0229-14.041 5.0229h-19.178zm18.95 68.494q3.0822 0 4.6804-1.8265 1.7123-1.8265 1.7123-5.9361v-41.553q0-4.1096-1.7123-5.9361-1.5982-1.8265-4.6804-1.8265h-6.3927v57.078z" />
      <path d="m342.22 19.341h34.247v11.416h-21.69v21.119h17.238v11.416h-17.238v24.544h21.69v11.416h-34.247z" />
      <path d="m394.96 58.382-13.813-39.041h13.242l8.4475 25.799h0.2283l8.6758-25.799h11.872l-13.813 39.041 14.498 40.868h-13.242l-9.1325-27.854h-0.22831l-9.3608 27.854h-11.872z" />
    </g>
  </svg>
);

function HeaderContent() {
  const mobileNav = useDisclosure();

  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  const [query, updateQuery] = useState('');

  return (
    <>
      <Flex w="100%" h="100%" px="6" align="center" justify="space-between">
        <Flex
          align="center"
          flexShrink="0"
          color="gray.500"
          h="32"
          mr={{ base: "20px", md: "20px" }}
        >
          <NextLink href="/" passHref>
            <chakra.a
              display="block"
              aria-label="Badger Pokedex, Back to homepage"
            >
              <Icon as={Logo} />
            </chakra.a>
          </NextLink>
        </Flex>
        <Flex
          flexGrow="1"
          justify="flex-end"
          align="center"
          maxW="600px"
          color="gray.400"
        >
          <InputGroup width="100%">
            <InputLeftElement
              pointerEvents="none"
              children={
                <Icon
                  as={FaSearch}
                  display="block"
                  transition="color 0.2s"
                  w="4"
                  h="4"
                />
              }
            />
            <Input placeHolder="Search" variant="filled" value={query} onChange={e => updateQuery(e.target.value)} />
          </InputGroup>
        </Flex>

        <Flex justify="flex-end" align="center" color="gray.400" flexShrink="0">
          <HStack spacing="5" display={{ base: "none", md: "flex" }}>
            <Link
              isExternal
              aria-label="Go to Chakra UI GitHub page"
              href={"https://github.com/lisowskibraeden/badger-pokedex"}
            >
              <Icon
                as={GithubIcon}
                display="block"
                transition="color 0.2s"
                w="5"
                h="5"
                _hover={{ color: "gray.600" }}
              />
            </Link>
          </HStack>
          <IconButton
            size="md"
            fontSize="lg"
            aria-label={`Switch to ${text} mode`}
            variant="ghost"
            color="current"
            ml={{ base: "0", md: "3" }}
            onClick={toggleMode}
            icon={<SwitchIcon />}
          />
        </Flex>
      </Flex>
    </>
  );
}

export default function Header(props) {
  const bg = useColorModeValue("white", "gray.800");
  const ref = React.useRef();
  const [y, setY] = React.useState(0);
  const { height = 0 } = ref.current?.getBoundingClientRect() ?? {};

  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);

  return (
    <chakra.header
      ref={ref}
      shadow={y > height ? "sm" : undefined}
      transition="box-shadow 0.2s"
      pos="fixed"
      top="0"
      zIndex="3"
      bg={bg}
      left="0"
      right="0"
      borderTop="6px solid"
      borderTopColor="cyan.400"
      width="full"
      {...props}
    >
      <chakra.div height="4.5rem" mx="auto" maxW="1200px">
        <HeaderContent />
      </chakra.div>
    </chakra.header>
  );
}
