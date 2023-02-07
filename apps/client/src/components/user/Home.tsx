import { Button } from "@example/ui";
import styled from "styled-components";

import { trpc } from "api";

export const Home = () => {
  const { data } = trpc.user.useQuery();
  return (
    <HomeContainer>
      <p>{`User name from service1: ${data?.user.name}`}</p>
      <p>{`User role from service2: ${data?.role}`}</p>
      <Button />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  height: 100%;
  background-color: #333;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  grid-gap: 10px;
`;
