import { Judson } from "next/font/google";
import { Box, Progress, Text } from "@mantine/core";
import { useEffect, useState } from "react";

const judson = Judson({ weight: "400", subsets: ["latin"] });

export function ProgressBar({
  name,
  percent,
  first,
}: {
  name: string;
  percent: number;
  first?: boolean;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((value) => {
        if (value >= percent) {
          clearInterval(interval);
          return percent;
        }
        return value + 1;
      });
    }, 40);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Box
      sx={{
        transitionDuration: "2s",
        msTransitionDuration: "2s",
        transitionTimingFunction: "ease-in-out",
        msTransitionTimingFunction: "ease-in-out",
        msTransitionDelay: "0.5s",
        transitionDelay: "0.5s",
      }}
    >
      <Text<"p">
        component="p"
        className={judson.className}
        sx={{ fontSize: "30px" }}
      >
        {name}
      </Text>
      <Progress
        color={"#2cFFFF"}
        sx={{
          color: "#2cFFFF",
          height: "14px",
          borderRadius: "2px",
          backgroundColor: "rgba(217,217,217,0.1)",
          marginTop: first ? "0px" : "51px",
        }}
        value={value}
      />
    </Box>
  );
}
