import {
  Accordion,
  AccordionBody,
  AccordionHeader
} from '@material-tailwind/react'
import { useState } from 'react'

import { IconArrow } from '@/assets/Icons'

const faqData = [
  {
    id: 1,
    question: 'What is Bitcoin mining?',
    answer:
      'Nisi sint dolor dolore ex nulla qui labore anim occaecat eiusmod. Nulla culpa sint veniam dolore culpa. Cillum magna mollit elit proident dolore nostrud esse eu. Ullamco nostrud elit quis consectetur duis'
  },
  {
    id: 2,
    question: 'Why do I need to mine BTC?',
    answer:
      'Nisi sint dolor dolore ex nulla qui labore anim occaecat eiusmod. Nulla culpa sint veniam dolore culpa. Cillum magna mollit elit proident dolore nostrud esse eu. Ullamco nostrud elit quis consectetur duis'
  },
  {
    id: 3,
    question: 'Is Bitcoin mining profitable?',
    answer:
      'Nisi sint dolor dolore ex nulla qui labore anim occaecat eiusmod. Nulla culpa sint veniam dolore culpa. Cillum magna mollit elit proident dolore nostrud esse eu. Ullamco nostrud elit quis consectetur duis'
  },
  {
    id: 4,
    question: 'How to start mining bitcoins?',
    answer:
      'Nisi sint dolor dolore ex nulla qui labore anim occaecat eiusmod. Nulla culpa sint veniam dolore culpa. Cillum magna mollit elit proident dolore nostrud esse eu. Ullamco nostrud elit quis consectetur duis'
  },
  {
    id: 5,
    question: 'What is a crypto mining platform?',
    answer:
      'Nisi sint dolor dolore ex nulla qui labore anim occaecat eiusmod. Nulla culpa sint veniam dolore culpa. Cillum magna mollit elit proident dolore nostrud esse eu. Ullamco nostrud elit quis consectetur duis'
  },
  {
    id: 6,
    question: 'How does Bitcoin mining work in DigVault?',
    answer:
      'Nisi sint dolor dolore ex nulla qui labore anim occaecat eiusmod. Nulla culpa sint veniam dolore culpa. Cillum magna mollit elit proident dolore nostrud esse eu. Ullamco nostrud elit quis consectetur duis'
  }
]

export const FAQComponent = () => {
  const [open, setOpen] = useState(1)

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value)

  // const faqData = useSelector((state: RootState) => state.faqs)

  return (
    <div className="mx-auto mb-32 mt-16 flex w-full max-w-[960px] flex-col gap-6 max-sm:my-8">
      {faqData.map(({ id, question, answer }) => (
        <Accordion
          key={id}
          open={open === id}
          icon={<IconArrow id={id} open={open} />}
          className="px-4 outline-0"
        >
          <AccordionHeader
            onClick={() => handleOpen(id)}
            className="border-b border-[#dee7f2] outline-0 max-sm:text-base"
          >
            {question}
          </AccordionHeader>
          <AccordionBody className="outline-0 max-sm:text-sm">
            {answer}
          </AccordionBody>
        </Accordion>
      ))}
    </div>
  )
}
