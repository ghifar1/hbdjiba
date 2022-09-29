import { Carousel } from "@mantine/carousel"
import { Box } from "@mantine/core"
import ReactPlayer from "react-player"
import { cica, jamile, jara, leni, syahra } from "../videos/videosindex"

const GreetingFriends = () => {
    return (
        <Box py={"lg"}>
            <Carousel slideSize="60%" height={350} slideGap="sm">
                <Carousel.Slide>
                    <Box>
                        <ReactPlayer url={jara} controls={true} height={'100%'} />
                    </Box>
                </Carousel.Slide>
                <Carousel.Slide>
                    <Box>
                        <ReactPlayer url={cica} controls={true} height={'100%'} />
                    </Box>
                </Carousel.Slide>
                <Carousel.Slide>
                    <Box>
                        <ReactPlayer url={jamile} controls={true} height={'100%'} />
                    </Box>
                </Carousel.Slide>
                <Carousel.Slide>
                    <Box>
                        <ReactPlayer url={syahra} controls={true} height={'100%'} />
                    </Box>
                </Carousel.Slide>
            </Carousel>
        </Box>
    )
}

export default GreetingFriends