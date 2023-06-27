import { Judson } from "next/font/google";
import {
  Box,
  Container,
  Divider,
  em,
  getBreakpointValue,
  Image,
  rem,
  Text,
} from "@mantine/core";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import Link from "next/link";
import { ProgressBar } from "@/c/progress_bar";
import Head from "next/head";

const judson = Judson({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const headerTextClass = (theme: any) => ({
    fontSize: "25px",
    cursor: "pointer",
    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.xl) - 1)})`]:
      {
        fontSize: "20px",
      },
  });

  const text85FontSize = (theme: any) => ({
    fontSize: "85px",
    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.xl) - 1)})`]:
      {
        fontSize: "40px",
      },
  });
  const onClick = (id: string) => {
    return (e: any) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
  };

  return (
    <main>
      <Head>
        <title>Mina Roshankar</title>
      </Head>
      <header>
        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "90px",
            height: "10vh",
            [`@media (max-width: ${em(
              getBreakpointValue(theme.breakpoints.xl) - 1
            )})`]: {
              gap: "30px",
            },
          })}
        >
          <Text
            className={judson.className}
            sx={headerTextClass}
            onClick={onClick("about")}
          >
            About Me
          </Text>
          <Text
            className={judson.className}
            sx={headerTextClass}
            onClick={onClick("projects")}
          >
            My Projects
          </Text>
          <Text
            className={judson.className}
            sx={headerTextClass}
            onClick={onClick("contact")}
          >
            Contact Me
          </Text>
        </Box>
      </header>

      <Box<"section">
        className={judson.className}
        component="section"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "90vh",
        }}
      >
        <Text<"h1">
          component="h1"
          className={judson.className}
          sx={text85FontSize}
        >
          Welcome!
        </Text>
        <Text<"h2">
          component="h2"
          className={judson.className}
          sx={text85FontSize}
        >
          I am <span style={{ color: "#2CFFFF" }}>UI UX Designer</span>
        </Text>
      </Box>

      <br />

      <Box<"section">
        id={"about"}
        className={judson.className}
        component="section"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Text<"h1">
          component="h1"
          className={judson.className}
          sx={{ fontSize: "70px" }}
        >
          About Me
        </Text>

        <Container
          fluid
          sx={(theme) => ({
            paddingTop: "10rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            [`@media (max-width: ${em(
              getBreakpointValue(theme.breakpoints.xl) - 1
            )})`]: {
              paddingTop: "5rem",
            },
          })}
        >
          <Box
            sx={(theme) => ({
              width: "80%",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "250px",
              flexWrap: "wrap",
              [`@media (max-width: ${em(
                getBreakpointValue(theme.breakpoints.xl) - 1
              )})`]: {
                gap: "50px",
              },
            })}
          >
            <Box
              sx={(theme) => ({
                flex: 1,
                [`@media (max-width: ${em(
                  getBreakpointValue(theme.breakpoints.xl) - 1
                )})`]: {
                  order: 2,
                  flexGrow: 1,
                  flexBasis: "100%",
                },
              })}
            >
              <ProgressBar first name={"Figma"} percent={95} />
              <ProgressBar first name={"Adobe Photoshop"} percent={70} />
              <ProgressBar first name={"Adobe XD"} percent={65} />
              <ProgressBar first name={"Adobe Illustrator"} percent={97} />
              <ProgressBar first name={"Blender"} percent={48} />
            </Box>

            <Box
              sx={(theme) => ({
                flex: 1,
                [`@media (max-width: ${em(
                  getBreakpointValue(theme.breakpoints.xl) - 1
                )})`]: {
                  order: 1,
                  flexGrow: 1,
                  flexBasis: "100%",
                },
              })}
            >
              <Text<"p">
                component="p"
                className={judson.className}
                sx={(theme) => ({
                  fontSize: "35px",
                  textAlign: "justify",
                  [`@media (max-width: ${em(
                    getBreakpointValue(theme.breakpoints.xl) - 1
                  )})`]: {
                    textAlign: "left",
                    fontSize: "20px",
                  },
                })}
              >
                hello, i am mina, computer science student who is also a
                creative graphic designer and ui developer. i am experienced in
                designing graphical elements using adobe illustrator and
                photoshop, i am also experienced in designing and developing
                eye-pleasing UI elements for iOS and android applications,
                weblogs, and websites. i try to get better at my field day by
                day and learn more about designing 3D models, new UI Design
                rules.
              </Text>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box<"section">
        id={"projects"}
        className={judson.className}
        component="section"
        sx={{
          marginTop: rem(50),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Text<"h1">
          component="h1"
          className={judson.className}
          sx={{ fontSize: "70px" }}
        >
          My Projects
        </Text>
        <Container
          fluid
          sx={(theme) => ({
            paddingTop: "5rem",
            [`@media (max-width: ${em(
              getBreakpointValue(theme.breakpoints.xl) - 1
            )})`]: {
              paddingTop: "5rem",
            },
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          })}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "stretch",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: rem(30),
            }}
          >
            <Box
              sx={{
                flex: 2,
                display: "flex",
                flexDirection: "column",
                gap: rem(30),
              }}
            >
              <Box sx={{ display: "flex", gap: rem(30) }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: rem(30),
                  }}
                >
                  <Image src={"/3.png"} alt="1st project" />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: rem(30),
                  }}
                >
                  <Image src={"/2.png"} alt="2nd project" />
                  <Box
                    sx={{
                      backgroundColor: "#F2B48F",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Box>
              </Box>
              <Box>
                <Image src={"/5.png"} alt="4th project" />
              </Box>
              <Box sx={{ display: "flex", gap: rem(30), height: "100%" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: rem(30),
                  }}
                >
                  <Image src={"/4.png"} alt="6th project" />
                  <Image src={"/9.png"} alt="project" />

                  <Box
                    sx={{
                      backgroundColor: "#D9D9D9",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: rem(30),
                  }}
                >
                  <Image src={"/6.png"} alt="7th project" />
                  <Image src={"/1.png"} alt="project" />

                  <Box
                    sx={{
                      backgroundColor: "#747F59",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: rem(30),
              }}
            >
              <Image src={"/7.png"} alt="3rd project" />
              <Image src={"/11.png"} alt="5th project" />
              <Image src={"/8.png"} alt="project" />
              <Image src={"/10.png"} alt="project" />
            </Box>
          </Box>
        </Container>
      </Box>

      <Box<"section">
        id={"contact"}
        className={judson.className}
        component="section"
        sx={{
          marginTop: rem(100),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "20vh",
        }}
      >
        <Box sx={{ width: "25%" }}>
          <Text<"h4">
            component="h4"
            className={judson.className}
            sx={(theme: any) => ({
              fontSize: "30px",
              [`@media (max-width: ${em(
                getBreakpointValue(theme.breakpoints.xl) - 1
              )})`]: {
                fontSize: "20px",
              },
              textAlign: "center",
            })}
          >
            Contact me !
          </Text>
          <Divider sx={{ opacity: 0.5 }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10px",
              gap: "30px",
            }}
          >
            <Link href={"#"}>
              <IconBrandLinkedin size={36} />
            </Link>
            <Link href={"#"}>
              <IconBrandInstagram size={36} />
            </Link>
            <Link href={"#"}>
              <IconMail size={36} />
            </Link>
            <Link href={"#"}>
              <IconPhone size={36} />
            </Link>
          </Box>
        </Box>
      </Box>
    </main>
  );
}
