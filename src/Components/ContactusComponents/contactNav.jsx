import React from 'react'

const ContactNav = () => {
  return (
    <section
    className="h-[324px] xl:h-[648px] w-full bg-cover bg-center flex flex-col justify-center bg-color-blend-mode_contact_us"
    style={{
      backgroundImage: `url("contact_us.png")`,
    }}
  >
    <div className="ml-10 xl:ml-40">
      <h1 className="text-white text-[30px] xl:text-[96px] font-semibold leading-10 xl:leading-[131px]">
      Contact Us
      </h1>
      {/* <p className="text-white text-[20px] leading-9">
        Home :: Contact Us
      </p> */}
    </div>
  </section>
  )
}

export default ContactNav;