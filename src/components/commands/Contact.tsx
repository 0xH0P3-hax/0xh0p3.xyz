import {
  ContactWrapper,
  HighlightAlt,
  HighlightSpan,
  Link
} from "../styles/Contact.styled";

const Contact: React.FC = () => {
  return (
    <ContactWrapper data-testid="contact">
    <p>
    Phone Number: <Link href="tel:+821050553161">+82 10-5055-3161</Link>
    </p>
      <p>
      Email: <Link 
      href="#"
      onClick={() => window.open("mailto:gibeom@gibeom0522.life", "_self")}
    >
      gibeom@gibeom0522.life
    </Link>
      </p>
    <p>
    Kakaotalk: @olavpark0522
    </p>
    <p>
    Github: {" "}
          <Link href="https://github.com/0xH0P3-Hax">
            https://github.com/0xH0P3-Hax
          </Link>

    </p>
    <p>
    Dreamhack: {" "}
          <Link href="https://dreamhack.io/users/68996">
          https://dreamhack.io/users/68996
          </Link>
    </p>
    <p>
    Blog: {" "}
          <Link href="https://velog.io/@0xh0p3">
          https://velog.io/@0xh0p3
          </Link>
    </p>
    </ContactWrapper>
  );
};

export default Contact;
