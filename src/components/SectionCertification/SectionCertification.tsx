import cn from 'classnames'

interface ISectionCertification {
  darkMode?: boolean
}

export const CertificationMocks = [
  {
    img: '/home-page__certificate_logo01.svg',
    text1: 'ISO 27001, 27017, 27018 &',
    text2: 'SOC 2 Type 2 Certifications'
  },
  {
    img: '/home-page__certificate_logo02.svg',
    text1: 'Licensed & Regulated',
    text2: 'Digital Assets Institution'
  }
]

export const SectionCertification = ({ darkMode }: ISectionCertification) => {
  return (
    <section
      className={cn(
        'flex items-center justify-center gap-[96px] border-t border-[#E7EDF5] bg-[#F4F8FD] px-8 py-[48px] max-sm:flex-col max-sm:gap-8',
        darkMode && 'border-none !bg-[#111218]'
      )}
    >
      {CertificationMocks.map(({ img, text1, text2 }, index) => (
        <div key={index} className="flex gap-4">
          <img src={img} />
          <div className="flex flex-col">
            <span className="text-xs font-medium leading-5 text-[#8D91A1]">
              {text1}
            </span>
            <span className="text-xs font-medium leading-5 text-[#8D91A1]">
              {text2}
            </span>
          </div>
        </div>
      ))}
    </section>
  )
}
