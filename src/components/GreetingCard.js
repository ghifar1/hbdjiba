import { Box, Group, Paper, Stack, Text, Title } from "@mantine/core"

const GreetingCard = () => {
    return (
        <Box style={{ height: '100vh', width: '100%' }} py={20}>
            <Stack mx={"10%"} spacing={"xl"}>
                <Group position="center"><Title sx={(theme) => ({ color: theme.colors.pink[6] })}>Happy Birthday </Title><Title align="center">To You 🤗</Title></Group>
                <Paper p={"md"} withBorder>
                    <Text>Haaloooo cantikkuh yang sedang berulang tahun, selamat yaahhh.</Text>
                    <Text>
                        Pertama-tama, gipar minta maaf sering bikin marah jiba, sering ilang dan slow respon hehehe.
                        Semoga di umur kamu sekarang yang menyentuh 21, kamu lebih dewasa lagi, berani jadi dewasa
                        dan ga takut kehidupan~ ehhehe kek lagu anu yak, trus juga kamu lebih jago lagi atur budget,
                        dan lebih sayang lagi sama giparrr 🤩.
                    </Text>
                    <Text mt={10}>
                        For now, keep spirit for skripsi dan PKL yaa, gipar doainn jadi orang sukses dan kerenn nantinya.
                        Jangan insecure lagi yaahhh, tetap percaya diri karena setiap manusia mempunyai kelebihan masing-masing🙆.
                    </Text>
                    <Text mt={10}>
                        Oh iya, di bawah ada video ucapan selamat dari teman-teman jiba jugaa, monggo diliat yaaa.
                    </Text>
                </Paper>
            </Stack>
        </Box>
    )
}

export default GreetingCard