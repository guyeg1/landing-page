import { H1, H2, Paragraph } from '../../atoms/Typography';
import { Container } from '../../atoms/Container';

export const PrivacyPolicy = () => {
  return (
    <Container>
      <div className="relative mx-auto flex min-h-screen w-full flex-wrap items-center ">
        <div className="mb-3">
          <H1 className="mb-6">Our Privacy Policy</H1>
          <Paragraph className="mb-2">
            ExamApp is committed to providing quality services to you, and this
            policy outlines our ongoing obligations to you in respect of how we
            manage your Personal Information. 
          </Paragraph>
        </div>

        <div className="mb-3">
          <H2 className="mb-3">
            What is Personal Information, and why do we collect it?
          </H2>
          <Paragraph className="mb-2">
            Personal Information is information or an opinion that identifies an
            individual. Examples of Personal Information we collect includes
            names, addresses, email addresses and phone numbers. This Personal
            
          </Paragraph>
        </div>

        <div className="mb-3">
          <H2 className="mb-3">Sensitive Information</H2>
          <Paragraph className="mb-2">
           
          </Paragraph>
        </div>

        <div className="mb-3">
          <H2 className="mb-3">Third Parties</H2>
          <Paragraph className="mb-2">
            Where reasonable and practicable to do so, we will collect your
            Personal Information only from you. However, in some circumstances,
            we may be provided with information by third parties. In such a
            case, we will take reasonable steps to ensure that you are made
            aware of the information provided to us by the third party.
          </Paragraph>
          <Paragraph className="mb-2">
            Our Personal Information may be disclosed in several circumstances,
            including the following: 1. third parties where you consent to the
            use or disclosure; and 2. where required or authorised by law.
          </Paragraph>
          <Paragraph className="mb-2">
            Your Personal Information is stored in a manner that reasonably
            protects it from misuse, loss and unauthorised access, modification
            or disclosure. When your Personal Information is no longer needed
            for the purpose for which it was obtained, we will take reasonable
            steps to destroy or permanently de-identify your Personal
            Information. However, most of the Personal Information is or will be
            stored in client files which will be kept by us for a minimum of 7
            years.
          </Paragraph>
        </div>

        <div className="mb-3">
          <H2 className="mb-3">Policy Updates</H2>
          <Paragraph className="mb-2">
            This policy may change from time to time and is available on our
            website.
          </Paragraph>
        </div>
      </div>
    </Container>
  );
};
