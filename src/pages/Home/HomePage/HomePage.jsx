import { Link } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import { FaArrowRight } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import Button from "../../../components/Button/button";
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-surface">
      <Header />
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Quản lý sửa chữa
            <span className="block text-blue-500">chuyên nghiệp</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Giải pháp quản lý và theo dõi công việc sửa chữa, bảo trì trong căn
            hộ và chung cư một cách hiệu quả, minh bạch và chuyên nghiệp.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/auth">
              <Button variant="primary" endIcon={<FaArrowRight />}>
                Bắt đầu ngay
              </Button>
            </Link>
            <Button variant="outline">Tìm hiểu thêm</Button>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-surface">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Tính năng nổi bật
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-background rounded-lg shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="p-3 bg-blue-500 rounded-full w-fit mb-4">
                <CiSettings className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Quản lý công việc
              </h3>
              <p className="text-gray-600">
                Theo dõi và quản lý tất cả các công việc sửa chữa, bảo trì từ
                yêu cầu đến hoàn thành.
              </p>
            </div>

            <div className="p-6 bg-background rounded-lg shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="p-3 bg-blue-500 rounded-full w-fit mb-4">
                <FaUsers className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Quản lý nhân sự
              </h3>
              <p className="text-gray-600">
                Phân công và theo dõi hiệu suất làm việc của đội ngũ kỹ thuật và
                bảo trì.
              </p>
            </div>

            <div className="p-6 bg-background rounded-lg shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="p-3 bg-blue-500 rounded-full w-fit mb-4">
                <FiFileText className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Báo cáo chi tiết
              </h3>
              <p className="text-gray-600">
                Tạo báo cáo tự động về tiến độ, chi phí và hiệu quả công việc.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
