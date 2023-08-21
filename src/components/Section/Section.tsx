interface SectionProps {
  type: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  type,
  title,
  children,
}): JSX.Element => {
  switch (type) {
    case 'h1':
      return (
        <section>
          <h1>{title}</h1>
          {children}
        </section>
      );
    case 'h2':
      return (
        <section>
          <h2>{title}</h2>
          {children}
        </section>
      );
    case 'h3':
      return (
        <section>
          <h3>{title}</h3>
          {children}
        </section>
      );
    case 'h4':
      return (
        <section>
          <h4>{title}</h4>
          {children}
        </section>
      );
    case 'h5':
      return (
        <section>
          <h5>{title}</h5>
          {children}
        </section>
      );
    case 'h6':
      return (
        <section>
          <h6>{title}</h6>
          {children}
        </section>
      );

    default:
      return (
        <section>
          <h1>{title}</h1>
          {children}
        </section>
      );
  }
};

export default Section;
