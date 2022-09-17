import { Button, Center, Group, Image, Input, Modal, Overlay, PasswordInput, Stack, Text } from "@mantine/core";
import { motion, useAnimationControls } from "framer-motion"
import { useEffect, useState } from "react"
import kaget from "../images/panda.png"

const WelcomePin = ({ changePage }) => {
    const control = useAnimationControls()
    const [active, setActive] = useState({
        welcomeTitle: true,
        modalSalah: false,
        keypad: false
    })
    const [pinValue, setPinValue] = useState('')

    useEffect(() => {
        if (pinValue.length >= 6) {
            setPinValue('')
            if (pinValue !== '031001') {
                setActive({ ...active, modalSalah: true })
                return
            }
            changePage(1)
        }
    }, [pinValue])

    useEffect(() => {
        control.start({
            scale: [0, 1, 1, 1, 1, 1, 1, 1, 0],
            transition: {
                delay: 1,
                duration: 2,
                times: [1, 1, 1, 1, 1,]
            }
        })
    }, [])

    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
            <Center style={{ width: '100%', height: '100vh' }}>
                {active.welcomeTitle && <motion.div
                    animate={control}
                    onAnimationComplete={() => {
                        setActive({ ...active, welcomeTitle: false, keypad: true })
                    }}

                >
                    <Text size={70} weight={"500"}>Haloo!</Text>
                </motion.div>}

                {active.keypad && (
                    <motion.div>
                        <Stack style={{ maxWidth: '250px' }}>
                            <Input.Wrapper label="Masukin pin dulu">
                                <Input value={pinValue} readOnly />
                            </Input.Wrapper>
                            <Group position="center">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((data) => (
                                    <Button key={data} onClick={() => { setPinValue(pinValue + data) }}>{data}</Button>
                                ))}
                                <Button onClick={() => setPinValue(pinValue.slice(0, -1))}> {"<"}</Button>
                            </Group>
                        </Stack>
                    </motion.div>
                )}
            </Center>

            <Modal opened={active.modalSalah}
                centered
                onClose={() => setActive({ ...active, modalSalah: !active.modalSalah })}
            >
                <Text size={40} align="center" weight={500}>SALAH PIN-NYA WOEEE</Text>
                <Image src={kaget} />
            </Modal>
        </div>
    );
}

export default WelcomePin