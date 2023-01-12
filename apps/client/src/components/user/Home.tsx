import styled from "styled-components";
import { trpc } from "trpc";

export const Home = () => {
  const { data } = trpc.user.useQuery();
  return <HomeContainer>{`Role: ${data?.role}`}</HomeContainer>;
};

const HomeContainer = styled.div`
  height: 100%;
  background-color: #333;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
