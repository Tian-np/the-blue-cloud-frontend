import post1 from '../Assests/post1.jpg'

function Post() {
    return (
        <div className="w-3/4 bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
                <span className="inline-flex">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Post Creator Name</h3>
                    <h3 className="text-lg leading-6 font-medium text-gray-900 ml-3">17/5/2022</h3>
                </span>
                <div className="py-3">
                    <h2 className="font-semibold">ประชาสัมพันธ์โครงการ JTS Young Blood Startup  Sandbox</h2>
                    <p>
                        บริษัท จัสมิน เทคโนโลยี โซลูชั่น จำกัด (มหาชน) หรือ JTS จัดโครงการ JTS Young Blood Startup & Sandbox เพื่อเป็นสนามทดสอบประลอง ไอเดียด้านดิจิทัล ขอเชิญชวนคนรุ่นใหม่มีใจรักในดิจิทัลร่วมโชว์ศักยภาพ และปลดปล่อยไอเดียเข้าร่วมแข่งขัน สร้างสรรค์ผลงาน นวัตกรรมใหม่ ๆ แบบไร้ขีดจำกัดไม่ตีกรอบใด ๆ ในธีม “โลกธุรกิจสินทรัพย์ดิจิทัล” จะฉาย เดี่ยว หรือเป็นทีมสามารถสมัครเข้ามาได้เลย
                        ขอเพียงผลงานสามารถ เชื่อมโยงกับโอกาสทางธุรกิจสินทรัพย์ดิจิทัลได้ ก็มีโอกาสชิงเงินรางวัล รวมกว่า 300,000 บาท พร้อมโอกาสอื่นๆอีกมากมาย
                        เริ่มสมัครได้ตั้งแต่วันนี้ถึงวันที่ 20 พ.ค. 65
                        หรือติดตามรายละเอียดโครงการเพิ่มเติมได้ทาง :-
                        Facebook : Apply Jasmine<br></br>
                        LinkedIn : <a href="https://www.linkedin.com/company/jasgroup/">https://www.linkedin.com/company/jasgroup/</a>
                        <br></br>
                        QR Code : <a href="https://shorturl.asia/9HVgP">https://shorturl.asia/9HVgP</a><br></br>
                        ผู้ประสานงาน : ปัทมรัตน์ 086-800-9053/ สุนทรี 094-894-6195
                        #โอกาสสร้างอนาคตด้วยตัวคุณเอง และโอกาสเติบโตโลกสินทรัพย์ดิจิทัล รอคุณอยู่
                    </p>
                    <img src={post1} className="flex items-center justify-center"></img>
                </div>
            </div>
        </div>
    )
}

export default Post;