import React, { useEffect, useState } from "react";
import { base } from "../../util";

function Faq() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    base("faqs")
      .select({ view: "Grid view" })
      .eachPage((faqs, fetchNextPage) => {
        const newData = faqs.map((faq) => faq.fields);
        setFaqs(newData);
        fetchNextPage();
      });
  }, []);

  return (
    <section className='container max-w-[784px] mt-24' id='faq'>
      <h2 className='text-xl md:text-2xl font-bold mb-5'>FAQs</h2>
      {faqs &&
        faqs.map((faq, index) => (
          <details
            key={index}
            className='border-t py-3 border-gray-500 cursor-pointer'
          >
            <summary className='font-bold font_weight'>{faq.question}</summary>
            <p className='mt-2 ml-4'>{faq.paragraph1}</p>
            {faq?.paragraph2 && <p className='mt-2 ml-4'>{faq.paragraph2}</p>}
          </details>
        ))}
    </section>
  );
}

export default Faq;
