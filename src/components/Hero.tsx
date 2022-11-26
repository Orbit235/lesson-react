import { Flex, Heading } from '@chakra-ui/react'

export const Hero = ({ title }: { title: string }) => {

  return (
<Flex
    justifyContent="center"
    alignItems="center"
    bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
    bgClip="text"
  >
    <Heading fontSize="6vw">{title}</Heading>
  </Flex>

  )
}

Hero.defaultProps = {
  title: 'with-chakra-ui-typescript',
}
