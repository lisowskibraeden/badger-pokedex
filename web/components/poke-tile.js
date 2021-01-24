import React from "react";
import Link from "next/link";
import { Box, Image, Skeleton, Tag } from "@chakra-ui/react";
import LazyLoad from "react-lazyload";
import {typeColors, typeTextColors} from 'pokemon';

export default function PokeTile(props) {
  return (
    <Link href={"/" + props.image}>
      <div className="pokeTile">
        <Box borderRadius="lg" overflow="hidden" background="#fff">
            <Image
              boxSize="64px"
              objectFit="contain"
              src={"/pictures/small/" + props.image + ".png"}
              alt={props.name}
              fallback={<Box width="64px" height="64px" />}
            />
        </Box>
        <span>#{props.num.toString().padStart(3, "0")}</span>
        <div>{props.name}</div>
        <div>
          <Tag
            size="sm"
            mr="5px"
            ml="5px"
            bgColor={typeColors[props.primType]}
            color={typeTextColors[props.primType]}
          >
            {props.primType}
          </Tag>
          {props.secType ? (
            <Tag
              size="sm"
              bgColor={typeColors[props.secType]}
              color={typeTextColors[props.secType]}
            >
              {props.secType}
            </Tag>
          ) : null}
        </div>

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
    </Link>
  );
}
