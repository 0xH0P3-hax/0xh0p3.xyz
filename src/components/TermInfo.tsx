import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>visitor</User>@<WebsiteName>0xh0p3.xyz</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
