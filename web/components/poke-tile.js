import React from "react";
import Link from "next/link";
import { Box, Image, Skeleton, Tag } from "@chakra-ui/react";
import LazyLoad from "react-lazyload";
import {typeColors, typeTextColors} from 'pokemon';

export default function PokeTile(props) {
  return (
    <Link href={"/" + props.image}>
      <div className="pokeTile">
          <Image
            borderRadius="lg"
            overflow="hidden"
            background="#fff"
            boxSize="64px"
            objectFit="contain"
            src={"/pictures/small/" + props.image + ".png"}
            alt={props.name}
            fallback={<Box width="64px" height="64px" />}
          />
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
      </div>
    </Link>
  );
}
