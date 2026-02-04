import Image from "next/image";

const IntroducePage = () => {
    return (
        <div className="bg-white py-20">
            <div className="max-w-6xl border mx-auto sticky top-[250px] sm:top-[128px]">
                <div className="max-w-[815px]">
                    <h1 className="text-[32px] sm:text-[64px] font-semibold sm:leading-20 text-[#1A1E26] ">WHAT MAKES US THE <span className="text-yellow-500"> #1 </span> ONLINE ANANTA DISPENSARY IN INDIA?</h1>
                    <p className="text-[16px] text-[#717378] my-5 "> When it comes to what makes us the foremost online marijuana dispensary in Canada, we could wax lyrical about our positive qualities. Instead, to make this information clearer, we’ve highlighted the six prioritized features that we feel makes us a cut above the rest.</p>
                </div>
            </div>

            <div className=" max-w-6xl mx-auto flex flex-col max-[640px]:items-center sm:flex-row gap-5 sm:sticky sm:top-[128px] ">
                <div className="w-[389px] h-[375px] p-10  border rounded-xl shadow-lg bg-white max-[640px]:sticky top-[250px] ">
                    <Image src={'/images/icard6.png'} width={56} height={80} alt="icon_image" />
                    <h1 className="text-[24px] font-medium text-[#1A1E26] my-5"> CUSTOMER SERVICE</h1>
                    <p className="text-[14px] text-[#717378] font-regular ">Whether it is answering any questions you have before making a purchase, helping out with the buying process itself or taking your feedback under consideration, we are proud to provide high quality customer service that makes you – the customer – the most important person in the transaction.</p>
                </div>
                <div className="w-[389px] h-[375px] p-10  border rounded-xl shadow-lg bg-white max-[640px]:sticky top-[250px]">
                    <Image src={'/images/icard5.png'} width={56} height={80} alt="icon_image" />
                    <h1 className="text-[24px] font-medium text-[#1A1E26] my-5"> SECURITY </h1>
                    <p className="text-[14px] text-[#717378] font-regular ">When it comes to security, we only keep what details are necessary for you to have an account with us and make an order. When it comes to shipping your mail order marijuana out, we use only tamper-proof and discrete packaging so then what you’ve purchased is your business only.</p>
                </div>
                <div className="w-[389px] h-[375px] p-10  border rounded-xl shadow-lg bg-white max-[640px]:sticky top-[250px]">
                    <Image src={'/images/icard4.png'} width={56} height={80} alt="icon_image" />
                    <h1 className="text-[24px] font-medium text-[#1A1E26] my-5"> BEST VALUE </h1>
                    <p className="text-[14px] text-[#717378] font-regular ">We are continually adjusting what we supply and our prices to ensure that we maintain an optimal balance of affordable and quality for our products. We invest in the best quality strains that we can find and are always on the lookout for new, affordable and high quality weed products.</p>
                </div>
            </div>

            <div className=" max-w-6xl mx-auto flex flex-col sm:flex-row max-[640px]:items-center mt-10 gap-5 sm:sticky top-[128px]">
                <div className="w-[389px] h-[375px] bg-white p-10  border rounded-xl shadow-lg max-[640px]:sticky top-[250px]">
                    <Image src={'/images/icard3.png'} width={56} height={80} alt="icon_image" />
                    <h1 className="text-[24px] font-medium text-[#1A1E26] my-5"> DELIVERY INSURANCE</h1>
                    <p className="text-[14px] text-[#717378] font-regular ">If your mail order marijuana becomes lost, stolen, or damaged during transit, we will send you a replacement completely free of charge. Free Canada Post Xpress shipping on all orders over $120</p>
                </div>
                <div className="w-[389px] h-[375px] bg-white p-10  border rounded-xl shadow-lg max-[640px]:sticky top-[250px]">
                    <Image src={'/images/icard2.png'} width={56} height={80} alt="icon_image" />
                    <h1 className="text-[24px] font-medium text-[#1A1E26] my-5">HIGHEST QUALITY</h1>
                    <p className="text-[14px] text-[#717378] font-regular ">All of our cannabis products are tested to ensure that they are the highest quality possible. We work with expert suppliers and are always revising what makes a quality cannabis product to ensure that we have only the best available.</p>
                </div>
                <div className="w-[389px] h-[375px] bg-white p-10  border rounded-xl shadow-lg max-[640px]:sticky top-[250px]">
                    <Image src={'/images/icard1.png'} width={56} height={80} alt="icon_image" />
                    <h1 className="text-[24px] font-medium text-[#1A1E26] my-5"> TRUST</h1>
                    <p className="text-[14px] text-[#717378] font-regular ">With over 15 years in the weed business, you can rest assured that you will be taken care of. You can guarantee that we have your best interests in mind. Feel free to check out our reviews.</p>
                </div>
            </div>
        </div>
    )
}

export default IntroducePage;