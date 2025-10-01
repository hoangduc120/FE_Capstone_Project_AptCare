import { FaBuilding } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Button from "../Button/Button";
import { PATH } from "../../routes/path";

const Header = () => {
  return (
    <header className="bg-surface shadow-soft border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-500 rounded-lg">
            <FaBuilding className="h-6 w-6 text-gray-900" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">AptCare</h1>
            <p className="text-xs text-gray-600">Quản lý sửa chữa căn hộ</p>
          </div>
        </div>

        <Link to={PATH.AUTH_LOGIN}>
          <Button variant="primary" endIcon={<FaArrowRight />}>
            Đăng nhập
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
