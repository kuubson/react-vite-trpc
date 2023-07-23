import { Label } from '@react-vite-trpc/ui'

import styled from 'styled-components'

import { trpc } from 'trpc'

import * as Styled from './styled'

export const Home = () => {
   const { data } = trpc.user.useQuery()

   return (
      <HomeContainer>
         <Label>Current role: {data?.role}</Label>
         <Styled.Gif
            src="https://media.giphy.com/media/Dh5q0sShxgp13DwrvG/giphy.gif"
            alt="I have no idea what I'm doing"
         />
      </HomeContainer>
   )
}

const HomeContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   min-height: 100vh;
   background: #000000;
   background: -webkit-linear-gradient(to right, #434343, #000000);
   background: linear-gradient(to right, #434343, #000000);
`
