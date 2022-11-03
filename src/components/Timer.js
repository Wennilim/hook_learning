import { useState, useEffect } from "react";
import React from "react";
import { Text } from "@chakra-ui/react";

export default function Timer() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
  let timer =  setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => clearTimeout(timer) //cleanup the effect to avoid memory leak
    //  }); //runs on every render
  }, []); //run only the first render


  return <Text>I have rendered {count} times!</Text>;
}
