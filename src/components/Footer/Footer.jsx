import { FaBuilding } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="p-2 bg-blue-500 rounded-lg">
            <FaBuilding className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-semibold">AptCare</span>
        </div>
        <p className="text-white/80">
          © 2025 AptCare. Giải pháp quản lý sửa chữa căn hộ và chung cư.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
