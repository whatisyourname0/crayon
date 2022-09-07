import { aboutUrl, categoryUrl, indexUrl } from '@data/urls';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Navigation = () => {
  const router = useRouter();

  const currentPage = router.pathname;

  return (
    <Wrapper>
      <Text href={aboutUrl} active={currentPage === aboutUrl}>
        About
      </Text>
      <Text href={indexUrl} active={currentPage === indexUrl}>
        Posts
      </Text>
      <Text href={categoryUrl} active={currentPage === categoryUrl}>
        Categories
      </Text>
    </Wrapper>
  );
};

export default Navigation;

const Wrapper = styled.aside`
  position: sticky;
  top: 0;
  left: 0;

  width: 150px;

  > :not(:first-child) {
    margin: 16px 0 0 0;

    @media (max-width: 1240px) {
      margin: 0 0 0 16px;
    }
  }
`;

const Text = styled.a<{ active?: boolean }>`
  display: block;

  font-size: 24px;
  font-weight: 600;

  opacity: ${({ active }) => (active ? 1 : 0.3)};
  transition: opacity ease 0.5s;

  :hover {
    opacity: 1;
  }

  @media (max-width: 1240px) {
    display: inline;
  }
`;
