import { H2, H5 } from '../../atoms/Typography';
import { Container } from '../../atoms/Container';
import { Accordion, Props as AccordionProps } from '../../molecules/Accordion';

type Props = {
  title: string;
  description: string;
  qas: AccordionProps[];
};

export const FAQ: React.FC<Props> = ({ title, description, qas }) => {
  return (
    <Container>
      <div className="my-12 grid w-full grid-cols-1 gap-4 sm:grid-cols-4">
        <div className="col-span-1 flex w-full flex-col">
          <H2>{title}</H2>
          <H5 className="my-2">{description}</H5>
        </div>
        <div className="col-span-3 w-full">
          {qas.map((qa, idx) => {
            return (
              <Accordion
                key={idx}
                className="mb-2"
                question={qa.question}
                answer={qa.answer}
                defaultOpen={true}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
};
