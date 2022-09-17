import { Avatar, Box, Center, Stack, Text, Title } from "@mantine/core"
import { useTimeout } from "@mantine/hooks"
import { useEffect, useState } from "react"
import { motion, useAnimationControls } from "framer-motion"

import song from "../music/backsound.mp3"
import jiba from "../images/jibakotak.jpg"
import unicorn from "../images/unicorn.png"
import fotohias1 from "../images/fotohias1.jpg"
import fotohias2 from "../images/fotohias2.jpg"
import bgvideo from "../videos/bgvideofix.mp4"
import ReactPlayer from "react-player"
import GreetingCard from "../components/GreetingCard"

const CoverDepan = () => {
    return (
        <Box style={{ width: '100%', height: '100vh', position: 'relative' }}>
            <Box style={{ position: 'absolute', left: '7%', top: '12%' }}>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        duration: 2,
                        delay: 2.1,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    <img src={fotohias1} style={{ width: '110px', borderRadius: '10%' }} />
                </motion.div>
            </Box>
            <Box style={{ position: 'absolute', left: '12%', bottom: '12%' }}>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 2,
                        delay: 2.3,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    <img src={fotohias2} style={{ width: '130px', borderRadius: '10%' }} />
                </motion.div>
            </Box>
            <Box style={{ position: 'absolute', right: '10%', bottom: '20%' }}>
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        duration: 2,
                        delay: 2.6,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    <img src={fotohias2} style={{ width: '130px', borderRadius: '10%' }} />
                </motion.div>
            </Box>
            <Box style={{ position: 'absolute', right: '5%', top: '12%' }}>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 2,
                        delay: 2.8,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    <img src={fotohias2} style={{ width: '100px', borderRadius: '10%' }} />
                </motion.div>
            </Box>
            <Center style={{ height: '100%' }}>
                <Stack align={"center"}>
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 1.2,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                    >
                        <Title align="center" sx={(theme) => ({ fontFamily: 'Poppins', color: theme.black })}>
                            Selamat Ulang Tahun ke-21
                        </Title>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 100, delay: 1 }}
                        whileHover={{ scale: 1.2 }}
                    >
                        <Box style={{ position: 'relative', width: '250px' }}>
                            <img src={jiba} style={{ borderRadius: '50%', width: '100%' }} />
                            <Box style={{ position: 'absolute', bottom: -30, right: 0, }}>
                                <img src={unicorn} style={{ width: '150px' }} />
                            </Box>

                        </Box>
                    </motion.div>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 1.2,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                    >

                        <Title align="center" sx={(theme) => ({ fontFamily: 'Poppins', color: theme.black })}>
                            Ayangkuuh 🥰
                        </Title>
                    </motion.div>
                </Stack>
            </Center>
            <Box style={{ position: 'absolute', bottom: '7%', left: 0, right: 0 }}>
                <Stack align={"center"}>
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 15,
                            type: 'spring'
                        }}
                    >
                        <Text weight={"bold"} sx={(theme) => ({ color: theme.black })}>
                            Jangan lupa scroll ke bawah 😘
                        </Text>
                    </motion.div>
                </Stack>
            </Box>
            <Box style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
                <ReactPlayer url={bgvideo} playing={true} loop={true} muted={true} width={'100%'} height={'100%'} />
            </Box>
        </Box >
    )
}

const Surprise = () => {
    const [music] = useState(new Audio(song))
    const { start, clear } = useTimeout(() => music.play(), 200)
    useEffect(() => {
        // start()
    }, [])
    return (
        <div style={{ position: 'relative' }}>
            <CoverDepan />
            <GreetingCard />
        </div>
    )
}

export default Surprise