import styled from "styled-components";

export const EduIntro = styled.div`
  margin-bottom: 0.75rem;
`;

export const EduList = styled.div`
  margin-bottom: 1rem;

  .title {
    font-weight: 700;
    margin-bottom: 0.275rem;
  }

  .desc {
    color: ${({ theme }) => theme.colors?.text[200]};
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors?.secondary};
  text-decoration: none;
  line-height: 1.5rem;
  white-space: nowrap;
  border-bottom: 2px dashed ${({ theme }) => theme.colors?.secondary};

  &:hover {
    border-bottom-style: solid;
  }
`;
