import { motion } from 'framer-motion';
import frontDevImg from '../assets/front-end-dev-photo.jpg';

const titleGlyphs = {
  A: ['01110', '10001', '10001', '11111', '10001'],
  D: ['11110', '10001', '10001', '10001', '11110'],
  E: ['11111', '10000', '11110', '10000', '11111'],
  G: ['01111', '10000', '10111', '10001', '01110'],
  H: ['10001', '10001', '11111', '10001', '10001'],
  I: ['11111', '00100', '00100', '00100', '11111'],
  K: ['10001', '10010', '11100', '10010', '10001'],
  L: ['10000', '10000', '10000', '10000', '11111'],
  M: ['10001', '11011', '10101', '10001', '10001'],
  N: ['10001', '11001', '10101', '10011', '10001'],
  O: ['01110', '10001', '10001', '10001', '01110'],
  R: ['11110', '10001', '11110', '10010', '10001'],
  S: ['01111', '10000', '01110', '00001', '11110'],
  Y: ['10001', '01010', '00100', '00100', '00100'],
  Z: ['11111', '00010', '00100', '01000', '11111'],
  ',': ['00000', '00000', '00000', '00110', '00100'],
  "'": ['00100', '00100', '00000', '00000', '00000'],
  ' ': ['00000', '00000', '00000', '00000', '00000'],
};

const titleArt = ["HELLO, I'M", 'OLEKSANDR', 'DZYGANSKY']
  .map((line) =>
    Array.from({ length: 5 }, (_, row) =>
      Array.from(line)
        .map((character) =>
          titleGlyphs[character][row].replaceAll('1', '█').replaceAll('0', ' '),
        )
        .join(' '),
    ).join('\n'),
  )
  .join('\n\n');

const Hero = () => {
  return (
    <motion.section
      id="about"
      className="hero-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div>
        <h1 className="hero-title">
          <span className="visually-hidden">
            Hello, I'm Oleksandr Dzygansky
          </span>
          <pre className="hero-title-art" aria-hidden="true">
            {titleArt}
          </pre>
        </h1>
        <p>Full-Stack Developer</p>
        <p>
          with a strong backend-first foundation. I specialize in designing
          resilient server-side architectures, databases, and clean RESTful
          APIs,with a sharp focus on code quality and security.
        </p>
        <p>
          At the same time, I seamlessly build and integrate the client side
          using modern React/TypeScript stacks, delivering fully
          production-ready applications end-to-end.
        </p>
      </div>

      <div>
        <img src={frontDevImg} alt="Oleksandr Dzygansky" className="image" />
      </div>
    </motion.section>
  );
};

export default Hero;
