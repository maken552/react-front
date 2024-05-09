import { Typography } from '@material-tailwind/react'

import { Container } from '@/atoms/Container/Container'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'

export const PrivacyPage = () => {
  return (
    <>
      <Header />
      <Container className="mb-32 mt-16 max-sm:my-8">
        <Typography className="text-[32px] font-semibold leading-[32px] text-[#0F1C36] max-sm:text-[20px]">
          Privacy Policy
        </Typography>
        <Typography className="mt-10 text-[24px] font-semibold leading-[24px] text-[#4B5568] max-sm:mt-2 max-sm:text-[18px]">
          Basic Provisions
        </Typography>
        <ol className="ml-6 mt-4 list-decimal text-base font-normal leading-[24px] text-[#4B5568] max-sm:text-sm">
          <li>
            The project administration carries out its work by observing human
            rights and freedoms when processing visitor personal information. In
            the process of processing personal information of a particular
            visitor, the Administration adheres to the principles of protecting
            rights related to the privacy of the user and his family secrets.
          </li>
          <li>
            The resource policy is used by the Project Administration when
            processing all information about people visiting the web resource
            contact@tcl-intel.com
          </li>
        </ol>
        <Typography className="mt-10 text-[24px] font-semibold leading-[24px] text-[#4B5568] max-sm:mt-4 max-sm:text-[18px]">
          Main definitions used in the Policy
        </Typography>
        <ol className="ml-6 mt-4 list-decimal text-base font-normal leading-[24px] text-[#4B5568] max-sm:text-sm">
          <li>
            Automated processing of personal information is a method of
            processing information about Visitors using the capabilities of
            automated computing systems.
          </li>
          <li>
            Blocking personal information is the termination of the process of
            processing personal user information, performed temporarily (at this
            point, cases are excluded when the service has a need to clarify the
            visitor&apos;s personal information).
          </li>
          <li>
            Website - a set of computer software, information content, graphic
            information, personal information databases available on the
            Internet at contact@tcl-intel.com.
          </li>
          <li>
            Personal information information system - all personal information
            of visitors located in a common database, which can be processed
            using technical means or using technologies from the information
            category.
          </li>
          <li>
            Depersonalization of personal information - actions that are aimed
            at making it impossible to determine the ownership of personal
            information to a specific Visitor or entity.
          </li>
          <li>
            Processing of personal information - actions or a series of actions
            performed using modern automated technologies or manually, including
            data collection, recording, systematization by project employees,
            clarification, storage, complete extraction, as well as transfer,
            depersonalization, use, complete blocking, destruction along with
            material media, removal.
          </li>
          <li>
            Personal information - data that is indirectly or directly related
            to any User of the contact@tcl-intel.com platform.
          </li>
          <li>
            User - a subject visiting the web resource contact@tcl-intel.com.
          </li>
          <li>
            Providing personal data - absolutely all actions related to the
            disclosure of the visitor&apos;s personal information that make the
            data available to an authorized person or several entities.
          </li>
          <li>
            Dissemination of personal information - actions aimed at disclosing
            user personal information related to transfer to specific
            individuals for review, publication of information in the media and
            telecommunication networks, as well as disclosure of personal
            information in other ways.
          </li>
          <li>
            Destruction of personal information - actions aimed at permanently
            removing the visitor%apos;s personal information from the general
            database used by the project of systems designed to store
            information. As a result of completing the described task, material
            media containing the Visitor&apos;s personal information are
            completely destroyed.
          </li>
        </ol>
        <Typography className="mt-10 text-[24px] font-semibold leading-[24px] text-[#4B5568] max-sm:mt-4 max-sm:text-[18px]">
          Types of user information processed by the Project Administration
        </Typography>
        <ol className="ml-6 mt-4 list-decimal text-base font-normal leading-[24px] text-[#4B5568] max-sm:text-sm">
          <li>Visitor&apos;s first name, middle name and real last name.</li>
          <li>Active email address.</li>
          <li>Phone numbers.</li>
          <li>
            Anonymized information (processing occurs using appropriate online
            services).
          </li>
          <li>Standard cookies.</li>
          <li>
            The listed information is combined according to the rules of the
            Policy into one section called Personal Data.
          </li>
        </ol>
        <Typography className="mt-10 text-[24px] font-semibold leading-[24px] text-[#4B5568] max-sm:mt-4 max-sm:text-[18px]">
          Purpose of processing personal data
        </Typography>
        <ol className="ml-6 mt-4 list-decimal text-base font-normal leading-[24px] text-[#4B5568] max-sm:text-sm">
          <li>
            The purpose for processing data is to enable further informing of
            the Visitor by sending emails, providing the Visitor with access to
            services, as well as relevant materials published on the official
            website of the project. The Administration reserves the right to
            inform Visitors of the project about various offers, new and
            available products, updated services. Opting out of receiving emails
            is possible by sending an email to the project&apos;s email address
            contact@tcl-intel.com with a note indicating the refusal to receive
            emails related to the above-mentioned points.
          </li>
          <li>
            Aggregate information about the Visitor collected through internet
            statistics systems is used to improve the content of the resource
            and its quality characteristics in general.
          </li>
          <li>
            The information provided by the Visitor, including personal
            information, may be used by the Administration of the project at its
            discretion. Processing of personal information is carried out for
            the purpose of fulfilling this Agreement; User&apos;s consent to
            processing is not required.
          </li>
        </ol>
      </Container>
      <Footer />
    </>
  )
}
