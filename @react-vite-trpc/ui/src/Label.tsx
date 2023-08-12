import styled from 'styled-components'

type LabelProps = {
   children: React.ReactNode
}

export const Label = ({ children }: LabelProps) => <LabelContainer>{children}</LabelContainer>

const LabelContainer = styled.div`
   padding: 12px 24px;
   font-size: 20px;
   background-color: white;
   font-family: monospace;
   border-radius: 4px;
   cursor: pointer;
   margin-bottom: 15px;
   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`
