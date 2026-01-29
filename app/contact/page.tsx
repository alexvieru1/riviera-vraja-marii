import FAQs from '@/components/contact-page/faqs'
import PageHeader from '@/components/page-header'

const page = () => {
  return (
    <div className='flex flex-col py-20 gap-12 md:gap-20'>
      <PageHeader title="contact.title" subtitle="contact.subtitle"/>
      <FAQs/>
    </div>
  )
}

export default page